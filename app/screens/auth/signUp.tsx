import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { Text } from "@/components/Themed";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import StandardButton from "@/components/standard_ui/buttons/StandardButton";
import StandardCheckbox from "@/components/standard_ui/fields/StandardCheckbox";
import StandardInputField from "@/components/standard_ui/fields/StandardInputField";
import AppLogo from "@/components/layout/AppLogo";
import { Colors } from "@/constants/Colors";

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
};

export default function SignUp() {
  const { control, watch, setValue, handleSubmit } = useForm<SignUpFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
  });

  const rememberMe = watch("rememberMe");

  const onSubmit = () => {
    router.push({
      pathname: "/screens/auth/verifyCode",
      params: { email: watch("email") },
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
          contentContainerClassName="flex-grow"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="px-4 pt-4 pb-5">
            <AppLogo />

            <Text
              className="text-[36px] font-extrabold leading-9 mb-2 mt-10 max-w-[300px]"
              style={{ color: "white" }}
            >
              Create Your{"\n"}Account
            </Text>
            <Text className="text-sm leading-5" style={{ color: "#FFFFFFD9" }}>
              Register to continue your journey with us.
            </Text>
          </View>

          <View className="flex-1 bg-white rounded-t-[22px] px-[15px] pt-6 pb-20">
            <StandardInputField<SignUpFormValues>
              control={control}
              label="Full Name"
              id="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <StandardInputField<SignUpFormValues>
              control={control}
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter Your Email"
            />
            <StandardInputField<SignUpFormValues>
              control={control}
              label="Password"
              id="password"
              type="password"
              placeholder="********"
            />
            <StandardInputField<SignUpFormValues>
              control={control}
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="********"
            />

            <TouchableOpacity
              className="flex-row items-center gap-2 -mt-0.5 mb-[42px] pl-0.5"
              onPress={() => setValue("rememberMe", !rememberMe)}
              activeOpacity={0.7}
            >
              <StandardCheckbox
                value={rememberMe}
                onValueChange={(event, value) => {
                  event.stopPropagation();
                  setValue("rememberMe", value);
                }}
              />
              <Text className="text-[13px]" style={{ color: "#6A6A6A" }}>
                Remember me
              </Text>
            </TouchableOpacity>

            <View className="mb-4">
              <StandardButton onPress={handleSubmit(onSubmit)}>
                <Text className="text-sm font-bold text-center" style={{ color: "white" }}>
                  Register
                </Text>
              </StandardButton>
            </View>

            <View className="flex-row justify-center items-center">
              <Text className="text-sm" style={{ color: "#6A6A6A" }}>
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/screens/auth/login")}
                activeOpacity={0.7}
              >
                <Text className="text-sm font-bold" style={{ color: Colors.common.BRAND }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
