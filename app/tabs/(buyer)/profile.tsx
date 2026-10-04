import ScreenWrapper from "@/components/layout/ScreenWrapper";
import { MenuCard } from "@/components/module/more/_components";
import { router } from "expo-router";
import {
  FileText,
  LogOut,
  LockKeyhole,
  MessageSquareText,
  Settings,
  User,
  FileSpreadsheet,
} from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export type MoreItem = {
  label: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
  onPress?: () => void;
  iconColor?: string;
  textColor?: string;
};

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80";

export default function MoreScreen() {
  return (
    <ScreenWrapper>
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="h-[126px]" />

        <View className="flex-1 rounded-t-[18px] bg-white px-8 pt-[72px] pb-8">
          <View className="absolute -top-12 left-8 h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#D7DDE6]">
            <Image
              source={{ uri: PROFILE_IMAGE }}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>

          <Text className="text-[#101820] text-2xl font-bold">Thom Haye</Text>
          <Text className="mt-1 text-[#4B525B] text-base">
            michelle.rivera@example.com
          </Text>

          <Text className="mb-3 ml-4 mt-7 text-[#4B525B] text-sm">
            About Profile
          </Text>
          <MenuCard
            items={[
              {
                label: "Edit details",
                icon: User,
                onPress: () => router.push("/more/editProfile" as any),
              },
              {
                label: "Change password",
                icon: LockKeyhole,
                onPress: () => router.push("/more/changePassword"),
              },
            ]}
          />

          <Text className="mb-3 ml-4 mt-8 text-[#4B525B] text-sm">
            More Options
          </Text>
          <MenuCard
            items={[
              {
                label: "Configuration",
                icon: Settings,
                onPress: () => router.push("/more/configuration" as any),
              },
              {
                label: "Feedback",
                icon: MessageSquareText,
                onPress: () => router.push("/more/feedback"),
              },
              {
                label: "Terms & Conditions",
                icon: FileText,
                onPress: () => router.push("/common/termsAndConditions"),
              },
              {
                label: "Privacy Policy",
                icon: FileSpreadsheet,
                onPress: () => router.push("/common/privacyPolicy"),
              },
              {
                label: "Log out",
                icon: LogOut,
                onPress: () => router.push("/auth/login"),
                textColor: "#FF3B30",
                iconColor: "#FF3B30",
              },
            ]}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
