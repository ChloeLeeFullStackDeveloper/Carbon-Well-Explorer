import json
import random

def generate_mock_wells(n=500):
    lat_range = (49.5, 59.0)         # Alberta approximate latitude
    lng_range = (-120.0, -110.0)     # Alberta approximate longitude

    statuses = ["active", "inactive", "abandoned"]
    regions = ["Northern", "Central", "Southern"]

    wells = []
    for i in range(1, n + 1):
        lat = round(random.uniform(*lat_range), 6)
        lng = round(random.uniform(*lng_range), 6)
        emissions = round(random.uniform(0, 100), 1)
        status = random.choices(statuses, weights=[0.6, 0.25, 0.15])[0]
        ghg_score = int(emissions * random.uniform(0.9, 1.1)) % 101
        region = random.choice(regions)

        wells.append({
            "id": f"WELL-{i:04d}",
            "lat": lat,
            "lng": lng,
            "status": status,
            "emissions": emissions,
            "ghgScore": ghg_score,
            "region": region
        })

    return wells

# Save to public/mock-wells.json
output_path = "public/mock-wells.json"
with open(output_path, "w") as f:
    json.dump(generate_mock_wells(), f, indent=2)

print(f"✅ Generated 500 mock wells at: {output_path}")
