import {
  View,
  TextInput,
  Platform,
  Pressable,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "../../Themed";
import { CalendarDays } from "lucide-react-native";

export default function StandardDateInput({
  label = "Text",
  date,
  onDateChange,
  placeholder = "dd/mm/yyyy",
  required = false,
  readonly = false,
  errorMessage = "",
  inputStyle = {},
  inputContainerStyle,
}: {
  label?: string;
  date: Date | null;
  onDateChange: (value: Date) => void;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  errorMessage?: string;
  inputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
}) {
  const [show, setShow] = useState<boolean>(false);

  const formatDate = (rawDate: Date | null) => {
    if (!rawDate || !(rawDate instanceof Date) || isNaN(rawDate.getTime())) {
      return "";
    }
    return rawDate.toLocaleDateString("en-US");
  };

  const pickerValue =
    date && date instanceof Date && !isNaN(date.getTime()) ? date : new Date();

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === "android") setShow(false);
    if (currentDate) onDateChange(currentDate);
  };

  const showPicker = () => setShow(true);

  return (
    <View className="mb-4" style={{ ...inputContainerStyle }}>
      {label && (
        <View className="flex-row">
          <Text
            className="text-base font-medium mb-1.5"
            style={{ color: readonly ? "#999" : "#333" }}
            accessibilityLabel={label}
          >
            {label}
          </Text>
          {required && <Text className="text-white"> *</Text>}
        </View>
      )}

      <Pressable onPress={() => (readonly ? {} : showPicker())}>
        <TextInput
          className="w-full border border-[#e8e8e8] rounded-lg text-[#333333]"
          style={[
            {
              height: 50,
              backgroundColor: "transparent",
              paddingHorizontal: 16,
            },
            inputStyle,
          ]}
          placeholder={placeholder}
          value={formatDate(date)}
          editable={false}
          placeholderTextColor="#B7B7C0"
        />

        <View className="absolute right-3 top-3">
          <CalendarDays size={22} color="#B7B7C0" strokeWidth={1.7} />
        </View>
      </Pressable>

      {errorMessage && (
        <Text className="text-red-500 text-xs mt-1">{errorMessage}</Text>
      )}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={pickerValue}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={onChange}
        />
      )}
    </View>
  );
}
