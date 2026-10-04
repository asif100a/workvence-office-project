import { View } from "react-native";
import React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
import ModalContainer from "./_modalContainer/ModalContainer";
import { Text } from "@/components/Themed";

export default function SuccessModal({
  isOpen,
  setOpen,
  title = "Verified",
  description = "Your code is verified",
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  description?: string;
}) {
  return (
    <ModalContainer
      visible={isOpen}
      setVisible={setOpen}
      style={{
        width: 236,
        maxWidth: "90%",
        height: 224,
        borderRadius: 24,
        overflow: "hidden",
        padding: 0,
      }}
    >
      <View className="flex-1 items-center justify-center px-5">
        <Svg
          width="236"
          height="224"
          viewBox="0 0 236 224"
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Defs>
            <LinearGradient
              id="successModalGradient"
              x1="118"
              y1="0"
              x2="118"
              y2="224"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor="#073A88" />
              <Stop offset="0.55" stopColor="#15539A" />
              <Stop offset="1" stopColor="#5B8DCD" />
            </LinearGradient>
          </Defs>
          <Rect
            width="236"
            height="224"
            rx="24"
            fill="url(#successModalGradient)"
          />
        </Svg>

        <Svg width={112} height={112} viewBox="0 0 112 112" fill="none">
          <Circle cx="56" cy="56" r="51.5" stroke="#FFFFFF" strokeWidth="5" />
          <Path
            d="M35 56.5L50.5 72L78 45"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>

        <View className="mt-7 items-center">
          <Text className="text-2xl font-bold text-center" style={{
              color: 'white'
            }}>
            {title}
          </Text>

          {description ? (
            <Text className="mt-2 text-center text-sm leading-5" style={{color: '#FFFFFFD9'}}>
              {description}
            </Text>
          ) : null}
        </View>
      </View>
    </ModalContainer>
  );
}
