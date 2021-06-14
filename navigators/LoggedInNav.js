import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../screens/Feed";
import { Search } from "../screens/Search";
import { Notifications } from "../screens/Notifications";
import { Me } from "../screens/Me";
import { theme } from "../styles";
import { View } from "react-native";
import { TabIcon } from "../components/nav/TabIcon";
import { StackNavFactory } from "../components/nav/StackNavFactory";

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
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Feed"} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Search"} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Camera"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={View} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Notifications"} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Me"} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};
