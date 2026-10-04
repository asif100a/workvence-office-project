import { View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ModalContainer from "./_modalContainer/ModalContainer";
// import { useLogoutMutation } from "@/store/api/authApi";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Text } from "@/components/Themed";
import StandardButton from "../buttons/StandardButton";

export default function LogoutModal({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}) {
  // const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      // const res = await logout({}).unwrap();
      // if (res.success) {
      //   Toast.show({
      //     type: "success",
      //     text1: "Success",
      //     text2: "Logout successful",
      //   });
      //   setOpen(false);
      //   router.push("/auth/loginScreen");
      // }
    } catch (error: any) {
      console.error("❌ Error while logging out: ", error);
      Toast.show({
        type: "error",
        text1: "Logout Failed",
        text2: error?.data?.message,
      });
    }
  };

  return (
    <View>
      <ModalContainer visible={isOpen} setVisible={setOpen}>
        <View
          className={`bg-black/50 border rounded-lg`}
          style={{
            borderWidth: 1,
            borderColor: Colors.common.BRAND,
          }}
        >
          <View
            className="p-5 w-full"
            style={[{ backgroundColor: Colors.common.BRAND, borderRadius: 8 }]}
          >
            <View className={`p-4 bg-white rounded-full mx-auto`}>
              <AntDesign name="logout" size={28} color="#E53935" />
            </View>
            <View className={`mt-6`}>
              <Text
                className={`text-white text-[16px] font-normal text-center`}
              >
                You will be signed out of your account.
              </Text>
              <Text
                className={`text-white text-[16px] font-normal text-center`}
              >
                Your data will remain safely stored.
              </Text>
            </View>
            <View className={`flex-row items-center gap-4 mt-4`}>
              <StandardButton
                text="Cancel"
                style={{ flex: 1 }}
                onPress={() => setOpen(false)}
              />
              <StandardButton
                text="Log Out"
                onPress={handleLogout}
                style={{
                  flex: 1,
                  backgroundColor: Colors.common.BRAND,
                }}
                buttonTextStyle={{ color: "white" }}
              />
            </View>
          </View>
        </View>
      </ModalContainer>
    </View>
  );
}
