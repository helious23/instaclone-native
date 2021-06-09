import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // AppLoading part
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false); // loading 이 끝나면 실행
  const preload = () => {
    const fontsToLoad = [Ionicons.font]; // 사용할 icon.font 파일 로드
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font)); // Array 형태의 promise 로 return
    const imagesToLoad = [require("./assets/logo.png")];
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
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
