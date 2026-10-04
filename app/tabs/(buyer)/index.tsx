import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react-native";
import ProfileAvatar from "@/components/common/ProfileAvatar";
import { Modal, ModalBackdrop, ModalContent } from "@/components/ui/modal";
import ScreenWrapper from "@/components/layout/ScreenWrapper";

const packages = [
  { title: "Logo & Brand Identity", color: "#7b72ec", price: "$150" },
  { title: "Digital Marketing", color: "#ff8b16", price: "$150" },
];

function PackageCard({ title, color, price }: (typeof packages)[number]) {
  return (
    <Pressable className="mr-3 w-[164px] rounded-[10px] border border-[#e4e4e4] bg-white p-2">
      <View
        className="h-[112px] rounded-[6px]"
        style={{ backgroundColor: color }}
      />
      <Text
        className="mt-2 text-[12px] font-bold text-[#222]"
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text className="mt-2 text-[10px] leading-4 text-[#777]">
        I will design, redesign business website as a professional
      </Text>
      <View className="mt-2 flex-row items-center justify-between">
        <Text className="text-[10px] text-[#888]">From</Text>
        <Text className="text-[14px] font-bold text-[#784316]">{price}</Text>
      </View>
    </Pressable>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <View className="mb-3 mt-5 flex-row items-center justify-between">
      <Text className="text-[18px] font-bold text-[#222]">{title}</Text>
      <Pressable className="flex-row items-center">
        <Text className="mr-1 text-[11px] font-medium text-[#075f5a]">
          All Packages
        </Text>
        <ChevronRight size={15} color="#075f5a" />
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [browseOpen, setBrowseOpen] = React.useState(false);

  if (searchOpen)
    return (
      <SearchView
        onBack={() => setSearchOpen(false)}
        onFilter={() => {
          setSearchOpen(false);
          setFilterOpen(true);
        }}
      />
    );
  if (browseOpen) return <BrowseView onBack={() => setBrowseOpen(false)} />;

  return (
    <ScreenWrapper>
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 pt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <ProfileAvatar name="Jerome Bell" size={45} />
              <View className="ml-3">
                <Text className="text-[12px] text-[#888]">Welcome Back</Text>
                <Text className="mt-0.5 text-[18px] font-bold text-[#111]">
                  Jerome Bell
                </Text>
              </View>
            </View>
            <View className="flex-row gap-2">
              <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
                <Heart size={21} color="#333" />
              </Pressable>
              <Pressable className="h-12 w-12 items-center justify-center rounded-full bg-white">
                <Bell size={21} color="#333" />
              </Pressable>
            </View>
          </View>

          <View className="mt-5 flex-row items-center gap-3">
            <View className="h-12 flex-1 flex-row items-center rounded-[10px] border border-[#dedede] bg-[#fafafa] px-3">
              <Search size={21} color="#222" />
              <TextInput
                onFocus={() => setSearchOpen(true)}
                className="ml-3 flex-1 text-[14px] text-[#222]"
                placeholder="Search"
                placeholderTextColor="#999"
              />
            </View>
            <Pressable
              onPress={() => setFilterOpen(true)}
              className="h-12 w-12 items-center justify-center rounded-[10px] border border-[#dedede] bg-white"
            >
              <SlidersHorizontal size={20} color="#222" />
            </Pressable>
          </View>

          <View className="mt-7 h-[168px] overflow-hidden rounded-[17px] bg-[#122b2f] px-4 py-5">
            <View className="absolute -right-12 -top-8 h-48 w-48 rounded-full bg-[#1e5c62] opacity-60" />
            <Text className="text-[20px] font-extrabold text-white">
              Start Your Journey
            </Text>
            <Text className="mt-2 w-[190px] text-[12px] leading-5 text-[#b8d4d1]">
              Explore projects, connect with talented freelancers.
            </Text>
            <Pressable
              onPress={() => setBrowseOpen(true)}
              className="mt-4 w-[140px] rounded-[4px] bg-white px-4 py-3"
            >
              <Text className="text-center text-[12px] font-bold text-[#333]">
                Browse Package
              </Text>
            </Pressable>
          </View>

          <SectionTitle title="Picked for you." />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {packages.map((item) => (
              <PackageCard key={item.title} {...item} />
            ))}
          </ScrollView>
          <SectionTitle title="Popular Packages" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {packages.map((item, index) => (
              <PackageCard
                key={`${item.title}-${index}`}
                {...item}
                color={index ? "#5bb0c4" : "#20252a"}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <Modal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        size="full"
      >
        <ModalBackdrop />
        <ModalContent className="m-0 max-h-[92%] w-full max-w-none justify-end rounded-t-[28px] rounded-b-none border-0 bg-white p-0 shadow-none">
          <View className="max-h-[92%] rounded-t-[28px] bg-white px-5 pt-3">
            <View className="mb-4 items-center">
              <View className="h-1 w-12 rounded-full bg-[#ddd]" />
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerClassName="pb-6"
            >
              <View className="flex-row items-center justify-center border-b border-[#eee] pb-4">
                <Text className="text-[21px] font-bold">Sort & Filter</Text>
                <Pressable onPress={() => setFilterOpen(false)}>
                  <X size={21} color="#333" />
                </Pressable>
              </View>
              <View className="mt-4 h-12 flex-row items-center rounded-[10px] border border-[#ddd] bg-[#f7f7f7] px-3">
                <Search size={20} color="#333" />
                <Text className="ml-3 text-[14px] text-[#999]">
                  What you are looking for
                </Text>
              </View>
              <Text className="mt-8 text-[16px] font-bold text-[#555]">
                Category
              </Text>
              <View className="mt-4 h-12 flex-row items-center justify-between rounded-[10px] border border-[#ddd] px-4">
                <Text className="text-[14px] text-[#777]">Seller Category</Text>
                <Text className="text-[18px] text-[#075f5a]">⌄</Text>
              </View>
              <Text className="mt-8 text-[16px] font-bold text-[#555]">
                Experience Level
              </Text>
              {["Entry Level", "Mid Level", "Senior Level"].map((item) => (
                <Text key={item} className="mt-3 text-[13px] text-[#222]">
                  □ {item}
                </Text>
              ))}
              <Text className="mt-8 text-[16px] font-bold text-[#555]">
                Delivery Time
              </Text>
              {[
                "Any time",
                "24 Hours (Express)",
                "Up to 3 days",
                "Up to 7 days",
              ].map((item) => (
                <Text key={item} className="mt-3 text-[13px] text-[#222]">
                  □ {item}
                </Text>
              ))}
              <Text className="mt-8 text-[16px] font-bold text-[#555]">
                Filter by Fixed Price
              </Text>
              <View className="mt-5 px-1">
                <View className="h-1 rounded-full bg-[#ddd]">
                  <View className="ml-[18%] h-1 w-[54%] bg-[#222]" />
                </View>
                <View className="-mt-2 flex-row justify-between px-[15%]">
                  <View className="h-5 w-5 rounded-full border-2 border-[#222] bg-white" />
                  <View className="h-5 w-5 rounded-full border-2 border-[#222] bg-white" />
                </View>
                <View className="mt-3 flex-row items-center justify-between">
                  <View className="h-10 w-[45%] flex-row items-center justify-between rounded-[7px] border border-[#ddd] px-3">
                    <Text className="font-bold text-[#555]">$ 100</Text>
                    <Text className="text-[#aaa]">Min</Text>
                  </View>
                  <Text className="font-bold">—</Text>
                  <View className="h-10 w-[45%] flex-row items-center justify-between rounded-[7px] border border-[#ddd] px-3">
                    <Text className="font-bold text-[#555]">$ 1000</Text>
                    <Text className="text-[#aaa]">Max</Text>
                  </View>
                </View>
              </View>
              <View className="mt-8 flex-row gap-4 border-t border-[#eee] pt-6">
                <Pressable
                  onPress={() => setFilterOpen(false)}
                  className="h-12 flex-1 items-center justify-center rounded-[4px] border border-[#111]"
                >
                  <Text className="font-bold text-[#222]">Restart</Text>
                </Pressable>
                <Pressable
                  onPress={() => setFilterOpen(false)}
                  className="h-12 flex-1 items-center justify-center rounded-[4px] bg-black"
                >
                  <Text className="font-bold text-white">Apply</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </ModalContent>
      </Modal>
    </ScreenWrapper>
  );
}

function SearchView({
  onBack,
  onFilter,
}: {
  onBack: () => void;
  onFilter: () => void;
}) {
  return (
    <ScreenWrapper>
      <View className="flex-1 px-5 pt-5">
        <View className="flex-row items-center gap-3">
          <Pressable onPress={onBack}>
            <ChevronLeft size={22} color="#555" />
          </Pressable>
          <Text className="text-[20px] font-bold">Search</Text>
          <View className="ml-auto flex-row gap-2">
            <Heart size={21} color="#333" />
            <Bell size={21} color="#333" />
          </View>
        </View>
        <View className="mt-7 flex-row items-center gap-3">
          <View className="h-12 flex-1 flex-row items-center rounded-[10px] border border-[#ddd] px-3">
            <Search size={20} color="#333" />
            <TextInput
              autoFocus
              className="ml-3 flex-1 text-[14px]"
              placeholder="Design"
              placeholderTextColor="#999"
            />
            <X size={18} color="#333" />
          </View>
          <Pressable
            onPress={onFilter}
            className="h-12 w-12 items-center justify-center rounded-[10px] border border-[#ddd]"
          >
            <SlidersHorizontal size={20} color="#333" />
          </Pressable>
        </View>
        <Text className="mt-8 text-[16px] font-bold">Suggestion</Text>
        {[
          "UI UX design",
          "Graphic design",
          "Product design",
          "Motion design",
        ].map((item) => (
          <View
            key={item}
            className="flex-row items-center border-b border-[#eee] py-5"
          >
            <Clock3 size={18} color="#777" />
            <Text className="ml-4 flex-1 text-[13px] text-[#333]">{item}</Text>
            <X size={17} color="#777" />
          </View>
        ))}
      </View>
    </ScreenWrapper>
  );
}

function BrowseView({ onBack }: { onBack: () => void }) {
  return (
    <ScreenWrapper>
      <View className="flex-1 px-5 pt-5">
        <View className="flex-row items-center">
          <Pressable onPress={onBack}>
            <ChevronLeft size={22} color="#555" />
          </Pressable>
          <Text className="ml-3 text-[20px] font-bold">Browse Package</Text>
        </View>
        <View className="mt-7 flex-row items-center gap-3">
          <View className="h-12 flex-1 flex-row items-center rounded-[10px] border border-[#ddd] bg-white px-3">
            <Search size={20} color="#333" />
            <Text className="ml-3 text-[14px] text-[#333]">Search</Text>
          </View>
          <Pressable className="h-12 w-12 items-center justify-center rounded-[10px] border border-[#ddd] bg-white">
            <SlidersHorizontal size={20} color="#333" />
          </Pressable>
        </View>
        <View className="mt-6 flex-row flex-wrap justify-between">
          {[
            ...packages,
            { title: "Product Development", color: "#111820", price: "$200" },
            { title: "Product Design", color: "#10aab2", price: "$180" },
          ].map((item) => (
            <View
              key={item.title}
              className="mb-4 w-[48%] rounded-[10px] border border-[#e2e2e2] bg-white p-2"
            >
              <View
                className="h-[105px] rounded-md"
                style={{ backgroundColor: item.color }}
              />
              <Text className="mt-2 text-[12px] font-bold text-[#222]">
                {item.title}
              </Text>
              <Text className="mt-2 text-[10px] text-[#777]">Logo Design</Text>
              <Text className="mt-2 border-t border-[#eee] pt-2 text-[10px] text-[#777]">
                Brand Style Guide
              </Text>
              <Text className="mt-2 border-t border-[#eee] pt-2 text-[10px] text-[#777]">
                Fonts & Typography
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
}
