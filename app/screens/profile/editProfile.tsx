import ScreenWrapper from "@/components/layout/ScreenWrapper";
import StandardInputField from "@/components/standard_ui/fields/StandardInputField";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";

type EditProfileFormValues = {
  name: string;
  email: string;
};

export default function EditProfileScreen() {
  const { control, reset } = useForm<EditProfileFormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <ScreenWrapper>
      <View className="flex-1">
        <View className="px-5 pb-9 pt-8">
          <View className="flex-row items-center">
            <TouchableOpacity
              className="mr-4 h-8 w-8 items-center justify-center"
              onPress={() => router.back()}
              activeOpacity={0.7}
            >
              <ArrowLeft size={24} color="#FFFFFF" strokeWidth={2.4} />
            </TouchableOpacity>
            <Text className="text-white text-[22px] font-semibold">
              Edit details
            </Text>
          </View>
        </View>

        <View className="flex-1 rounded-t-[18px] bg-white px-5 pt-6">
          <StandardInputField<EditProfileFormValues>
            control={control}
            id="name"
            label="Your Name"
            placeholder="Enter Your Full name"
            required={false}
          />
          <StandardInputField<EditProfileFormValues>
            control={control}
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter Your Email"
            required={false}
          />
        </View>

        <View className="flex-row gap-3 bg-white px-3 pb-14 pt-4">
          <TouchableOpacity
            className="h-11 flex-1 items-center justify-center rounded-md bg-[#263038]"
            activeOpacity={0.8}
          >
            <Text className="text-white text-sm font-medium">
              Save Changes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="h-11 flex-1 items-center justify-center rounded-md border border-[#EEF0F3] bg-white"
            onPress={() => reset()}
            activeOpacity={0.8}
          >
            <Text className="text-[#4E5661] text-sm font-medium">Discard</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
