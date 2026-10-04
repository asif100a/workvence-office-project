import React, { useMemo, useState } from "react";
import { ChevronDownIcon } from "lucide-react-native";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
} from "react-hook-form";
import { Pressable, ScrollView, View } from "react-native";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "../../ui/form-control";
import { Text } from "../../Themed";

type SelectOption = {
  label: string;
  value: string;
};

type StandardSelectFieldProps<T extends FieldValues> = {
  label?: string;
  id: FieldPath<T>;
  control: Control<T>;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  asterisk?: boolean;
};

type StandardSelectFieldContentProps<T extends FieldValues> = {
  label: string;
  options: SelectOption[];
  placeholder: string;
  readOnly: boolean;
  asterisk: boolean;
  field: ControllerRenderProps<T, FieldPath<T>>;
  fieldState: ControllerFieldState;
};

function StandardSelectFieldContent<T extends FieldValues>({
  label,
  options,
  placeholder,
  readOnly,
  asterisk,
  field: { onChange, value },
  fieldState: { error },
}: StandardSelectFieldContentProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedValue = value == null ? undefined : String(value);
  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <FormControl
      isInvalid={Boolean(error)}
      className="mb-5"
      style={{ zIndex: isOpen ? 20 : 1 }}
    >
      <FormControlLabel className="mb-2">
        <FormControlLabelText
          className="text-sm font-semibold text-[#333]"
          accessibilityLabel={label}
        >
          {label} {asterisk && <Text style={{ color: "#ef4444" }}>*</Text>}
        </FormControlLabelText>
      </FormControlLabel>

      <View className="relative">
        <Pressable
          className={`h-[50px] flex-row items-center justify-between rounded-xl border bg-transparent px-4 ${
            error ? "border-[#d92d20]" : "border-[#e8e8e8]"
          } ${readOnly ? "opacity-40" : ""}`}
          onPress={() => {
            if (!readOnly) {
              setIsOpen((current) => !current);
            }
          }}
          accessibilityRole="button"
          accessibilityState={{ disabled: readOnly, expanded: isOpen }}
        >
          <Text
            className={`flex-1 px-3 text-sm ${
              selectedOption ? "text-[#222]" : "text-[#999]"
            }`}
            numberOfLines={1}
          >
            {selectedOption?.label ?? placeholder}
          </Text>
          <ChevronDownIcon size={22} color="#999" />
        </Pressable>

        {isOpen ? (
          <View className="absolute left-0 right-0 top-[56px] z-20 max-h-[240px] overflow-hidden rounded-xl border border-[#e8e8e8] bg-white shadow-lg">
            <ScrollView
              nestedScrollEnabled
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={options.length > 4}
            >
              {options.map((option) => {
                const isSelected = option.value === selectedValue;

                return (
                  <Pressable
                    key={option.value}
                    className={`min-h-[52px] justify-center px-4 ${
                      isSelected ? "bg-[#fdf0f5]" : "bg-white"
                    }`}
                    onPress={() => handleSelect(option.value)}
                  >
                    <Text
                      className={`text-sm ${
                        isSelected
                          ? "font-semibold text-[#EF477F]"
                          : "text-[#222]"
                      }`}
                    >
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </View>

      {error?.message ? (
        <FormControlError>
          <FormControlErrorText className="text-xs text-[#d92d20]">
            {error.message}
          </FormControlErrorText>
        </FormControlError>
      ) : null}
    </FormControl>
  );
}

export default function StandardSelectField<T extends FieldValues>({
  label = "",
  id,
  control,
  options,
  placeholder = "Select an option",
  required = true,
  readOnly = false,
  asterisk = false,
}: StandardSelectFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={id}
      rules={{ required: required ? `${label} is required.` : undefined }}
      render={({ field, fieldState }) => (
        <StandardSelectFieldContent
          label={label}
          options={options}
          placeholder={placeholder}
          readOnly={readOnly}
          asterisk={asterisk}
          field={field}
          fieldState={fieldState}
        />
      )}
    />
  );
}
