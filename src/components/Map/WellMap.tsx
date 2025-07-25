import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN!;

interface Well {
  id: string;
  lat: number;
  lng: number;
  emissions: number;
  status: string;
  ghgScore: number;
  region: string;
}

const WellMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-114.0719, 51.0447],
      zoom: 5,
    });

    // Load well data
    fetch('/mock-wells.json')
      .then((res) => res.json())
      .then((data: Well[]) => {
        data.forEach((well) => {
          const marker = new mapboxgl.Marker({
            color: getColor(well.emissions),
          })
            .setLngLat([well.lng, well.lat])
            .setPopup(
              new mapboxgl.Popup().setHTML(`
                <strong>${well.id}</strong><br />
                Status: ${well.status}<br />
                Emissions: ${well.emissions.toFixed(1)} tCO₂e/year
              `)
            )
            .addTo(map.current!);
        });
      });
  }, []);

  // 💡 Helper: Color by emissions
  const getColor = (emissions: number) => {
    if (emissions > 75) return 'red';
    if (emissions > 40) return 'orange';
    return 'green';
  };

  return (
    <div
      className="w-full h-[80vh] border rounded-md shadow"
      ref={mapContainer}
    />
  );
};

export default WellMap;
