import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  ArrowLeft,
  Bell,
  Check,
  Heart,
  MessageCircle,
} from "lucide-react-native";
import { router, useLocalSearchParams } from "expo-router";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

function SellerCard() {
  return (
    <View className="rounded-[13px] border border-[#e1e1e1] bg-white p-4">
      <Text className="text-[22px] font-bold">About the seller</Text>
      <View className="my-4 border-t border-[#eee]" />
      <View className="flex-row items-center">
        <View className="h-12 w-12 rounded-full bg-[#b9dfe3]" />
        <View className="ml-3">
          <View className="flex-row items-center">
            <Text className="text-[16px] font-bold">Nilson Norman</Text>
            <Text className="ml-3 rounded bg-[#4b16a8] px-2 py-1 text-[10px] text-white">
              Pro
            </Text>
          </View>
          <Text className="mt-1 text-[12px] text-[#008b8b]">
            Web Designer | <Text className="font-bold text-[#222]">4.8 ⭐</Text>{" "}
            <Text className="text-[#999]">(226)</Text>
          </Text>
        </View>
      </View>
      <Text className="mt-4 text-[13px] leading-5 text-[#777]">
        We are an end-to-end digital team with 15+ years of experience creating
        high-impact web solutions. Our expertise includes Figma UI/UX design{" "}
        <Text className="font-bold text-[#333]">more</Text>
      </Text>
      <View className="my-4 border-t border-[#eee]" />
      <View className="flex-row">
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">From</Text>
          <Text className="mt-1 text-[17px] font-bold">Bangladesh</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">Member since</Text>
          <Text className="mt-1 text-[17px] font-bold">Mar 2020</Text>
        </View>
      </View>
      <View className="mt-5 flex-row">
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">Response Time</Text>
          <Text className="mt-1 text-[17px] font-bold">1 Hour</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">On time delivery</Text>
          <Text className="mt-1 text-[17px] font-bold">98%</Text>
        </View>
      </View>
    </View>
  );
}

