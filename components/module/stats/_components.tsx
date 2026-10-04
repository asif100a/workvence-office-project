import { StatType } from "@/app/tabs/(tabs)/stats";
import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

export function IconButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      className="h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
      onPress={onPress}
      activeOpacity={0.75}
    >
      {children}
    </TouchableOpacity>
  );
}

export function StatTab({
  label,
  active,
  onPress,
}: {
  label: StatType;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className={`h-9 min-w-[76px] items-center justify-center rounded-full px-5 ${
        active ? "bg-[#07101A]" : "border border-[#F0F1F3] bg-white"
      }`}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text
        className={`text-xs`}
        style={active ? { color: "#FFFFFF", fontWeight: "500" } : { color: "#626973" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function LegendItem({ label }: { label: string }) {
  return (
    <View className="flex-row items-center">
      <View className="mr-1.5 h-2.5 w-2.5 rounded-full bg-[#2D8CFF]" />
      <Text className="text-[#101820] text-[10px]">{label} $200.00</Text>
    </View>
  );
}