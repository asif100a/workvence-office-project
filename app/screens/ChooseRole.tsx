import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChooseRole() {
  const [role, setRole] = React.useState<"work" | "hire">("hire");
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.title}>What brings you to</Text>
        <Text style={styles.titleMuted}>Workvence?</Text>
        <View style={styles.cards}>
          <RoleCard
            selected={role === "work"}
            color="#7B35FF"
            title="I want to work"
            icon="person-add-outline"
            onPress={() => setRole("work")}
          />
          <RoleCard
            selected={role === "hire"}
            color="#C45A1A"
            title="I want to hire"
            icon="briefcase-outline"
            onPress={() => setRole("hire")}
          />
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          router.push(
            role === "work" ? "/screens/auth/signUp" : "/screens/auth/signUp",
          )
        }
      >
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
    </SafeAreaView>
  );
}

function RoleCard({ selected, color, title, icon, onPress }: any) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, selected && styles.selectedCard]}
    >
      <View
        style={[styles.checkbox, selected && { backgroundColor: "#174E4B" }]}
      >
        {selected && <Text style={styles.check}>✓</Text>}
      </View>
      <View style={[styles.iconCircle, { backgroundColor: `${color}12` }]}>
        <Ionicons name={icon} size={25} color={color} />
      </View>
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  content: { flex: 1, justifyContent: "center", paddingBottom: 95 },
  title: {
    textAlign: "center",
    color: "#090909",
    fontSize: 21,
    fontWeight: "800",
  },
  titleMuted: {
    textAlign: "center",
    color: "#8B8B8B",
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 14,
  },
  cards: { flexDirection: "row", gap: 9 },
  card: {
    flex: 1,
    height: 138,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  selectedCard: { borderColor: "#999" },
  checkbox: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    alignItems: "center",
    justifyContent: "center",
  },
  check: { color: "#FFF", fontSize: 9, lineHeight: 11 },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cardText: { color: "#303030", fontSize: 13, fontWeight: "700" },
  button: {
    height: 48,
    borderRadius: 3,
    backgroundColor: "#050505",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: { color: "#FFF", fontSize: 14, fontWeight: "500" },
});
