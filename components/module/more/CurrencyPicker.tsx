import { View, Text, Modal, Pressable, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Check, X } from "lucide-react-native";
import { CurrencyOption } from "@/app/(screens)/more/configuration";

const CURRENCIES: CurrencyOption[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CAD", name: "Canadian Dollar", symbol: "$" },
  { code: "AUD", name: "Australian Dollar", symbol: "$" },
];

export default function CurrencyPicker({
  visible,
  value,
  onChange,
  onClose,
}: {
  visible: boolean;
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable
        className="flex-1 justify-end"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onPress={onClose}
      >
        <View
          className="max-h-[62%] rounded-t-[24px] bg-white px-5 pb-5 pt-4"
          onStartShouldSetResponder={() => true}
        >
          <View className="mb-4 flex-row items-center">
            <Text className="flex-1 text-[#101820] text-lg font-bold">
              Select Currency
            </Text>
            <TouchableOpacity
              className="h-9 w-9 items-center justify-center"
              onPress={onClose}
              activeOpacity={0.7}
            >
              <X size={20} color="#101820" strokeWidth={1.8} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {CURRENCIES.map((currency) => {
              const selected = value === currency.code;

              return (
                <TouchableOpacity
                  key={currency.code}
                  className="h-14 flex-row items-center rounded-xl px-3"
                  onPress={() => {
                    onChange(currency.code);
                    onClose();
                  }}
                  activeOpacity={0.75}
                >
                  <View className="h-9 w-9 items-center justify-center rounded-full bg-[#F2F6FA]">
                    <Text className="text-[#101820] text-base font-semibold">
                      {currency.symbol}
                    </Text>
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="text-[#101820] text-sm font-semibold">
                      {currency.code}
                    </Text>
                    <Text className="mt-0.5 text-[#6A7079] text-xs">
                      {currency.name}
                    </Text>
                  </View>
                  {selected ? (
                    <Check size={19} color="#007AFF" strokeWidth={2} />
                  ) : null}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
}
