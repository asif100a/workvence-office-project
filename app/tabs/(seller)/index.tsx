import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react-native";

import ScreenWrapper from "@/components/layout/ScreenWrapper";
import ProfileAndGreeting from "@/components/common/ProfileAndGreeting";
import {
  BudgetRow,
  ExpenseRow,
  IconButton,
  IncomeRow,
  TransactionRow,
} from "@/components/module/home/_components";

const FILTERS = ["Daily", "Budget", "Expense", "Income"] as const;
type Filter = (typeof FILTERS)[number];

const TRANSACTIONS = [
  { id: "1", amount: "+$200.00", positive: true },
  { id: "2", amount: "-$200.00", positive: false },
  { id: "3", amount: "+$200.00", positive: true },
  { id: "4", amount: "-$200.00", positive: false },
  { id: "5", amount: "+$200.00", positive: true },
  { id: "6", amount: "+$200.00", positive: true },
];

const BUDGETS = [
  { id: "1", spent: "$800.00", remaining: "$345.20", progress: "56%" },
  { id: "2", spent: "$800.00", remaining: "$345.20", progress: "56%" },
  { id: "3", spent: "$800.00", remaining: "$345.20", progress: "56%" },
  { id: "4", spent: "$800.00", remaining: "$345.20", progress: "56%" },
  { id: "5", spent: "$800.00", remaining: "$345.20", progress: "56%" },
  { id: "6", spent: "$800.00", remaining: "$345.20", progress: "56%" },
];

const EXPENSES = [
  { id: "1", amount: "-$200.00" },
  { id: "2", amount: "-$200.00" },
  { id: "3", amount: "-$200.00" },
  { id: "4", amount: "-$200.00" },
  { id: "5", amount: "-$200.00" },
  { id: "6", amount: "-$200.00" },
];

const INCOMES = [
  { id: "1", amount: "+$200.00" },
  { id: "2", amount: "+$200.00" },
  { id: "3", amount: "+$200.00" },
  { id: "4", amount: "+$200.00" },
  { id: "5", amount: "+$200.00" },
  { id: "6", amount: "+$200.00" },
];

export default function TransactionsScreen() {
  const [activeFilter, setActiveFilter] = React.useState<Filter>("Daily");
  const isBudget = activeFilter === "Budget";
  const isExpense = activeFilter === "Expense";
  const isIncome = activeFilter === "Income";
  const sectionTitle = isBudget
    ? "Budget Allocation"
    : isExpense
      ? "Expense History"
      : isIncome
        ? "Income History"
        : "Today's Transactions";
  const sectionSubtitle =
    isExpense || isIncome ? "All expenditure data" : "16 September 2026";

  return (
    <ScreenWrapper>
      <View className="flex-1">
        <View className="px-4 pb-8 pt-8">
          <View className="flex-row items-center justify-between">
            <ProfileAndGreeting />

            <View className="flex-row gap-3">
              <IconButton onPress={() => router.push("/search")}>
                <Search size={23} color="#FFFFFF" strokeWidth={1.8} />
              </IconButton>
              <IconButton onPress={() => router.push("/filter" as any)}>
                <SlidersHorizontal
                  size={22}
                  color="#FFFFFF"
                  strokeWidth={1.8}
                />
              </IconButton>
            </View>
          </View>

          <View className="mt-8">
            <Text className="text-white/70 text-base">Total Balance</Text>
            <Text className="mt-2 text-white text-[44px] font-bold leading-[50px]">
              $200.00
            </Text>
          </View>
        </View>

        <View className="flex-1 rounded-t-[16px] bg-white px-4 pt-5">
          <View className="flex-row gap-3">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;

              return (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  className={`h-9 items-center justify-center rounded-full px-5 ${
                    active ? "bg-[#050C14]" : "border border-[#F0F1F3] bg-white"
                  }`}
                  activeOpacity={0.75}
                >
                  <Text
                    className={`text-xs ${
                      active ? "text-white font-medium" : "text-[#626973]"
                    }`}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View className="mt-5 flex-row items-center justify-between">
            <View>
              <Text className="text-[#10151C] text-lg font-bold">
                {sectionTitle}
              </Text>
              <Text className="mt-0.5 text-[#4F5660] text-xs">
                {sectionSubtitle}
              </Text>
            </View>

            <TouchableOpacity
              className="h-10 flex-row items-center rounded-full border border-[#F0F1F3] bg-white px-4"
              activeOpacity={0.75}
            >
              <Text className="mr-1 text-[#10151C] text-xs">Food</Text>
              <ChevronDown size={14} color="#10151C" strokeWidth={1.8} />
            </TouchableOpacity>
          </View>

          <ScrollView
            className="mt-5 flex-1"
            contentContainerClassName="gap-3 pb-8"
            showsVerticalScrollIndicator={false}
          >
            {isBudget
              ? BUDGETS.map((budget) => (
                  <BudgetRow
                    key={budget.id}
                    id={budget.id}
                    spent={budget.spent}
                    remaining={budget.remaining}
                    progress={budget.progress}
                  />
                ))
              : isExpense
                ? EXPENSES.map((expense) => (
                    <ExpenseRow
                      key={expense.id}
                      id={expense.id}
                      amount={expense.amount}
                    />
                  ))
                : isIncome
                  ? INCOMES.map((income) => (
                      <IncomeRow
                        key={income.id}
                        id={income.id}
                        amount={income.amount}
                      />
                    ))
                  : TRANSACTIONS.map((transaction) => (
                      <TransactionRow
                        key={transaction.id}
                        id={transaction.id}
                        amount={transaction.amount}
                        positive={transaction.positive}
                      />
                    ))}
          </ScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
}
