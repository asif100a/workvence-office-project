import { View, Text, TextInput, Modal, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronDown, X } from "lucide-react-native";

function FormField({
  label,
  placeholder,
  rightIcon,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  rightIcon?: React.ReactNode;
  multiline?: boolean;
}) {
  return (
    <View className="mb-5">
      <Text className="mb-2 text-white text-xs">{label}</Text>
      <View
        className={`flex-row rounded-lg border border-white/10 bg-white/5 px-3 ${
          multiline ? "h-[160px] items-start py-3" : "h-[42px] items-center"
        }`}
      >
        <TextInput
          className={`flex-1 text-white text-sm ${multiline ? "h-full" : ""}`}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.48)"
          multiline={multiline}
          selectionColor="#FFFFFF"
          style={multiline ? { textAlignVertical: "top" } : undefined}
        />
        {rightIcon}
      </View>
    </View>
  );
}

export default function AddAccountModal({
  visible,
  onClose,
}: {
  visible: boolean;
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
        className="flex-1 justify-end px-3 pb-12"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        onPress={onClose}
      >
        <View
          className="rounded-lg border border-white/10 bg-[#303030] px-3 pb-4 pt-4"
          onStartShouldSetResponder={() => true}
        >
          <View className="mb-5 flex-row items-center border-b border-white/10 pb-3">
            <Text className="flex-1 text-white text-lg font-bold">
              Add Account
            </Text>
            <TouchableOpacity
              className="h-8 w-8 items-center justify-center"
              onPress={onClose}
              activeOpacity={0.7}
            >
              <X size={18} color="#FFFFFF" strokeWidth={1.8} />
            </TouchableOpacity>
          </View>

          <FormField
            label="Group"
            placeholder="Cash"
            rightIcon={
              <ChevronDown
                size={15}
                color="rgba(255,255,255,0.75)"
                strokeWidth={1.8}
              />
            }
          />
          <FormField label="Name" placeholder="Enter Name" />
          <FormField label="Amount" placeholder="Enter Your Amount" />
          <FormField
            label="Description"
            placeholder="write here....."
            multiline
          />

          <TouchableOpacity
            className="h-11 items-center justify-center rounded-lg bg-[#0A7AF0]"
            activeOpacity={0.85}
          >
            <Text className="text-white text-sm font-semibold">Submit</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}
