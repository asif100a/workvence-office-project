import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  Clock3,
  Heart,
  Share2,
  Star,
  UserRound,
} from "lucide-react-native";
import { router } from "expo-router";
import ScreenWrapper from "@/components/layout/ScreenWrapper";
import { Modal, ModalBackdrop, ModalContent } from "@/components/ui/modal";

const plans = {
  Basic: {
    price: 285,
    title: "Small or test projects",
    delivery: "3 Day Delivery",
  },
  Silver: {
    price: 450,
    title: "Growing business projects",
    delivery: "5 Day Delivery",
  },
  Platinum: {
    price: 750,
    title: "Complete business solution",
    delivery: "8 Day Delivery",
  },
};

function CheckRow({ children }: { children: string }) {
  return (
    <View className="flex-row items-center border-b border-[#e8e8e8] py-4">
      <View className="mr-3 h-4 w-4 items-center justify-center rounded-[4px] border border-[#777]">
        <Check size={11} color="#555" />
      </View>
      <Text className="text-[16px] text-[#777]">{children}</Text>
    </View>
  );
}

function SellerCard() {
  return (
    <View className="rounded-[12px] border border-[#e2e2e2] bg-white p-4">
      <View className="flex-row items-center">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-[#b9dfe3]">
          <UserRound size={25} color="#444" />
        </View>
        <View className="ml-3 flex-1">
          <View className="flex-row items-center">
            <Text className="text-[16px] font-bold">Nilson Norman</Text>
            <Text className="ml-2 rounded bg-[#4b16a8] px-2 py-1 text-[10px] text-white">
              Pro
            </Text>
          </View>
          <View className="mt-1 flex-row items-center">
            <Text className="text-[12px] text-[#008b8b]">Web Designer</Text>
            <Text className="mx-2 text-[#aaa]">|</Text>
            <Text className="font-bold">4.8 ⭐</Text>
            <Text className="ml-2 text-[#999]">(226)</Text>
          </View>
        </View>
      </View>
      <Text className="mt-4 text-[12px] leading-5 text-[#777]">
        We are an end-to-end digital team with 15+ years of experience creating
        high-impact web solutions. Our expertise includes Figma UI/UX design.
      </Text>
      <View className="mt-4 flex-row border-t border-[#eee] pt-3">
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">From</Text>
          <Text className="mt-1 font-bold">Bangladesh</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">Member since</Text>
          <Text className="mt-1 font-bold">Mar 2020</Text>
        </View>
      </View>
      <View className="mt-4 flex-row">
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">Response Time</Text>
          <Text className="mt-1 font-bold">1 Hour</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[11px] text-[#888]">On time delivery</Text>
          <Text className="mt-1 font-bold">98%</Text>
        </View>
      </View>
    </View>
  );
}

function SellerContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={open} onClose={onClose} size="full">
      <ModalBackdrop />
      <ModalContent className="m-0 max-h-[82%] w-full max-w-none justify-end rounded-t-[26px] rounded-b-none border-0 bg-[#fafafa] p-0 shadow-none">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="px-5 pb-7 pt-4"
        >
          <View className="mb-4 items-center">
            <View className="h-1 w-12 rounded-full bg-[#ddd]" />
          </View>
          <View className="h-[84px] overflow-hidden rounded-[8px] bg-[#111]">
            <View className="mt-8 h-8 w-full bg-white" />
          </View>
          <View className="-mt-5 flex-row items-end">
            <View className="h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#b9dfe3]">
              <UserRound size={25} color="#444" />
            </View>
          </View>
          <View className="mt-2 flex-row items-center">
            <Text className="text-[18px] font-bold">Nilson Norman</Text>
            <Text className="ml-2 rounded bg-[#4b16a8] px-2 py-1 text-[10px] text-white">
              Pro
            </Text>
          </View>
          <Text className="mt-1 text-[12px] text-[#008b8b]">
            Web Designer | <Text className="font-bold text-[#222]">4.8 ⭐</Text>{" "}
            <Text className="text-[#999]">(226)</Text>
          </Text>
          <View className="mt-5 rounded-[9px] border border-[#e3e3e3] bg-white p-3.5">
            <Text className="text-[18px] font-bold">Meet your guy</Text>
            <Text className="mt-4 text-[11px] leading-4 text-[#777]">
              We are an end-to-end digital team with 15+ years of experience
              creating high-impact web solutions. Our expertise includes Figma
              UI/UX design <Text className="font-bold text-[#333]">more</Text>
            </Text>
            <View className="my-4 border-t border-[#eee]" />
            <View className="flex-row">
              <View className="flex-1">
                <Text className="text-[11px] text-[#888]">From</Text>
                <Text className="mt-1 font-bold">Bangladesh</Text>
              </View>
              <View className="flex-1">
                <Text className="text-[11px] text-[#888]">Member since</Text>
                <Text className="mt-1 font-bold">Mar 2020</Text>
              </View>
            </View>
            <View className="mt-4 flex-row">
              <View className="flex-1">
                <Text className="text-[11px] text-[#888]">Response Time</Text>
                <Text className="mt-1 font-bold">1 Hour</Text>
              </View>
              <View className="flex-1">
                <Text className="text-[11px] text-[#888]">
                  On time delivery
                </Text>
                <Text className="mt-1 font-bold">98%</Text>
              </View>
            </View>
            <View className="my-4 border-t border-[#eee]" />
            <Text className="text-[17px] font-bold">Skills</Text>
            <View className="mt-3 flex-row flex-wrap gap-2">
              {[
                "Problem solver",
                "Ui Designer",
                "UX Design",
                "Analytical Thinker",
                "Product management",
                "+2",
              ].map((skill) => (
                <Text
                  key={skill}
                  className="rounded border border-[#ccc] px-3 py-1 text-[9px] text-[#777]"
                >
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <Text className="mt-5 text-[20px] font-bold">Contact</Text>
          <View className="mt-4 rounded-[9px] border border-[#e3e3e3] bg-white p-3.5">
            <Text className="text-[18px] font-bold">Nilson Norman</Text>
            <Text className="mt-2 text-[11px] text-[#777]">
              Online • 10:45 AM local time
            </Text>
            <Pressable className="mt-6 h-11 items-center justify-center rounded-[4px] bg-black">
              <Text className="font-bold text-white">
                Contact with Nilson →
              </Text>
            </Pressable>
            <View className="my-5 border-t border-[#eee]" />
            <Pressable className="h-11 items-center justify-center rounded-[4px] bg-[#e9e9e9]">
              <Text className="font-bold text-[#333]">Message</Text>
            </Pressable>
            <Pressable className="mt-4 h-11 items-center justify-center rounded-[4px] bg-[#7ce8d6]">
              <Text className="font-bold text-[#183d3b]">
                Analysis Seller Profile 〽
              </Text>
            </Pressable>
          </View>
          <Pressable className="mt-5 h-14 flex-row items-center justify-between rounded-[10px] border border-[#e3e3e3] bg-white px-4">
            <Text className="text-[17px] font-bold text-[#333]">
              Review from the client
            </Text>
            <Text className="text-[22px] text-[#008c8c]">⌄</Text>
          </Pressable>
          <Pressable className="mt-5 h-14 flex-row items-center justify-between rounded-[10px] border border-[#e3e3e3] bg-white px-4">
            <Text className="text-[17px] font-bold text-[#333]">
              Frequently asked questions
            </Text>
            <Text className="text-[22px] text-[#008c8c]">⌄</Text>
          </Pressable>
        </ScrollView>
      </ModalContent>
    </Modal>
  );
}

export default function GigDetailsScreen() {
  const [activePlan, setActivePlan] = useState<keyof typeof plans>("Basic");
  const [sellerModalOpen, setSellerModalOpen] = useState(false);
  const plan = plans[activePlan];
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-28"
      >
        <View className="px-5 pt-5">
          <View className="flex-row items-center justify-between">
            <Pressable onPress={() => router.back()}>
              <ArrowLeft size={22} color="#666" />
            </Pressable>
            <Text className="text-[21px] font-bold">Gig details</Text>
            <View className="flex-row gap-3">
              <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
                <Heart size={22} color="#333" />
              </Pressable>
              <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
                <Share2 size={21} color="#333" />
              </Pressable>
            </View>
          </View>
          <View className="mt-5 h-[192px] rounded-[14px] bg-[#c74a36] p-5">
            <Text className="mt-10 text-[20px] font-black text-white">
              ALL OVER{`\n`}SPRAY
            </Text>
            <Text className="mt-1 text-[11px] text-white">
              BRANDING COLLECTION
            </Text>
          </View>
          <View className="mt-3 flex-row gap-2">
            <View className="h-14 flex-1 rounded-lg bg-[#eee]" />
            <View className="h-14 flex-1 rounded-lg bg-[#281d32]" />
            <View className="h-14 flex-1 rounded-lg bg-[#233b3b]" />
            <View className="h-14 flex-1 rounded-lg bg-[#24272d]" />
          </View>
          <Pressable
            onPress={() => setSellerModalOpen(true)}
            className="mt-5 flex-row items-center"
          >
            <View className="h-11 w-11 items-center justify-center rounded-full bg-[#b9dfe3]">
              <UserRound size={23} color="#444" />
            </View>
            <View className="ml-3">
              <View className="flex-row items-center">
                <Text className="text-[17px] font-bold">Nilson Norman</Text>
                <Text className="ml-2 rounded bg-[#4b16a8] px-2 py-1 text-[10px] text-white">
                  Pro
                </Text>
              </View>
              <Text className="mt-1 text-[12px] text-[#008b8b]">
                Web Designer |{" "}
                <Text className="font-bold text-[#222]">4.8 ⭐</Text>{" "}
                <Text className="text-[#999]">(226)</Text>
              </Text>
            </View>
          </Pressable>
          <Text className="mt-6 text-[24px] font-bold leading-9">
            I will create modern minimalist logo design for your business
          </Text>
          <Text className="mt-4 text-[15px] leading-6 text-[#888]">
            Welcome to the gig with the Most Amazing and Converting Landing Page
            designs <Text className="font-bold text-[#444]">more</Text>
          </Text>
          <View className="mt-6 flex-row flex-wrap rounded-[12px] border border-[#e2e2e2] bg-white">
            <View className="w-1/2 border-b border-r border-[#eee] p-3">
              <Text className="text-[11px] text-[#888]">Profile Status</Text>
              <Text className="mt-1 font-bold">Verified</Text>
            </View>
            <View className="w-1/2 border-b border-[#eee] p-3">
              <Text className="text-[11px] text-[#888]">Response Time</Text>
              <Text className="mt-1 font-bold">1 Hour</Text>
            </View>
            <View className="w-1/2 border-r border-[#eee] p-3">
              <Text className="text-[11px] text-[#888]">Top Rated in</Text>
              <Text className="mt-1 font-bold">Logo Design</Text>
            </View>
            <View className="w-1/2 p-3">
              <Text className="text-[11px] text-[#888]">Return rate</Text>
              <Text className="mt-1 font-bold">87%</Text>
            </View>
          </View>
        </View>
        <View className="mt-6 px-5">
          <View className="flex-row rounded-[10px] border border-[#8ccccc] bg-white p-1">
            {(Object.keys(plans) as (keyof typeof plans)[]).map((key) => (
              <Pressable
                key={key}
                onPress={() => setActivePlan(key)}
                className={`flex-1 items-center rounded-[6px] py-3 ${activePlan === key ? "bg-[#084c4c]" : ""}`}
              >
                <Text
                  className={`text-[18px] ${activePlan === key ? "text-white" : "text-[#444]"}`}
                >
                  {key}
                </Text>
              </Pressable>
            ))}
          </View>
          <View className="mt-4 rounded-[12px] border border-[#e1e1e1] bg-white p-4">
            <View className="flex-row items-center justify-between">
              <Text className="text-[19px] font-bold">{plan.title}</Text>
              <Text className="text-[32px] font-bold text-[#111]">
                ${plan.price}
              </Text>
            </View>
            <Text className="mt-4 border-t border-[#eee] pt-4 text-[15px] leading-6 text-[#555]">
              1 Screen - Clean Dashboard UI UX design - Developer-ready Figma
              files - Unlimited revisions
            </Text>
            <View className="mt-4 flex-row gap-2">
              <Text className="rounded bg-[#eee] px-2 py-2 text-[12px] text-[#555]">
                ↻ Unlimited Revision
              </Text>
              <Text className="rounded bg-[#eee] px-2 py-2 text-[12px] text-[#555]">
                ◷ {plan.delivery}
              </Text>
            </View>
            {[
              "1 page/screen",
              "1 custom asset",
              "Responsive design",
              "Wireframes",
              "Prototype",
              "Include source file",
            ].map((item) => (
              <CheckRow key={item}>{item}</CheckRow>
            ))}
            <Pressable className="mt-5 h-12 items-center justify-center rounded-[9px] bg-[#505050]">
              <Text className="font-bold text-white">
                Continue ${plan.price} →
              </Text>
            </Pressable>
            <Pressable className="mt-3 h-12 items-center justify-center rounded-[9px] bg-[#eee]">
              <Text className="font-bold text-[#333]">Contact Seller →</Text>
            </Pressable>
          </View>
        </View>
        <View className="mt-6 px-5">
          <Text className="text-[22px] font-bold">About this packages</Text>
          <View className="mt-3 rounded-[12px] border border-[#e1e1e1] bg-white p-4">
            <Text className="font-bold text-[#555]">Basic Package :</Text>
            <Text className="mt-3 leading-5 text-[#888]">
              Landing Page Figma UI UX design{`\n`}Responsive Version
            </Text>
            <View className="my-4 border-t border-[#eee]" />
            <Text className="font-bold text-[#555]">Area Covered :</Text>
            {[
              "SaaS Landing page",
              "Marketing Agency",
              "Startup",
              "Fintech",
              "Social Media Agency",
              "NFT Landing Page",
              "HTML Landing page",
              "Healthcare",
              "Business Coach",
              "Cyber Security",
            ].map((item) => (
              <View key={item} className="mt-3 flex-row items-center">
                <View className="mr-3 h-5 w-5 items-center justify-center rounded bg-[#286b65]">
                  <Check size={13} color="white" />
                </View>
                <Text className="text-[15px] text-[#888]">{item}</Text>
              </View>
            ))}
            <View className="my-4 border-t border-[#eee]" />
            <Text className="font-bold text-[#555]">Why Me?</Text>
            <Text className="mt-3 leading-5 text-[#888]">
              500+ Five Star reviews Custom designs 100% original, no templates
              Delivery only after your 100% Satisfaction
            </Text>
          </View>
        </View>
        <View className="mt-6 px-5">
          <Text className="mb-3 text-[22px] font-bold">Seller info</Text>
          <Pressable onPress={() => setSellerModalOpen(true)}>
            <SellerCard />
          </Pressable>
        </View>
        <View className="mt-6 px-5">
          <Text className="mb-3 text-[22px] font-bold">Packages</Text>
          <View className="rounded-[12px] border border-[#e1e1e1] bg-white p-3">
            <Text className="text-[18px] font-bold">SPRAY Branding Design</Text>
            <Text className="mt-2 text-[12px] text-[#078989]">
              Branding design project and developed a visually appealing design.
            </Text>
            <View className="mt-4 flex-row justify-between border-t border-[#eee] pt-3">
              <Text className="text-[12px] text-[#555]">
                Project Cost{`\n`}800$-1000$
              </Text>
              <Text className="text-[12px] text-[#555]">
                Duration{`\n`}10-15 Days
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 py-3">
        <Pressable className="h-12 items-center justify-center rounded-[9px] bg-[#505050]">
          <Text className="text-[16px] font-bold text-white">
            Continue ${plan.price} →
          </Text>
        </Pressable>
      </View>
      <SellerContactModal
        open={sellerModalOpen}
        onClose={() => setSellerModalOpen(false)}
      />
    </ScreenWrapper>
  );
}
