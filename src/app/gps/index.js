import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";

import useLocation from "../../hooks/useLocation";
import LocationCard from "../../components/gps/LocationCard";

export default function GPSScreen() {
  const {
    location,
    loading,
    error,
    refreshLocation,
  } = useLocation();

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900">
        GPS / Location
      </Text>

      <Text className="mt-2 text-gray-500">
        Posisi perangkat saat ini
      </Text>

      <View className="mt-8">
        <LocationCard location={location} />
      </View>

      <Pressable
        onPress={refreshLocation}
        disabled={loading}
        className="mt-6 rounded-xl bg-blue-600 px-5 py-4"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-center text-lg font-bold text-white">
            {location
              ? "REFRESH LOCATION"
              : "GET LOCATION"}
          </Text>
        )}
      </Pressable>

      {error && (
        <View className="mt-4 rounded-xl bg-red-50 p-4">
          <Text className="text-center text-red-600">
            {error}
          </Text>
        </View>
      )}
    </View>
  );
}