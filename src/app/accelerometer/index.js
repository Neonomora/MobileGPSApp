import React from "react";

import { Pressable, Text, View } from "react-native";

import useAccelerometer from "../../hooks/useAccelerometer";

import AxisCard from "../../components/accelerometer/AxisCard";

export default function AccelerometerScreen() {
  const [isRunning, setIsRunning] = React.useState(false);

  const data = useAccelerometer(isRunning);

  return (
    <View className="flex-1 bg-gray-100 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900">Accelerometer</Text>

      <Text className="mt-2 text-gray-500">
        Pergerakan perangkat pada sumbu X, Y, dan Z
      </Text>

      <View className="mt-8">
        <AxisCard axis="X" value={data.x} description="Kiri ↔ kanan" />

        <AxisCard axis="Y" value={data.y} description="Atas ↕ bawah" />

        <AxisCard axis="Z" value={data.z} description="Depan ↔ belakang" />
      </View>

      <Pressable
        onPress={() => setIsRunning((current) => !current)}
        className={`mt-2 rounded-xl px-5 py-4 ${
          isRunning ? "bg-red-500" : "bg-blue-600"
        }`}
      >
        <Text className="text-center text-lg font-bold text-white">
          {isRunning ? "STOP SENSOR" : "START SENSOR"}
        </Text>
      </Pressable>

      <Text className="mt-5 text-center text-gray-500">
        {isRunning
          ? "Gerakkan smartphone untuk melihat perubahan nilai"
          : "Sensor belum dijalankan"}
      </Text>
    </View>
  );
}
