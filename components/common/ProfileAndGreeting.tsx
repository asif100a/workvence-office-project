import { View, Text } from "react-native";
import React from "react";
import ProfileAvatar from "./ProfileAvatar";

export default function ProfileAndGreeting() {
  return (
    <View className="flex-row items-center">
      <ProfileAvatar />

      <View className="ml-3">
        <Text className="text-white text-base font-medium">Welcome Back 👋</Text>
        <Text className="mt-0.5 text-white/85 text-sm">Hello, Thom Haye</Text>
      </View>
    </View>
  );
}
