import {
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Text } from "@/components/Themed";

export default function StandardButton({
  text,
  children,
  onPress,
  type = "normal",
  style,
  loading,
  disabled,
  indicatorColor = Colors.common.SUCCESS || "#fff",
  buttonTextStyle = {},
}: {
  text?: string;
  children?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  type?: "normal" | "outline";
  style?: ViewStyle | undefined;
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  indicatorColor?: string;
  buttonTextStyle?: TextStyle | undefined;
}) {
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => {}}
      activeOpacity={0.7}
      className={`w-full h-14 rounded-xl justify-center items-center`}
      style={[
        type === "normal"
          ? { backgroundColor: Colors.common.BUTTON_COLOR }
          : { borderColor: Colors.common.BORDER, borderWidth: 1 },
        { opacity: disabled || loading ? 0.6 : 1 },
        ...(style ? [style] : []),
      ]}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator size="large" color={indicatorColor} />
      ) : text ? (
        <Text
          className={`text-lg font-bold text-center`}
          style={[
            type === "normal" ? { color: "#fff" } : { color: "#202020" },
            { ...buttonTextStyle },
          ]}
        >
          {text}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
