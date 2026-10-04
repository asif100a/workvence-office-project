import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react-native";
import { router } from "expo-router";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

const cards = [
  { title: "BEST IN ALL", color: "#182026" },
  { title: "PEAK", color: "#9b55d7" },
  { title: "BEST IN ALL", color: "#182026" },
  { title: "PEAK", color: "#9b55d7" },
  { title: "BEST IN ALL", color: "#182026" },
  { title: "PEAK", color: "#9b55d7" },
  { title: "BEST IN ALL", color: "#182026" },
  { title: "PEAK", color: "#9b55d7" },
];

function PackageCard({ title, color }: (typeof cards)[number]) {
  return (
    <Pressable className="mb-2 w-[48.5%] rounded-[9px] border border-[#dedede] bg-white p-2">
      <View
        className="h-[80px] rounded-[5px]"
        style={{ backgroundColor: color }}
      >
        <Text className="p-2 text-[16px] font-black text-white">{title}</Text>
      </View>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-[12px] font-bold text-[#111]">Jerome Bell</Text>
        <Text className="text-[8px] text-[#777]">(57) 4.9 ⭐</Text>
      </View>
      <Text className="mt-1 text-[10px] leading-4 text-[#777]">
        I will design,redesign business wordpress website as divi expert
      </Text>
      <Text className="mt-2 text-[10px] text-[#888]">
        From <Text className="text-[14px] font-bold text-[#713d1d]"> $150</Text>
      </Text>
    </Pressable>
  );
}

export default function PackageGrid({
  ai = false,
  onBack,
}: {
  ai?: boolean;
  onBack?: () => void;
}) {
  return (
    <ScreenWrapper>
      <View className="px-5 pt-5">
        <View className="flex-row items-center">
          <Pressable onPress={onBack ?? (() => router.back())}>
            <ArrowLeft size={20} color="#666" />
          </Pressable>
          <Text className="ml-4 text-[20px] font-bold text-[#222]">
            {ai ? "AI Artists & Design" : "All Packages"}
          </Text>
        </View>
        <View className="mt-7 flex-row items-center gap-3">
          <View className="h-12 flex-1 flex-row items-center rounded-[10px] border border-[#ddd] bg-white px-3">
            <Search size={20} color="#222" />
            <TextInput
              className="ml-3 flex-1 text-[14px]"
              placeholder="Search"
              placeholderTextColor="#777"
            />
          </View>
          <Pressable className="h-12 w-12 items-center justify-center rounded-[10px] border border-[#ddd] bg-white">
            <SlidersHorizontal size={19} color="#222" />
          </Pressable>
        </View>
        {ai && (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-4"
            >
              <View className="flex-row gap-2">
                <Text className="rounded-full border border-[#ddd] bg-white px-3 py-2 text-[10px]">
                  AI Art
                </Text>
                <Text className="rounded-full border border-[#ddd] bg-white px-3 py-2 text-[10px]">
                  Illustration
                </Text>
                <Text className="rounded-full border border-[#ddd] bg-white px-3 py-2 text-[10px]">
                  Character
                </Text>
                <Text className="rounded-full border border-[#ddd] bg-white px-3 py-2 text-[10px]">
                  Product Visual
                </Text>
              </View>
            </ScrollView>
            <Text className="mt-5 text-[13px] text-[#555]">
              1,40,000+ Results
            </Text>
          </>
        )}
      </View>
      <ScrollView
        className="mt-4 flex-1 px-5"
        contentContainerClassName="flex-row flex-wrap justify-between pb-6"
        showsVerticalScrollIndicator={false}
      >
        {cards.map((card, index) => (
          <PackageCard key={`${card.title}-${index}`} {...card} />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
}
