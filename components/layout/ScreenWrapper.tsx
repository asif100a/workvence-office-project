import { View, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { SafeAreaView, Edge } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: readonly Edge[];
}

export default function ScreenWrapper({
  children,
  style,
  edges = ["top", "bottom"],
}: ScreenWrapperProps) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <SafeAreaView style={[{ flex: 1 }, style]} edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
}