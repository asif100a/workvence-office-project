import { TouchableOpacity, View } from "react-native";
import ModalContainer from "./_modalContainer/ModalContainer";
import { Text } from "@/components/Themed";

export default function DeleteModal({
  isOpen,
  setOpen,
  title = "Are you sure?",
  description = "This action will not be revoked.",
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  title?: string;
  description?: string;
}) {
  return (
    <View>
      <ModalContainer
        visible={isOpen}
        setVisible={setOpen}
        style={{ width: "90%", paddingHorizontal: 1 }}
      >
        <View
          className="w-full rounded-lg bg-white px-5 pb-6 pt-8"
          style={{
            borderWidth: 1,
            borderColor: "#222222",
          }}
        >
          <Text className="text-center text-[28px] font-bold" style={{color: '#222222'}}>
            {title}
          </Text>
          <Text className="mx-auto mt-3 max-w-[280px] text-center text-[16px] leading-5" style={{color: '#777777'}}>
            {description}
          </Text>

          <TouchableOpacity
            className="mt-8 h-16 items-center justify-center rounded-2xl bg-[#F94242]"
            activeOpacity={0.85}
          >
            <Text className="text-center text-[16px] font-semibold" style={{color: '#FFFFFF'}}>
              Delete
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4 h-6 items-center justify-center"
            onPress={() => setOpen(false)}
            activeOpacity={0.7}
          >
            <Text className="text-center text-[14px] font-normal" style={{color: '#111111'}}>
              Discard
            </Text>
          </TouchableOpacity>
        </View>
      </ModalContainer>
    </View>
  );
}
