import { Text, View } from "react-native";

export default function AxisCard({ axis, value, description }) {
  return (
    <View className="mb-4 rounded-2xl bg-white p-5">
      <Text className="text-sm font-medium text-gray-500">Sumbu {axis}</Text>

      <Text className="mt-1 text-4xl font-bold text-gray-900">
        {value.toFixed(2)}
      </Text>

      <Text className="mt-1 text-sm text-gray-400">{description}</Text>
    </View>
  );
}
