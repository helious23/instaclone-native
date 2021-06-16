import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../styles";
import { Image, View } from "react-native";
import { TabIcon } from "../components/nav/TabIcon";
import { StackNavFactory } from "./StackNavFactory";
import useMe from "../hooks/useMe";

const Tabs = createBottomTabNavigator();

export const LoggedInNav = () => {
  const { data } = useMe();
  console.log(data);
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
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      ></Tabs.Screen>
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
          tabBarIcon: ({ focused, color, size }) =>
            data?.me?.avatar ? (
              <Image
                source={{ uri: data.me.avatar }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  ...(focused && {
                    borderColor: "#0095f6",
                    borderWidth: 2,
                  }),
                }}
              />
            ) : (
              <TabIcon iconName={"person"} color={color} focused={focused} />
            ),
        }}
      >
        {() => <StackNavFactory screenName={"Me"} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};
