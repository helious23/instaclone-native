import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { Search } from "../screens/Search";
import { Notifications } from "../screens/Notifications";
import { Profile } from "../screens/Profile";
import { theme } from "../styles";

const Tabs = createBottomTabNavigator();

export const LoggedInNav = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: theme === "dark" ? "white" : "black",
        showLabel: false,
        style: {
          borderTopColor:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(0, 0, 0, 0.3)",
          backgroundColor: theme === "dark" ? "black" : "white",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" color={color} size={focused ? 26 : 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" color={color} size={focused ? 26 : 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart" color={color} size={focused ? 26 : 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="md-person-circle-outline"
              color={color}
              size={focused ? 26 : 20}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
