import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { twoline2rv, sgp4, jday, gstime } from "../js/index.js";

const TLE_URL = "https://celestrak.org/NORAD/elements/gp.php?GROUP=cubesat&FORMAT=tle";
const WHICHCONST = 72;

const status = document.getElementById("status");

function parseTleText(text) {
    const lines = text
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
    const tles = [];
    for (let i = 0; i + 2 < lines.length; i += 3) {
        tles.push({ name: lines[i], line1: lines[i + 1], line2: lines[i + 2] });
    }
    return tles;
}

// ECI position (km) → ECEF Cartesian3 (m) via Greenwich Sidereal Time rotation
function eciToCartesian3(r, gst) {
    const cos = Math.cos(gst);
    const sin = Math.sin(gst);
    return new Cesium.Cartesian3(
        (r[0] * cos + r[1] * sin) * 1000,
        (-r[0] * sin + r[1] * cos) * 1000,
        r[2] * 1000
    );
}

function currentJd(now) {
    return jday(
        now.getUTCFullYear(),
        now.getUTCMonth() + 1,
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds() + now.getUTCMilliseconds() / 1000
    );
}

async function main() {
    const viewer = new Cesium.Viewer("cesiumContainer", {
        imageryProvider: new Cesium.OpenStreetMapImageryProvider({
            url: "https://tile.openstreetmap.org/",
        }),
        baseLayerPicker: false,
        geocoder: false,
        homeButton: true,
        sceneModePicker: true,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: true,
        shouldAnimate: true,
    });

    // Fetch TLEs
    let tleData;
    try {
        const res = await fetch(TLE_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        tleData = parseTleText(await res.text());
    } catch (err) {
        status.textContent = `Failed to load TLEs: ${err.message}`;
        return;
    }

    status.textContent = `Initialising ${tleData.length} satellites…`;

    // Parse all TLEs into satrecs
    const parsed = tleData.flatMap(({ name, line1, line2 }) => {
        try {
            const [satrec] = twoline2rv(WHICHCONST, line1, line2, "c", "e");
            return satrec.error === 0 ? [{ name, satrec }] : [];
        } catch {
            return [];
        }
    });

    // Compute initial positions at current time — skip any that fail propagation
    const now = new Date();
    const jd0 = currentJd(now);
    const gst0 = gstime(jd0);

    const points = new Cesium.PointPrimitiveCollection();
    viewer.scene.primitives.add(points);

    const satellites = parsed.flatMap(({ name, satrec }) => {
        const tsince = (jd0 - satrec.jdsatepoch) * 1440;
        const [updated, r] = sgp4(satrec, tsince);
        if (updated.error !== 0) return [];
        const primitive = points.add({
            position: eciToCartesian3(r, gst0),
            color: Cesium.Color.YELLOW,
            pixelSize: 5,
            scaleByDistance: new Cesium.NearFarScalar(1e6, 2, 2e7, 0.5),
        });
        return [{ name, satrec, primitive }];
    });

    status.textContent = `Tracking ${satellites.length} satellites`;

    // Update positions on every clock tick
    viewer.clock.onTick.addEventListener(() => {
        const t = new Date();
        const jd = currentJd(t);
        const gst = gstime(jd);
        for (const { satrec, primitive } of satellites) {
            const tsince = (jd - satrec.jdsatepoch) * 1440;
            const [updated, r] = sgp4(satrec, tsince);
            if (updated.error !== 0) continue;
            primitive.position = eciToCartesian3(r, gst);
        }
    });
}

main();
