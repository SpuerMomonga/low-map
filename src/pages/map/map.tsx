import React, { useEffect, useRef } from 'react';
import ol from 'ol';

interface MapProps {
  zoom?: Zoom;
  center?: Coordinate;
}

const Map: React.FC<MapProps> = ({ zoom, center }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // mapInit();
  }, []);

  const mapInit = () => {
    new ol.Map({
      target: mapRef.current!,
      layers: [],
      view: new ol.View({
        center: center ?? [0, 0],
        zoom: zoom ?? 6
      })
    });
  };

  mapInit();

  return <div className="h-full"></div>;
};

export default Map;
