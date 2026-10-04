import ScreenWrapper from "@/components/layout/ScreenWrapper";
import { router } from "expo-router";
import { ArrowLeft, Info } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const CLAUSES = ["Clause 01", "Clause 02", "Clause 03", "Clause 03"];

const CLAUSE_TEXT =
  "Lorem ipsum dolor sit amet consectetur. In faucibus ante sit nisl justo. Vehicula urna urna vitae magnis. Pellentesque et felis eget mattis enim vel mauris fermentum. Aenean morbi sit vitae commodo nunc mattis quis bibendum.";

function ClauseCard({ title }: { title: string }) {
  return (
    <View className="rounded-2xl border border-[#EEF0F3] bg-white px-4 py-5">
      <Text className="text-[#6A7079] text-base font-semibold">{title}</Text>
      <Text className="mt-3 text-[#7A8088] text-sm leading-5">
        {CLAUSE_TEXT}
      </Text>
    </View>
  );
}

export default function PrivacyPolicyScreen() {
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
              Privacy Policy
            </Text>
          </View>
        </View>

        <View className="flex-1 rounded-t-[18px] bg-white px-5 pt-5">
          <View className="h-10 flex-row items-center rounded-lg bg-[#E8F4FF] px-3">
            <View className="mr-3 h-4 w-4 items-center justify-center rounded-full bg-[#1684FF]">
              <Info size={11} color="#FFFFFF" strokeWidth={2.2} />
            </View>
            <Text className="text-[#007AFF] text-sm">
              Version 2.1 · Effective 1 Jan 2026
            </Text>
          </View>

          <Text className="mt-6 text-[#6A7079] text-lg font-semibold">
            Privacy Policy
          </Text>

          <ScrollView
            className="mt-4 flex-1"
            contentContainerClassName="gap-3 pb-8"
            showsVerticalScrollIndicator={false}
          >
            {CLAUSES.map((clause, index) => (
              <ClauseCard key={`${clause}-${index}`} title={clause} />
            ))}
          </ScrollView>
        </View>

        <View className="bg-white px-3 pb-14 pt-3 shadow-sm">
          <TouchableOpacity
            className="h-11 items-center justify-center rounded-md bg-[#263038]"
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Text className="text-white text-sm font-medium">I Understood</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
