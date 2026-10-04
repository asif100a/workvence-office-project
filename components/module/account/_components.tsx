import { AccountTab } from "@/app/tabs/(tabs)/accounts";
import { Text, View } from "@/components/Themed";
import { ChevronRight, Gift, Trash2, Utensils, WalletCards } from "lucide-react-native";
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

export function AccountTypeTab({
  label,
  active,
  onPress,
}: {
  label: AccountTab;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className={`h-9 min-w-[70px] items-center justify-center rounded-full px-5 ${
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

export function TransactionIcon({ icon }: { icon: string }) {
  return (
    <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#F2F2F2]">
      {icon === "food" ? (
        <Utensils size={18} color="#D97916" strokeWidth={2} />
      ) : icon === "gift" ? (
        <Gift size={18} color="#FF7A1A" strokeWidth={2} />
      ) : (
        <WalletCards size={18} color="#2D8CFF" strokeWidth={2} />
      )}
    </View>
  );
}

export function TransactionRow({
  title,
  amount,
  positive,
  icon,
}: {
  title: string;
  amount: string;
  positive: boolean;
  icon: string;
}) {
  return (
    <TouchableOpacity
      className="h-[59px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3"
      activeOpacity={0.75}
    >
      <TransactionIcon icon={icon} />

      <View className="ml-3 flex-1">
        <Text className="text-[#10151C] text-sm font-medium">{title}</Text>
        <Text className="mt-0.5 text-[#565D66] text-[10px]">
          5 September - Friday 2026
        </Text>
      </View>

      <Text
        className={`mr-5 text-base font-medium ${
          positive ? "text-[#08BF4F]" : "text-[#FF2D2D]"
        }`}
      >
        {amount}
      </Text>

      <ChevronRight size={18} color="#0A0F16" strokeWidth={1.8} />
    </TouchableOpacity>
  );
}

export function AccountGroupRow({
  title,
  setDeleteModalVisible,
}: {
  title: string;
  setDeleteModalVisible: (value: boolean) => void;
}) {
  return (
    <View className="h-[42px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3">
      <Text className="flex-1 text-[#101820] text-sm">{title}</Text>
      <TouchableOpacity
        onPress={() => setDeleteModalVisible(true)}
        className="h-8 w-8 items-center justify-center"
        activeOpacity={0.7}
      >
        <Trash2 size={15} color="#101820" strokeWidth={1.8} />
      </TouchableOpacity>
    </View>
  );
}