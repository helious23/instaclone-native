import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { LoggedOutNav } from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";
import { darkTheme, lightTheme, theme } from "./styles";
import { ThemeProvider } from "styled-components/native";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar } from "./apollo";
import { LoggedInNav } from "./navigators/LoggedInNav";

export default function App() {
  // AppLoading part
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false); // loading 이 끝나면 실행
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const preload = () => {
    const fontsToLoad = [Ionicons.font]; // 사용할 icon.font 파일 로드
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font)); // Array 형태의 promise 로 return
    const imagesToLoad = [
      require("./assets/logo_white.png"),
      require("./assets/logo_black.png"),
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <AppearanceProvider>
          <NavigationContainer>
            {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
          </NavigationContainer>
        </AppearanceProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
