import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import { Text } from "@/components/Themed";
import { router, useLocalSearchParams } from "expo-router";
import Logo from "@/assets/images/logo.png";
import { Image } from "expo-image";
import BackButton from "@/components/standard_ui/buttons/BackButton";
import StandardOTPFields from "@/components/standard_ui/fields/StandardOTPFields";
import StandardButton from "@/components/standard_ui/buttons/StandardButton";
import SuccessModal from "@/components/standard_ui/modals/SuccessModal";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppLogo from "@/components/layout/AppLogo";

const OTP_LENGTH = 6;

type VerifyCodeFormValues = {
  otp: string;
};

const LOGO_WIDTH = 196;
const LOGO_HEIGHT = 42;
export default function VerifyCodeScreen() {
  const { control, handleSubmit, watch } = useForm<VerifyCodeFormValues>({
    defaultValues: {
      otp: "",
    },
  });
  const { redirect_url } = useLocalSearchParams();
  const [isSuccessModalOpen, setSuccessModalOpen] = React.useState(false);

  const otpValues = watch("otp");
  const isComplete = otpValues.length === OTP_LENGTH;

  const handleOtpSubmit = ({ otp }: VerifyCodeFormValues) => {
    setSuccessModalOpen(true);

    // Simulate API call and close modal after 2 seconds
    setTimeout(() => {
      setSuccessModalOpen(false);
      router.replace(redirect_url ? (redirect_url as any) : "/tabs");
    }, 2500);
  };

  const handleResend = () => {
    // Implement resend OTP logic here
    alert("OTP resent!");
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
          <View className="px-6 pt-4 pb-10">
            <View className="flex-row items-center justify-between gap-2 mb-8">
              <AppLogo />

              <BackButton
                iconClassname="border border-white rounded-full p-0.5"
                title=""
                iconColor="#FFFFFF"
              />
            </View>

            <Text className="text-[40px] font-bold mb-2 leading-11 max-w-[260px]" style={{
              color: 'white'
            }}>
              Confirm It’s Really You.
            </Text>
            <Text className="text-sm leading-5" style={{color: '#FFFFFFD9'}}>
              Enter the 6-digit code from your email.
            </Text>
          </View>

          <View className="flex-1 bg-[#f5f5f5] rounded-t-[28px] px-6 pt-8 pb-10">
            <StandardOTPFields control={control} />

            <View className="mt-48">
              <StandardButton
                text="Verify Code"
                onPress={handleSubmit(handleOtpSubmit)}
                disabled={!isComplete}
                style={!isComplete ? { opacity: 0.5 } : {}}
              />
            </View>
            <View className="mt-4 flex-row items-center justify-center">
              <Text className="text-sm" style={{ color: "#888" }}>
                Didn't get code?
              </Text>
              <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                <Text
                  className="text-sm font-bold underline ml-1"
                  style={{ color: "#222" }}
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        setOpen={setSuccessModalOpen}
        title="OTP Verified"
        description=""
      />
    </ScreenWrapper>
  );
}
