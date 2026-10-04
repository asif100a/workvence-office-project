import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

const ACTIVE_COLOR = "#675733";
const INACTIVE_COLOR = "#565656";

type CustomTabBarProps = BottomTabBarProps;

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: CustomTabBarProps) {
  const insets = useSafeAreaInsets();

  const triggerTabHaptic = async () => {
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {
      console.warn("Haptics not supported");
    }
  };

  return (
    <View
      style={[
        styles.tabBarContainer,
        { paddingBottom: Math.max(insets.bottom, 8) },
      ]}
    >
      {state.routes.map((route, routeIndex) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const labelText = typeof label === "string" ? label : route.name;
        const isFocused = state.index === routeIndex;
        const isAddTab = route.name === "add" || labelText === "Add";
        const color = isFocused ? ACTIVE_COLOR : INACTIVE_COLOR;

        const onPress = () => {
          void triggerTabHaptic();

          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={styles.tabContent}>
              <View
                style={[
                  styles.iconWrap,
                  isAddTab && styles.addIconWrap,
                  isAddTab && isFocused && styles.addIconWrapActive,
                ]}
              >
                {options.tabBarIcon?.({
                  focused: isFocused,
                  color: isAddTab ? "#FFFFFF" : color,
                  size: isAddTab ? 32 : 23,
                })}
              </View>

              <Text
                numberOfLines={1}
                style={[
                  styles.label,
                  { color },
                  isAddTab && styles.addLabel,
                  isFocused && styles.activeLabel,
                ]}
              >
                {labelText}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    paddingTop: 11,
    minHeight: 82,
    borderTopWidth: 0,
    elevation: 18,
    shadowColor: "#000000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 12,
  },
  tabButton: {
    flex: 1,
    minWidth: 0,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconWrap: {
    width: 34,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  addIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: -42,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#086EDB",
    borderWidth: 2,
    borderColor: "#2C8BFF",
    elevation: 8,
    shadowColor: "#086EDB",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  addIconWrapActive: {
    backgroundColor: "#006FE8",
  },
  label: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },
  addLabel: {
    marginTop: 0,
  },
  activeLabel: {
    fontWeight: "500",
  },
});
