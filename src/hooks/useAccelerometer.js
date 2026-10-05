import { useEffect, useState } from "react";

import {
    setAccelerometerInterval,
    subscribeToAccelerometer,
} from "../services/accelerometer/accelerometerService";

export default function useAccelerometer(enabled = false) {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setAccelerometerInterval(200);

    const subscription = subscribeToAccelerometer((sensorData) => {
      setData({
        x: sensorData.x,
        y: sensorData.y,
        z: sensorData.z,
      });
    });

    return () => {
      subscription.remove();
    };
  }, [enabled]);

  return data;
}
