import { Pressable, Text, View } from "react-native";

export default function FeatureCard({
  icon,
  title,
  description,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      className="mb-4 rounded-2xl bg-white p-5"
    >
      <View className="flex-row items-center">
        <Text className="mr-4 text-3xl">
          {icon}
        </Text>

        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-900">
            {title}
          </Text>

          <Text className="mt-1 text-sm text-gray-500">
            {description}
          </Text>
        </View>

        <Text className="text-2xl text-gray-400">
          ›
        </Text>
      </View>
    </Pressable>
  );
}