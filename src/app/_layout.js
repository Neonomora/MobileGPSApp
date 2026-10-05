import '../../global.css'; 

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Mobile Sensors",
        }}
      />

      <Stack.Screen
        name="gps/index"
        options={{
          title: "GPS / Location",
        }}
      />

      <Stack.Screen
        name="accelerometer/index"
        options={{
          title: "Accelerometer",
        }}
      />
    </Stack>
  );
}