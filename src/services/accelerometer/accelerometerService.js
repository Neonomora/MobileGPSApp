import { Accelerometer } from "expo-sensors";

export function setAccelerometerInterval(interval = 200) {
  Accelerometer.setUpdateInterval(interval);
}

export function subscribeToAccelerometer(callback) {
  return Accelerometer.addListener(callback);
}