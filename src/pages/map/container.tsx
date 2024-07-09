import { useRef, useEffect } from 'react';
import createLayer from '@/utils/baiduLayer';
import Map from 'ol/Map';
import View from 'ol/View';

const MapContainer = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<Map>();

  useEffect(() => {
    map.current = new Map({
      target: mapRef.current!,
      layers: [
        createLayer(
          // 'http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718',
          'http://maponline3.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=2&udt=20240705'
        )
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    return () => {
      map.current!.setTarget(undefined);
    };
  }, []);

  return <div className="h-full" ref={mapRef}></div>;
};

export default MapContainer;
