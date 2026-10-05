import * as Location from "expo-location";

export async function requestLocationPermission() {
  const { status } =
    await Location.requestForegroundPermissionsAsync();

  return status === "granted";
}

export async function getCurrentLocation() {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    throw new Error("Izin lokasi tidak diberikan.");
  }

  const location =
    await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

  return location;
}