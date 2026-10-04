import { Tabs } from "expo-router";

import { CustomTabBar } from "@/components/layout/CustomTabBar";
import {
  HomeIcon,
  OrdersIcon,
  MessageIcon,
  ProjectsIcon,
  ProfileIcon,
} from "@/assets/icons/bottom-tab/BottomTabIcons";

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
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon size={24} color={color} active={focused} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <OrdersIcon size={22} color={color} active={focused} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          title: "Message",
          tabBarIcon: ({ color, size, focused }) => (
            <MessageIcon size={size} color={color} active={focused} strokeWidth={1.7} />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, focused }) => (
            <ProjectsIcon size={22} color={color} active={focused} strokeWidth={1.9} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon size={23} color={color} active={focused} strokeWidth={2.2} />
          ),
        }}
      />
    </Tabs>
  );
}
