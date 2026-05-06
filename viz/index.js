import * as Cesium from "cesium";
import { twoline2rv, sgp4, jday, gstime } from "../js/index.js";

const WHICHCONST = 72;
const status = document.getElementById("status");
const groupSelect = document.getElementById("groupSelect");
const tooltip = document.getElementById("tooltip");
const searchInput = document.getElementById("satelliteSearch");

const detailsPanel = document.getElementById("detailsPanel");
const satNameEl = document.getElementById("satName");
const satLatEl = document.getElementById("satLat");
const satLonEl = document.getElementById("satLon");
const satAltEl = document.getElementById("satAlt");
const satVelEl = document.getElementById("satVel");
const closeDetailsBtn = document.getElementById("closeDetails");

const GROUP_COLORS = {
    cubesat: Cesium.Color.YELLOW,
    "last-30-days": Cesium.Color.LIME,
    stations: Cesium.Color.WHITE,
    active: Cesium.Color.AQUA,
    starlink: Cesium.Color.CORNFLOWERBLUE,
    geo: Cesium.Color.GOLD,
    "gps-ops": Cesium.Color.CYAN,
    weather: Cesium.Color.LIGHTBLUE,
    "iridium-33-debris": Cesium.Color.RED,
    "cosmos-2251-debris": Cesium.Color.ORANGERED,
    "fengyun-1c-debris": Cesium.Color.DARKRED,
};

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
        baseLayerPicker: false,
        geocoder: false,
        homeButton: true,
        sceneModePicker: true,
        navigationHelpButton: false,
        animation: true,
        timeline: true,
        fullscreenButton: true,
        shouldAnimate: true,
    });

    // Use Labels for Emojis
    const labels = new Cesium.LabelCollection();
    viewer.scene.primitives.add(labels);

    let satellites = [];
    let selectedSat = null;
    let orbitEntity = null;

    async function loadGroup(group) {
        labels.removeAll();
        satellites = [];
        deselectSatellite();
        status.textContent = `Loading ${group} TLEs…`;

        const url = `/tle/${group}.txt`;
        let tleData;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            tleData = parseTleText(await res.text());
        } catch (err) {
            status.textContent = `Failed to load ${group}: ${err.message}`;
            return;
        }

        const parsed = tleData.flatMap(({ name, line1, line2 }) => {
            try {
                const [satrec] = twoline2rv(WHICHCONST, line1, line2, "c", "e");
                return satrec.error === 0 ? [{ name, satrec }] : [];
            } catch {
                return [];
            }
        });

        const now = new Date();
        const jd0 = currentJd(now);
        const gst0 = gstime(jd0);
        const color = GROUP_COLORS[group] || Cesium.Color.YELLOW;

        satellites = parsed.flatMap(({ name, satrec }) => {
            const tsince = (jd0 - satrec.jdsatepoch) * 1440;
            const [updated, r] = sgp4(satrec, tsince);
            if (updated.error !== 0 || isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2])) return [];

            const primitive = labels.add({
                position: eciToCartesian3(r, gst0),
                text: "🛰️",
                font: "24px sans-serif",
                fillColor: color,
                outlineColor: Cesium.Color.BLACK,
                outlineWidth: 2,
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 2.0e7, 0.5),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
            });

            primitive.id = { name, satrec, baseColor: color };
            return [{ name, satrec, primitive }];
        });

        status.textContent = `Tracking ${satellites.length} ${group} satellites`;
    }

    function deselectSatellite() {
        if (selectedSat) {
            selectedSat.primitive.fillColor = selectedSat.primitive.id.baseColor;
            selectedSat.primitive.scale = 1.0;
        }
        selectedSat = null;
        detailsPanel.style.display = "none";
        viewer.trackedEntity = undefined;
        if (orbitEntity) {
            viewer.entities.remove(orbitEntity);
            orbitEntity = null;
        }
    }

    function selectSatellite(sat) {
        deselectSatellite();
        selectedSat = sat;
        sat.primitive.fillColor = Cesium.Color.WHITE;
        sat.primitive.scale = 1.5;

        detailsPanel.style.display = "block";
        satNameEl.textContent = sat.name;

        const trackEntity = viewer.entities.add({
            name: sat.name,
            position: new Cesium.CallbackProperty(() => sat.primitive.position, false),
            point: { pixelSize: 0 },
        });
        viewer.trackedEntity = trackEntity;
        viewer.zoomTo(
            trackEntity,
            new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-45), 10000000)
        );

        updateOrbitPath(sat);
    }

    function updateOrbitPath(sat) {
        if (orbitEntity) {
            viewer.entities.remove(orbitEntity);
        }

        const positions = [];
        const now = new Date();
        const jd0 = currentJd(now);

        for (let i = 0; i <= 100; i += 2) {
            const jd = jd0 + i / 1440;
            const gst = gstime(jd);
            const tsince = (jd - sat.satrec.jdsatepoch) * 1440;
            const [, r] = sgp4(sat.satrec, tsince);
            positions.push(eciToCartesian3(r, gst));
        }

        orbitEntity = viewer.entities.add({
            polyline: {
                positions: positions,
                width: 2,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.2,
                    color: Cesium.Color.CYAN,
                }),
            },
        });
    }

    // Interaction
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    handler.setInputAction((movement) => {
        const pickedObject = viewer.scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObject) && pickedObject.primitive.id?.name) {
            tooltip.style.display = "block";
            tooltip.style.left = movement.endPosition.x + 10 + "px";
            tooltip.style.top = movement.endPosition.y + 10 + "px";
            tooltip.textContent = pickedObject.primitive.id.name;

            if (pickedObject.primitive !== selectedSat?.primitive) {
                pickedObject.primitive.scale = 1.3;
                pickedObject.primitive.fillColor = Cesium.Color.WHITE;
            }
        } else {
            tooltip.style.display = "none";
            for (const { primitive } of satellites) {
                if (primitive !== selectedSat?.primitive) {
                    primitive.scale = 1.0;
                    primitive.fillColor = primitive.id.baseColor;
                }
            }
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    handler.setInputAction((click) => {
        const pickedObject = viewer.scene.pick(click.position);
        if (Cesium.defined(pickedObject) && pickedObject.primitive.id?.name) {
            const sat = satellites.find((s) => s.primitive === pickedObject.primitive);
            if (sat) selectSatellite(sat);
        } else {
            deselectSatellite();
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

    // Search
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        for (const sat of satellites) {
            const match = sat.name.toLowerCase().includes(query);
            sat.primitive.show = match;
            if (match && query && sat.name.toLowerCase() === query) {
                selectSatellite(sat);
            }
        }
    });

    closeDetailsBtn.addEventListener("click", deselectSatellite);
    groupSelect.addEventListener("change", (e) => loadGroup(e.target.value));

    // Initial load
    loadGroup(groupSelect.value);

    // Update positions
    viewer.clock.onTick.addEventListener(() => {
        const t = Cesium.JulianDate.toDate(viewer.clock.currentTime);
        const jd = currentJd(t);
        const gst = gstime(jd);

        for (const sat of satellites) {
            const tsince = (jd - sat.satrec.jdsatepoch) * 1440;
            const [updated, r, v] = sgp4(sat.satrec, tsince);
            if (updated.error !== 0 || isNaN(r[0]) || isNaN(r[1]) || isNaN(r[2])) {
                sat.primitive.show = false;
                continue;
            }
            sat.primitive.position = eciToCartesian3(r, gst);

            if (selectedSat === sat) {
                const latlon = Cesium.Cartographic.fromCartesian(sat.primitive.position);
                satLatEl.textContent = Cesium.Math.toDegrees(latlon.latitude).toFixed(2);
                satLonEl.textContent = Cesium.Math.toDegrees(latlon.longitude).toFixed(2);
                satAltEl.textContent = (latlon.height / 1000).toFixed(2);
                const vel = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
                satVelEl.textContent = vel.toFixed(2);
            }
        }
    });
}

main();
