import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spinner } from '@/components/ui/spinner';
import { Colors } from "@/constants/Colors";

export default function LoaderUI() {
  return (
    <SafeAreaView style={[styles.container, styles.horizontal]}>
       <Spinner size="large" color={Colors.common.BRAND} />;
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});