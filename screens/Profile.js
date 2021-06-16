import React from "react";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { logUserOut } from "../apollo";
import Logout from "../components/Logout";
import { theme } from "../styles";

export const Profile = ({ navigation, route }) => {
  useEffect(() => {
    if (route?.params?.username) {
      navigation.setOptions({
        title: route.params.username,
      });
    }
  }, []);
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme === "dark" ? "white" : "black" }}>
        Someone's Profile
      </Text>
    </View>
  );
};
