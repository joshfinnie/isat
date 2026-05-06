#!/usr/bin/env python3
import urllib.request
import os

URL = "https://celestrak.org/NORAD/elements/gp.php?GROUP=cubesat&FORMAT=tle"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "viz", "tle")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "cubesat.txt")

def fetch_tles():
    print(f"Fetching TLEs from {URL}...")
    try:
        with urllib.request.urlopen(URL) as response:
            data = response.read().decode('utf-8')
            
        if not os.path.exists(OUTPUT_DIR):
            os.makedirs(OUTPUT_DIR)
            
        with open(OUTPUT_FILE, 'w') as f:
            f.write(data)
            
        print(f"Successfully saved {len(data.splitlines()) // 3} satellites to {OUTPUT_FILE}")
    except Exception as e:
        print(f"Error fetching TLEs: {e}")

if __name__ == "__main__":
    fetch_tles()
