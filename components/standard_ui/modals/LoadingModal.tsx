import { ActivityIndicator, View } from "react-native";
import ModalContainer from "./_modalContainer/ModalContainer";
import { Text } from "@/components/Themed";

export default function LoadingModal({
  isOpen,
  setOpen,
  title = "Loading",
  description = "Loading the action...",
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
        setVisible={() => setOpen(false)}
      >
        <Text>
          This is a loading modal
        </Text>
      </ModalContainer>
    </View>
  );
}
