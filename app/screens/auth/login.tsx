import React from "react";
import {
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useForm } from "react-hook-form";
import Svg, { Circle, Path } from "react-native-svg";
import { Apple } from "lucide-react-native";

import { Text } from "@/components/Themed";
import { router } from "expo-router";
import StandardInputField from "@/components/standard_ui/fields/StandardInputField";
import StandardCheckbox from "@/components/standard_ui/fields/StandardCheckbox";
import StandardButton from "@/components/standard_ui/buttons/StandardButton";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppLogo from "@/components/layout/AppLogo";
import { Colors } from "@/constants/Colors";

export type LoginFormValues = {
  emailOrPhone: string;
  password: string;
  rememberMe: boolean;
};

function GoogleIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18">
      <Path
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.56 2.7-3.86 2.7-6.62Z"
        fill="#4285F4"
      />
      <Path
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.83.86-3.06.86-2.35 0-4.34-1.58-5.05-3.72H.96v2.33A9 9 0 0 0 9 18Z"
        fill="#34A853"
      />
      <Path
        d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.16.29-1.7V4.97H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.03l2.99-2.33Z"
        fill="#FBBC05"
      />
      <Path
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.9 11.42 0 9 0A9 9 0 0 0 .96 4.97L3.95 7.3C4.66 5.16 6.65 3.58 9 3.58Z"
        fill="#EA4335"
      />
    </Svg>
  );
}

function FacebookIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18">
      <Circle cx={9} cy={9} r={9} fill="#1877F2" />
      <Path
        d="M10.2 14.25V9.8h1.5l.22-1.74H10.2V6.95c0-.5.14-.85.87-.85H12V4.54c-.16-.02-.72-.07-1.36-.07-1.35 0-2.27.82-2.27 2.33v1.26H6.84V9.8h1.53v4.45h1.83Z"
        fill="#FFFFFF"
      />
    </Svg>
  );
}

function SocialButton({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="h-[44px] rounded-full border border-[#E6EAF0] bg-white flex-row items-center justify-center gap-3"
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon}
      <Text className="text-[15px] font-semibold" style={{color: '#151A22'}}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
  } = useForm<LoginFormValues>({
    defaultValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit = () => {
    router.push('/tabs/(buyer)')
  };

  const handleGoogleLogin = () => {
    // Implement Google login flow here
  };
  const handleAppleLogin = () => {
    // Implement Apple login flow here
  };
  const handleFacebookLogin = () => {
    // Implement Facebook login flow here
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
          <View className="px-4 pt-10 pb-6">
            <View className="mb-6">
              <AppLogo />
            </View>

            <Text className="text-[36px] font-bold mb-1 leading-9 max-w-[280px]" style={{
              color: 'white'
            }}>
              Login To Your{"\n"}Account
            </Text>
            <Text className="text-sm leading-5" style={{color: '#FFFFFFD9'}}>
              login to continue your journey with us.
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-t-[16px] px-4 pt-6 pb-20">
            <StandardInputField<LoginFormValues>
              label="Email Address"
              id="emailOrPhone"
              control={control}
              type="email"
              placeholder="Enter Your Email"
            />

            <StandardInputField<LoginFormValues>
              label="Password"
              id="password"
              control={control}
              type="password"
              placeholder="Enter your password"
            />

            <View className="flex-row items-center justify-between mb-6 -mt-1">
              <TouchableOpacity
                className="flex-row items-center gap-2"
                onPress={() => setValue("rememberMe", !rememberMe)}
                activeOpacity={0.7}
              >
                <StandardCheckbox
                  value={rememberMe}
                  onValueChange={(e, value) => {
                    e.stopPropagation();
                    setValue("rememberMe", value);
                  }}
                />
                <Text className="text-xs" style={{color: '#6A6F77'}}>
                  Remember me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/screens/auth/forgotPassword")}
                activeOpacity={0.7}
              >
                <Text className="text-[#1F6BFF] text-xs underline" style={{color: Colors.common.BRAND}}>
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>

            <StandardButton
              text="Login"
              onPress={handleSubmit(onSubmit)}
              style={{
                height: 49,
                borderRadius: 11,
                backgroundColor: "#060D16",
              }}
              buttonTextStyle={{ fontSize: 14, fontWeight: "600" }}
            />

            <View className="flex-row items-center gap-2 mb-6 pt-6">
              <View className="flex-1 h-px bg-[#ECEFF3]" />
              <Text className="text-[#C7CBD1] text-xs">Or</Text>
              <View className="flex-1 h-px bg-[#ECEFF3]" />
            </View>

            <View className="gap-5 mb-7">
              <SocialButton
                label="Continue with Google"
                icon={<GoogleIcon />}
                onPress={handleGoogleLogin}
              />
              <SocialButton
                label="Continue with Apple"
                icon={<Apple size={18} color="#000000" fill="#000000" />}
                onPress={handleAppleLogin}
              />
              <SocialButton
                label="Continue with Facebook"
                icon={<FacebookIcon />}
                onPress={handleFacebookLogin}
              />
            </View>

            <View className="flex-row justify-center items-center">
              <Text className="text-sm" style={{color: '#6A6F77'}}>
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/screens/auth/login")}
                activeOpacity={0.7}
              >
                <Text className="text-sm font-bold" style={{color: Colors.common.BRAND}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
