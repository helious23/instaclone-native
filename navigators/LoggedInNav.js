import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { Search } from "../screens/Search";
import { Notifications } from "../screens/Notifications";
import { Profile } from "../screens/Profile";
import { theme } from "../styles";
import { View } from "react-native";
import { TabIcon } from "../components/nav/TabIcon";

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
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Camera"
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
