import React from "react";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Logout from "../components/Logout";
import useMe from "../hooks/useMe";
import { theme } from "../styles";

export const Me = ({ navigation }) => {
  const { data } = useMe();
  useEffect(() => {
    if (data?.me?.username) {
      navigation.setOptions({
        title: data.me.username,
      });
    }
  }, [data]);
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Logout></Logout>
    </View>
  );
};
