import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";

import FeatureCard from "../components/common/FeatureCard";

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 60,
          paddingBottom: 30,
        }}
      >
        <Text className="text-3xl font-bold text-gray-900">
          Mobile Sensors
        </Text>

        <Text className="mt-2 text-base text-gray-500">
          Sensor & Context-Aware Computing
        </Text>

        <View className="mt-8">
          <Text className="mb-4 text-lg font-bold text-gray-900">
            Sensor Features
          </Text>

          <FeatureCard
            icon="📍"
            title="GPS / Location"
            description="Menentukan posisi perangkat"
            onPress={() => router.push("/gps")}
          />

          <FeatureCard
            icon="📱"
            title="Accelerometer"
            description="Mengukur pergerakan pada sumbu X, Y, dan Z"
            onPress={() => router.push("/accelerometer")}
          />
        </View>
      </ScrollView>
    </View>
  );
}