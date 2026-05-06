#!/usr/bin/env python3
import urllib.request
import os

GROUPS = {
    "cubesat": "https://celestrak.org/NORAD/elements/gp.php?GROUP=cubesat&FORMAT=tle",
    "last-30-days": "https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=tle",
    "stations": "https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=tle",
    "active": "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",
    "fengyun-1c-debris": "https://celestrak.org/NORAD/elements/gp.php?GROUP=1999-025&FORMAT=tle",
    "iridium-33-debris": "https://celestrak.org/NORAD/elements/gp.php?GROUP=iridium-33-debris&FORMAT=tle",
    "cosmos-2251-debris": "https://celestrak.org/NORAD/elements/gp.php?GROUP=cosmos-2251-debris&FORMAT=tle",
    "weather": "https://celestrak.org/NORAD/elements/gp.php?GROUP=weather&FORMAT=tle",
    "geo": "https://celestrak.org/NORAD/elements/gp.php?GROUP=geo&FORMAT=tle",
    "starlink": "https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle",
    "gps-ops": "https://celestrak.org/NORAD/elements/gp.php?GROUP=gps-ops&FORMAT=tle",
}

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "viz", "tle")

def fetch_tles():
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    for name, url in GROUPS.items():
        print(f"Fetching {name} TLEs from {url}...")
        try:
            req = urllib.request.Request(
                url, 
                headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            )
            with urllib.request.urlopen(req) as response:
                data = response.read().decode('utf-8')
            
            output_file = os.path.join(OUTPUT_DIR, f"{name}.txt")
            with open(output_file, 'w') as f:
                f.write(data)
                
            print(f"  Saved {len(data.splitlines()) // 3} satellites to {output_file}")
        except Exception as e:
            print(f"  Error fetching {name}: {e}")

if __name__ == "__main__":
    fetch_tles()
