import { useEffect, useRef, useState } from 'react';
import { Viewer, Cartesian3, Color, Math as CesiumMath, ScreenSpaceEventType, ScreenSpaceEventHandler, Entity } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const App = () => {
  const [point1, setPoint1] = useState<null | Cartesian3>(null);
  const [point2, setPoint2] = useState<null | Cartesian3>(null);
  const [viewer, setviewer] = useState<Viewer | null>(null);
  const [isMile, setIsMile] = useState(false);

  const point1Ref = useRef(point1);
  const point2Ref = useRef(point2);
  const point1EntityRef = useRef<Entity | null>(null);
  const point2EntityRef = useRef<Entity | null>(null);
  const polylineEntityRef = useRef<Entity | null>(null);
  const distanceLabelRef = useRef<Entity | null>(null);

  useEffect(() => {
    point1Ref.current = point1;
    point2Ref.current = point2;
  }, [point1, point2]);

  useEffect(() => {
    const viewer = new Viewer('cesiumContainer');
    viewer.scene.globe.enableLighting = true;
    setviewer(viewer);

    const handler = new ScreenSpaceEventHandler(viewer.canvas);
    handler.setInputAction((movement: any) => {
      const cartesian = viewer.camera.pickEllipsoid(movement.position);
      if (cartesian) {
        const cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
        const longitude = CesiumMath.toDegrees(cartographic.longitude);
        const latitude = CesiumMath.toDegrees(cartographic.latitude);
        console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);  

        if (point1Ref.current === null) {
          console.log('1');
          setPoint1(Cartesian3.fromDegrees(longitude, latitude, 0));
        } else if (point2Ref.current === null) {
          console.log('2');
          setPoint2(Cartesian3.fromDegrees(longitude, latitude, 0));
        } else {
          console.log('3');
          setPoint1(null);
          setPoint2(null); 
        }
      }
   
    }, ScreenSpaceEventType.LEFT_CLICK);

    return () => {
      handler.destroy();
      viewer.destroy();
    };
  }, []);

  const updateDistanceLabel = () => {
    if (distanceLabelRef.current && viewer) {
      viewer.entities.remove(distanceLabelRef.current);
    }
    if (point1 && point2 && viewer) {
      const distance = !isMile
        ? Cartesian3.distance(point1, point2) / 1000
        : (Cartesian3.distance(point1, point2) / 1000) / 1.55;
        
      const midpoint = Cartesian3.add(point1, point2, new Cartesian3());
      Cartesian3.multiplyByScalar(midpoint, 0.5, midpoint);

      distanceLabelRef.current = viewer.entities.add({
        position: midpoint,
        label: {
          text: `${distance.toFixed(1)} ${isMile ? 'miles' : 'Km'}`,
          font: '14pt sans-serif',
          verticalOrigin: 1,
        },
      });
    }
  };

  useEffect(() => {
    if (!viewer) return;
    if (point1 !== null) {
      point1EntityRef.current = viewer.entities.add({
        position: point1,
        point: { pixelSize: 8, color: Color.BLUE },
        label: {
          text: 'Point 1',
          font: '14pt sans-serif',
          verticalOrigin: 1,
        },
      });
    } else if (point1EntityRef.current) {
      viewer.entities.remove(point1EntityRef.current);
      point1EntityRef.current = null;
    }
    updateDistanceLabel(); 
  }, [point1, viewer]);

  useEffect(() => {
    if (!viewer) return;
    if (point2 !== null) {
      point2EntityRef.current = viewer.entities.add({
        position: point2,
        point: { pixelSize: 8, color: Color.BLUE },
        label: {
          text: 'Point 2',
          font: '14pt sans-serif',
          verticalOrigin: 1,
        },
      });
    } else if (point2EntityRef.current) {
      viewer.entities.remove(point2EntityRef.current);
      point2EntityRef.current = null;
    }
    updateDistanceLabel(); 
  }, [point2, viewer]);

  useEffect(() => {
    if (!viewer) return;
    if (point2 !== null && point1 !== null) {
      if (polylineEntityRef.current) {
        viewer.entities.remove(polylineEntityRef.current);
      }
      polylineEntityRef.current = viewer.entities.add({
        polyline: {
          positions: [point1, point2],
          width: 2,
          material: Color.RED,
        },
      });
    } else {
      if (polylineEntityRef.current) {
        viewer.entities.remove(polylineEntityRef.current);
        polylineEntityRef.current = null;
      }
      if (distanceLabelRef.current) {
        viewer.entities.remove(distanceLabelRef.current);
        distanceLabelRef.current = null;
      }
    }
    updateDistanceLabel(); 
  }, [point1, point2, viewer, isMile]);

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }}>
      <button onClick={() => setIsMile(true)}>mile</button>
      <button onClick={() => setIsMile(false)}>Km</button>
    </div>  
  );
};

export default App;
