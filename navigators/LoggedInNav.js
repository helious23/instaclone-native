import React from "react";
import useMe from "../hooks/useMe";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import UploadForm from "../screens/UploadForm";
import { theme } from "../styles";
import { Ionicons } from "@expo/vector-icons";
import MessagesNav from "./MessagesNav";

const Stack = createStackNavigator();

const LoggedInNav = () => {
  const { data } = useMe();
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Tabs"
        component={TabsNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadForm"
        component={UploadForm}
        options={{
          headerBackTitleVisible: false,
          title: "Upload",
          headerTintColor: theme === "dark" ? "#fff" : "#000",
          headerStyle: {
            backgroundColor: theme === "dark" ? "#000" : "#fff",
          },
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={tintColor} name="close" size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
