import { Text, View } from "react-native";

export default function LocationCard({ location }) {
  if (!location) {
    return (
      <View className="rounded-2xl bg-white p-6">
        <Text className="text-center text-gray-500">
          Belum ada data lokasi
        </Text>
      </View>
    );
  }

  const { latitude, longitude } =
    location.coords;

  const accuracy = location.coords.accuracy;

  return (
    <View className="rounded-2xl bg-white p-6">
      <Text className="mb-5 text-xl font-bold text-gray-900">
        Location Data
      </Text>

      <View className="mb-4">
        <Text className="text-sm text-gray-500">
          Latitude
        </Text>

        <Text className="mt-1 text-2xl font-bold text-gray-900">
          {latitude.toFixed(6)}
        </Text>
      </View>

      <View className="mb-4">
        <Text className="text-sm text-gray-500">
          Longitude
        </Text>

        <Text className="mt-1 text-2xl font-bold text-gray-900">
          {longitude.toFixed(6)}
        </Text>
      </View>

      <View>
        <Text className="text-sm text-gray-500">
          Accuracy
        </Text>

        <Text className="mt-1 text-xl font-semibold text-gray-900">
          {accuracy
            ? `${accuracy.toFixed(2)} m`
            : "-"}
        </Text>
      </View>
    </View>
  );
}