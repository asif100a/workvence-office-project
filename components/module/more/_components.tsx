import { MoreItem } from "@/app/tabs/(seller)/profile";
import { Text, View } from "@/components/Themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export function MenuCard({ items }: { items: MoreItem[] }) {
  return (
    <View className="overflow-hidden rounded-xl border border-[#EEF0F3] bg-white">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <TouchableOpacity
            key={item.label}
            className={`h-[50px] flex-row items-center px-5 ${
              index < items.length - 1 ? "border-b border-[#F4F5F7]" : ""
            }`}
            onPress={item.onPress}
            activeOpacity={0.75}
          >
            <Icon
              size={21}
              color={item.iconColor || "#4B525B"}
              strokeWidth={1.7}
            />
            <Text
              className="ml-4 flex-1 text-base"
              style={{
                color: item.textColor || "#4B525B",
              }}
            >
              {item.label}
            </Text>
            <ChevronRight size={20} color="#101820" strokeWidth={1.7} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}