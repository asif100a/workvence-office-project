import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import Logo from "@/assets/images/logo.png";
import { Image } from "expo-image";
import BackButton from "@/components/standard_ui/buttons/BackButton";
import StandardInputField from "@/components/standard_ui/fields/StandardInputField";
import StandardButton from "@/components/standard_ui/buttons/StandardButton";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppLogo from "@/components/layout/AppLogo";

function ChevronLeftIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 18l-6-6 6-6"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

interface ForgotPasswordScreenProps {
  onBack?: () => void;
  onContinue?: (email: string) => void;
}

export default function ForgotPasswordScreen() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleContinue = (data: { email: string }) => {
    router.push({
      pathname: "/screens/auth/verifyCode",
      params: { redirect_url: "/auth/createNewPassword" },
    });
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Pink header */}
          <View className="px-6 pt-4 pb-10">
            {/* Back button */}
            <View className="flex-row items-center justify-between gap-2 mb-10">
              <AppLogo />

              <BackButton
                iconClassname="border border-white rounded-full p-0.5"
                title=""
                iconColor="#FFFFFF"
              />
            </View>

            <Text className="text-[40px] font-bold mb-2 leading-11" style={{
              color: 'white'
            }}>
              Forgot Password
            </Text>
            <Text className="text-sm leading-5" style={{color: '#FFFFFFD9'}}>
              Please enter your email address
            </Text>
          </View>

          {/* White card */}
          <View className="flex-1 bg-[#f5f5f5] rounded-t-[28px] px-6 pt-8 pb-10">
            <StandardInputField
              control={control}
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            {/* Continue button */}
            <StandardButton
              text="Continue"
              onPress={handleSubmit(handleContinue)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