function Timeline({ completed = false }: { completed?: boolean }) {
  return (
    <View className="rounded-[13px] border border-[#e1e1e1] bg-white p-4">
      <Text className="text-[22px] font-bold">Order Activity Timeline</Text>
      <View className="my-4 border-t border-[#eee]" />
      {[
        [
          "Order Placed and Paid",
          "Funds secured in escrow. Seller began working.",
        ],
        ["Work Delivered", "Seller submitted work files for review."],
        [
          "Order Accepted & Completed",
          "Buyer approved the work. Funds released to seller.",
        ],
      ].map(([title, description], index) => (
        <View key={title} className="flex-row">
          <View className="mr-3 items-center">
            <View
              className={`h-9 w-9 items-center justify-center rounded-full border ${index === 0 ? "border-[#008000] bg-[#008000]" : "border-[#ddd] bg-white"}`}
            >
              {index === 0 ? (
                <Check size={17} color="white" />
              ) : (
                <Text className="text-[#999]">{index + 1}</Text>
              )}
            </View>
            {index < 2 && <View className="h-6 w-px bg-[#ddd]" />}
          </View>
          <View className="pb-4">
            <Text className="text-[14px] font-bold">{title}</Text>
            <Text className="mt-1 text-[11px] text-[#999]">{description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function CompletedDelivery() {
  return (
    <>
      <View className="mt-7 rounded-[13px] border border-[#e1e1e1] bg-white p-4">
        <Text className="text-[17px] font-bold">
          Files & Attachments from Freelancer
        </Text>
        <Text className="mt-2 text-[12px] text-[#888]">
          Download the completed deliverables submitted by seller_1_alex_91
        </Text>
        <View className="mt-5 rounded-[7px] border border-[#eee] bg-[#fafafa] p-3">
          <Text className="font-bold text-[#333]">
            ▤ DELIVERY NOTES FROM FREELANCER
          </Text>
          <Text className="mt-2 text-[11px] leading-4 text-[#888]">
            Here is the completed source code repository link and database
            migration script as requested!
          </Text>
        </View>
        <View className="mt-4 flex-row items-center justify-between rounded-[9px] border border-[#ddd] p-3">
          <View>
            <Text className="text-[13px] font-bold">
              Client_ecommerce_3D_website.zip
            </Text>
            <Text className="mt-2 text-[11px] text-[#888]">
              file size 200mb
            </Text>
          </View>
          <Text className="rounded-full border border-[#ddd] px-3 py-2 text-[#4373bb]">
            ⇩
          </Text>
        </View>
      </View>
      <View className="mt-5 rounded-[13px] border border-[#e1e1e1] bg-white p-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold">Your Feedback & Review</Text>
          <Text className="rounded border border-[#ddd] px-3 py-1 font-bold">
            4.8 ⭐
          </Text>
        </View>
        <View className="mt-5 items-center rounded-[8px] bg-[#fafafa] p-5">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-[#f9eded]">
            <Check size={22} color="#bb5e5e" />
          </View>
          <Text className="mt-4 text-[17px] font-bold">Review Submitted</Text>
          <Text className="mt-2 text-center text-[11px] text-[#999]">
            Thank you for sharing your feedback{`\n`}with the community!
          </Text>
          <Text className="mt-5 text-[19px] font-bold text-[#222]">
            ⭐ ⭐ ⭐ ⭐ ⭐ 5.0
          </Text>
          <Text className="mt-4 text-center text-[12px] leading-5 text-[#555]">
            "Alex delivered outstanding work! The Node.js and PostgreSQL backend
            code is exceptionally clean, well-documented, and blazing fast. Will
            definitely hire again!"
          </Text>
        </View>
      </View>
    </>
  );
}

export default function OrderDetailsScreen() {
  const { status } = useLocalSearchParams<{ status?: string }>();
  const isCompleted = status === "completed";
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-24 pt-5"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={22} color="#666" />
            </Pressable>
            <Text className="ml-5 text-[22px] font-bold">Order Details</Text>
          </View>
          <View className="flex-row gap-3">
            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
              <Heart size={22} color="#333" />
            </Pressable>
            <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
              <Bell size={21} color="#333" />
            </Pressable>
          </View>
        </View>
        <Text className="mt-8 text-[21px] font-bold leading-7">
          I will build scalable Python backends and APIs using Fast API and
          (BASIC)
        </Text>
        {isCompleted ? (
          <CompletedDelivery />
        ) : (
          <View className="mt-7 rounded-[13px] border border-[#e1e1e1] bg-white p-4">
            <Text className="text-[18px] font-bold">
              Files & Attachments from Freelancer
            </Text>
            <Text className="mt-3 text-[14px] leading-5 text-[#888]">
              Download the completed deliverables submitted by seller_1_alex_91
            </Text>
            <View className="mt-6 h-11 items-center justify-center rounded border border-dashed border-[#bbb]">
              <Text className="text-[14px] text-[#aaa]">
                No deliverable attachment uploaded yet
              </Text>
            </View>
          </View>
        )}
        <View className="mt-5">
          <Timeline completed={isCompleted} />
        </View>
        <View className="mt-5">
          <SellerCard />
        </View>
        <View className="mt-5 rounded-[13px] border border-[#e1e1e1] bg-white p-4">
          <Text className="text-[22px] font-bold">Order Details</Text>
          <View className="mt-4 flex-row">
            <View className="h-[90px] w-[90px] rounded-[6px] bg-[#202329]" />
            <View className="ml-3 flex-1">
              <Text className="text-[16px] leading-6">
                Enhance website visibility with targeted SEO and content ...
              </Text>
              <View className="mt-2 flex-row items-center">
                <Text className="text-[22px] font-bold">$85.00</Text>
                <Text className="ml-2 rounded border border-[#ddd] px-2 py-1 text-[11px]">
                  Package
                </Text>
              </View>
            </View>
          </View>
          <View className="my-4 border-t border-dashed border-[#ddd]" />
          {[
            ["Order Number", "#FO_51_WD09N"],
            ["Order Date", "Sept 11"],
            ["Delivery Date", "Sept 24"],
          ].map(([label, value]) => (
            <View key={label} className="mb-4 flex-row justify-between">
              <Text className="text-[13px] text-[#006b6d]">{label}</Text>
              <Text className="text-[13px] font-bold text-[#655638]">
                {value}
              </Text>
            </View>
          ))}
          <View className="border-t border-dashed border-[#ddd] pt-4">
            <View className="flex-row justify-between">
              <Text className="text-[21px] font-bold text-[#075454]">
                Total
              </Text>
              <Text className="text-[21px] font-bold text-[#655638]">
                $85.00
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-[#fafafa] px-5 py-3">
        <Pressable className="h-14 flex-row items-center justify-center rounded-[5px] bg-black">
          <MessageCircle size={20} color="white" />
          <Text className="ml-3 text-[17px] font-bold text-white">
            Message Freelancer
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
