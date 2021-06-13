import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/Welcome";
import { Login } from "../screens/Login";
import { CreateAccount } from "../screens/CreateAccount";
import { theme } from "../styles";

const Stack = createStackNavigator();

export const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: false,
        headerTransparent: true,
        headerTintColor: theme === "dark" ? "white" : "black",
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};
