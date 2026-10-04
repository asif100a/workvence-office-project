import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Logo from "@/assets/images/logo.png";

export default function AppLogo() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  logo: {
    width: 76,
    height: 24,
  },
});
