import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  Bell,
  CalendarDays,
  Heart,
  MessageCircle,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react-native";
import { router } from "expo-router";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

const orders = [
  {
    title: "Enhance website visibility with targeted SEO and content ...",
    type: "Package",
    color: "#202329",
  },
  {
    title: "Design engaging mobile app interfaces with Sketch and...",
    type: "Brief",
    color: "#17483e",
  },
  {
    title: "Create a modern visual identity for your business",
    type: "Package",
    color: "#65365e",
  },
];

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <View className="h-[115px] w-[48%] items-center justify-center rounded-[12px] bg-white">
      <View
        className="h-10 w-10 items-center justify-center rounded-[8px]"
        style={{ backgroundColor: `${color}16` }}
      >
        {icon}
      </View>
      <Text className="mt-2 text-[10px] text-[#00858b]">{label}</Text>
      <Text className="mt-1 text-[18px] font-bold text-[#222]">{value}</Text>
    </View>
  );
}

function OrderCard({ title, type, color }: (typeof orders)[number]) {
  return (
    <Pressable onPress={() => router.push('/screens/order/details/[id]')} className="mb-4 rounded-[12px] border border-[#e2e2e2] bg-white p-3">
      <View className="flex-row">
        <View
          className="h-[68px] w-[68px] rounded-[6px]"
          style={{ backgroundColor: color }}
        />
        <View className="ml-3 flex-1">
          <Text className="text-[12px] leading-5 text-[#333]" numberOfLines={2}>
            {title}
          </Text>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[17px] font-bold">$85.00</Text>
            <Text className="ml-2 rounded border border-[#ddd] px-2 py-1 text-[10px] text-[#333]">
              {type}
            </Text>
          </View>
        </View>
      </View>
      <View className="my-3 border-t border-[#eee]" />
      <View className="flex-row items-center">
        <View className="h-10 w-10 rounded-full bg-[#245b62]" />
        <View className="ml-3">
          <Text className="text-[14px] font-bold">Seller_1_alex_91</Text>
          <Text className="mt-1 text-[10px] text-[#999]">United states</Text>
        </View>
      </View>
      <View className="my-3 border-t border-[#eee]" />
      <View className="flex-row items-center justify-between">
        <Text className="text-[13px] text-[#555]">Jun 12, 2026</Text>
        <Text className="rounded-full border border-[#ccd3e3] bg-[#eef1fa] px-3 py-1 text-[10px] text-[#42527b]">
          Inprogress
        </Text>
      </View>
    </Pressable>
  );
}

export default function OrdersScreen() {
  const [tab, setTab] = useState("All");
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-4 pb-8 pt-5"
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-[20px] font-bold text-[#222]">Orders</Text>
          <View className="flex-row gap-2">
            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
              <Heart size={21} color="#333" />
            </Pressable>
            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
              <Bell size={21} color="#333" />
            </Pressable>
          </View>
        </View>
        <View className="mt-6 flex-row flex-wrap justify-between gap-y-4">
          <StatCard
            label="Total spend"
            value="$5,077.00"
            color="#ff7b19"
            icon={<ArrowUpRight size={20} color="#ff7b19" />}
          />
          <StatCard
            label="Active Orders"
            value="06"
            color="#994cff"
            icon={<BriefcaseBusiness size={20} color="#994cff" />}
          />
          <StatCard
            label="Completed Orders"
            value="16"
            color="#00a39d"
            icon={<MessageCircle size={20} color="#00a39d" />}
          />
          <StatCard
            label="My Favorites"
            value="08"
            color="#ff3f48"
            icon={<Heart size={20} color="#ff3f48" />}
          />
        </View>
        <View className="mt-7 flex-row items-center justify-between">
          <Text className="text-[18px] font-medium text-[#222]">
            Recent Orders
          </Text>
          <View className="flex-row items-center gap-2">
            <Pressable className="h-8 w-8 items-center justify-center rounded border border-[#ddd] bg-white">
              <CalendarDays size={16} color="#344054" />
            </Pressable>
            <Pressable className="rounded border border-[#ddd] bg-white px-3 py-2">
              <Text className="text-[10px] text-[#222]">Manage all orders</Text>
            </Pressable>
          </View>
        </View>
        <View className="mt-4 flex-row rounded-[10px] border border-[#e3e3e3] bg-white p-1">
          {["All", "Packages", "Briefs"].map((item) => (
            <Pressable
              key={item}
              onPress={() => setTab(item)}
              className={`flex-1 items-center rounded-[6px] py-2 ${tab === item ? "bg-[#074d4c]" : ""}`}
            >
              <Text
                className={`text-[12px] ${tab === item ? "font-bold text-white" : "text-[#555]"}`}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <View className="mt-4">
          {orders
            .filter((order) => tab === "All" || order.type === tab.slice(0, -1))
            .map((order, index) => (
              <OrderCard key={`${order.title}-${index}`} {...order} />
            ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
