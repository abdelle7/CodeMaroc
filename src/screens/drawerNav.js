import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import StatsScreen from "./StatsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const drawerNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "stats") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              style={styles.iconStyle}
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
        labelStyle: styles.labelStyle,
      }}
    >
      <Drawer.Screen
        options={{ title: "الرئيسية" }}
        name="home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{ title: "الإحصائيات" }}
        name="stats"
        component={StatsScreen}
      />
      <Drawer.Screen
        options={{ title: "الإعدادات" }}
        name="settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    width: 300,
    position: "absolute",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    left: "50%",
    marginLeft: -150,
  },
  iconStyle: {
    position: "absolute",
    right: 5,
  },
  labelStyle: {
    textAlign: "right",
    paddingRight: 20,
  },
});

export default drawerNav;
