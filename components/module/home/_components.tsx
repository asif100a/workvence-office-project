import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { ChevronRight, Clock3, ShoppingBag, Utensils } from "lucide-react-native";
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

export function TransactionRow({
  id,
  amount,
  positive,
}: {
  id: string;
  amount: string;
  positive: boolean;
}) {
  return (
    <TouchableOpacity
      className="h-[59px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3"
      onPress={() =>
        router.push({
          pathname: "/trans-details/[id]",
          params: { id },
        })
      }
      activeOpacity={0.75}
    >
      <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#F2F2F2]">
        <Utensils size={18} color="#D97916" strokeWidth={2} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[#10151C] text-sm font-medium">Food</Text>
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

      <ChevronRight size={19} color="#0A0F16" strokeWidth={1.8} />
    </TouchableOpacity>
  );
}

export function BudgetRow({
  id,
  spent,
  remaining,
  progress,
}: {
  id: string;
  spent: string;
  remaining: string;
  progress: string;
}) {
  return (
    <TouchableOpacity
      className="h-[59px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3"
      onPress={() =>
        router.push({
          pathname: `/budget-details/[id]`,
          params: { id },
        })
      }
      activeOpacity={0.75}
    >
      <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#F2F2F2]">
        <Utensils size={18} color="#D97916" strokeWidth={2} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[#10151C] text-sm font-medium">Food</Text>
        <View className="mt-0.5 flex-row items-center">
          <Text className="text-[#565D66] text-[10px]">5 Sept 2026</Text>
          <Text className="mx-1 text-[#A4A8AE] text-[10px]">-</Text>
          <Clock3 size={10} color="#FF2D2D" strokeWidth={2} />
          <Text className="ml-1 text-[#FF2D2D] text-[10px]">{spent}</Text>
          <Text className="mx-1 text-[#A4A8AE] text-[10px]">-</Text>
          <ShoppingBag size={10} color="#08BF4F" strokeWidth={2} />
          <Text className="ml-1 text-[#08BF4F] text-[10px]">{remaining}</Text>
        </View>
      </View>

      <View className="mr-3 flex-row items-center">
        <Clock3 size={14} color="#007AFF" strokeWidth={2} />
        <Text className="ml-1 text-[#007AFF] text-xs">{progress}</Text>
      </View>

      <ChevronRight size={18} color="#0A0F16" strokeWidth={1.8} />
    </TouchableOpacity>
  );
}

export function ExpenseRow({ id, amount }: { id: string; amount: string }) {
  return (
    <TouchableOpacity
      className="h-[59px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3"
      onPress={() =>
        router.push({
          pathname: `/expense-details/[id]`,
          params: { id },
        })
      }
      activeOpacity={0.75}
    >
      <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#F2F2F2]">
        <Utensils size={18} color="#D97916" strokeWidth={2} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[#10151C] text-sm font-medium">Food</Text>
        <Text className="mt-0.5 text-[#565D66] text-[10px]">
          5 September - Friday 2026
        </Text>
      </View>

      <Text className="mr-5 text-[#FF2D2D] text-base font-medium">
        {amount}
      </Text>

      <ChevronRight size={18} color="#0A0F16" strokeWidth={1.8} />
    </TouchableOpacity>
  );
}

export function IncomeRow({ id, amount }: { id: string; amount: string }) {
  return (
    <TouchableOpacity
      className="h-[59px] flex-row items-center rounded-lg border border-[#F0F1F3] bg-white px-3"
      onPress={() =>
        router.push({
          pathname: `/income-details/[id]`,
          params: { id },
        })
      }
      activeOpacity={0.75}
    >
      <View className="h-9 w-9 items-center justify-center rounded-lg bg-[#F2F2F2]">
        <Utensils size={18} color="#D97916" strokeWidth={2} />
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[#10151C] text-sm font-medium">Food</Text>
        <Text className="mt-0.5 text-[#565D66] text-[10px]">
          5 September - Friday 2026
        </Text>
      </View>

      <Text className="mr-5 text-[#08BF4F] text-base font-medium">
        {amount}
      </Text>

      <ChevronRight size={18} color="#0A0F16" strokeWidth={1.8} />
    </TouchableOpacity>
  );
}