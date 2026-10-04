import { FilterType } from "@/app/(screens)/filter";
import { Text } from "@/components/Themed";
import { ChevronDown, Square, SquareCheck } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

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

export function FilterDropdown({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <TouchableOpacity
      className={`h-11 flex-row items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 ${className}`}
      activeOpacity={0.75}
    >
      <Text className="text-sm" style={{color: "#FFFFFF"}}>{label}</Text>
      <ChevronDown size={15} color="#FFFFFF" strokeWidth={1.7} />
    </TouchableOpacity>
  );
}

export function FilterAmountRow({ type }: { type: FilterType }) {
  return (
    <View className="mt-3 flex-row gap-3">
      <FilterDropdown label={type} className="w-[96px]" />
      <View className="h-11 flex-1 flex-row items-center rounded-lg border border-white/10 px-3 bg-transparent">
        <Text className="flex-1 text-sm" style={{color: "#FFFFFF"}}>$243.00</Text>
        <Text className="mr-2 text-xs" style={{color: "#FFFFFF"}}>August</Text>
        <ChevronDown size={14} color="#FFFFFF" strokeWidth={1.7} />
      </View>
    </View>
  );
}

export function FilterTab({
  label,
  active,
  onPress,
}: {
  label: FilterType;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className={`h-11 flex-1 items-center justify-center rounded-md`}
      style={active ? { backgroundColor: "#050A10" } : {borderWidth: 1, borderColor: "#F0F1F3", backgroundColor: '#FFFFFF'}}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Text
        className={`text-sm`}
        style={active ? {color: "#FFFFFF"} : {color: "#4E5661"}}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export function FilterCategoryRow({
  label,
  selected,
  showAmount = true,
  onPress,
}: {
  label: string;
  selected: boolean;
  showAmount?: boolean;
  onPress: () => void;
}) {
  const CheckboxIcon = selected ? SquareCheck : Square;

  return (
    <TouchableOpacity
      className="h-11 flex-row items-center rounded-lg border border-[#EEF0F3] bg-white px-3"
      onPress={onPress}
      activeOpacity={0.75}
    >
      <CheckboxIcon
        size={14}
        color={selected ? "#007AFF" : "#101820"}
        strokeWidth={1.9}
      />
      <Text className="ml-3 flex-1 text-[#101820] text-sm">{label}</Text>
      {showAmount ? (
        <Text className="text-[#101820] text-sm">$243.00</Text>
      ) : null}
    </TouchableOpacity>
  );
}