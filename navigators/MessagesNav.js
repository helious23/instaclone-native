import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rooms from "../screens/Rooms";
import Room from "../screens/Room";
import { theme } from "../styles";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackImage: ({ tintColor }) => (
          <Ionicons name="chevron-down" color={tintColor} size={28} />
        ),
        headerBackTitleVisible: false,
        headerTintColor: theme === "dark" ? "#fff" : "#000",
        headerStyle: {
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        },
      }}
    >
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
