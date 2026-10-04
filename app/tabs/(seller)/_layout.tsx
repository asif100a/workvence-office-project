import { Tabs } from "expo-router";

import { CustomTabBar } from "@/components/layout/CustomTabBar";
import {
  ArrowLeftRight,
  BarChart3,
  BriefcaseBusiness,
  Ellipsis,
  LayoutGrid,
  Plus,
} from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: "#0477FF",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trans",
          tabBarIcon: ({ color }) => (
            <ArrowLeftRight size={24} color={color} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => (
            <BarChart3 size={22} color={color} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => (
            <Plus size={size} color={color} strokeWidth={1.7} />
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => (
            <BriefcaseBusiness size={22} color={color} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <LayoutGrid size={23} color={color} strokeWidth={2.2} />
          ),
        }}
      />
    </Tabs>
  );
}
