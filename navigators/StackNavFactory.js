import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../screens/Photo";
import { Profile } from "../screens/Profile";
import { Feed } from "../screens/Feed";
import { Search } from "../screens/Search";
import { Notifications } from "../screens/Notifications";
import { Me } from "../screens/Me";
import { theme } from "../styles";
import styled from "styled-components/native";
import { Likes } from "../screens/Likes";
import { Comments } from "../screens/Comments";

const Stack = createStackNavigator();

const Logo = styled.Image`
  width: 200px;
  height: 80px;
  max-width: 80%;
  max-height: 80%;
  margin: 20px auto;
  margin-bottom: 20px;
`;

export const StackNavFactory = ({ screenName }) => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: theme === "dark" ? "#fff" : "#000",
        headerStyle: {
          shadowColor:
            theme === "dark"
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(0, 0, 0, 0.3)",
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name={"Feed"}
          component={Feed}
          options={{
            headerTitle: () => (
              <Logo
                resizeMode="contain"
                source={
                  theme === "dark"
                    ? require("../assets/logo_white.png")
                    : require("../assets/logo_black.png")
                }
              />
            ),
          }}
        />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};
