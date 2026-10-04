import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { useForm } from "react-hook-form";
import Logo from "@/assets/images/logo.png";
import { Image } from "expo-image";
import BackButton from "@/components/standard_ui/buttons/BackButton";
import StandardInputField from "@/components/standard_ui/fields/StandardInputField";
import StandardButton from "@/components/standard_ui/buttons/StandardButton";
import SuccessModal from "@/components/standard_ui/modals/SuccessModal";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import AppLogo from "@/components/layout/AppLogo";
import { router } from "expo-router";

const BRAND = "#F0436F";

function CheckIcon({ checked }: { checked: boolean }) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3 8l3.5 3.5L13 5"
        stroke={checked ? BRAND : "#ccc"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

interface Rule {
  label: string;
  test: (pw: string) => boolean;
}

const PASSWORD_RULES: Rule[] = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  {
    label: "Capital and lowercase letters",
    test: (pw) => /[A-Z]/.test(pw) && /[a-z]/.test(pw),
  },
  {
    label: "A special character - # @ $ % & ! *",
    test: (pw) => /[#@$%&!*\-]/.test(pw),
  },
  { label: "A number", test: (pw) => /[0-9]/.test(pw) },
];

export default function CreateNewPasswordScreen() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [isSuccessModalOpen, setSuccessModalOpen] = React.useState(false);

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const allRulesPassed = PASSWORD_RULES.every((r) => r.test(password));
  const passwordsMatch = password === confirmPassword && confirmPassword !== "";
  const canSubmit = allRulesPassed && passwordsMatch;

  const onSubmit = () => {
    setSuccessModalOpen(true);

    // Simulate API call and close modal after 2 seconds
    setTimeout(() => {
      setSuccessModalOpen(false);
      router.push("/auth/login");
    }, 2500);
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
              Create New Password
            </Text>
            <Text className="text-sm leading-5" style={{color: '#FFFFFFD9'}}>
              Please create and enter a new password for your account.
            </Text>
          </View>

          {/* White card */}
          <View className="flex-1 bg-[#f5f5f5] rounded-t-[28px] px-6 pt-8 pb-10">
            {/* New Password */}
            <StandardInputField
              control={control}
              label="New Password"
              id="password"
              type="password"
              placeholder="●●●●●●●●●●●●●●"
            />

            {/* Confirm Password */}
            <StandardInputField
              control={control}
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="●●●●●●●●●●●●●●"
            />

            {/* Password rules */}
            <View className="mb-8">
              <Text
                className="text-sm font-semibold mb-3"
                style={{ color: "#333" }}
              >
                Password must include:
              </Text>
              <View className="gap-2">
                {PASSWORD_RULES.map((rule, i) => {
                  const passed = rule.test(password ?? "");
                  return (
                    <View key={i} className="flex-row items-center gap-2">
                      <CheckIcon checked={passed} />
                      <Text
                        className={`text-sm }`}
                        style={{ color: passed ? BRAND : "#888" }}
                      >
                        {rule.label}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            {/* Continue button */}
            <StandardButton
              text="Continue"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        setOpen={setSuccessModalOpen}
        title="Successful"
        description="Your password is successfully Created"
      />
    </ScreenWrapper>
  );
}
