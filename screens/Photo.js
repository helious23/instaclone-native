import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { logUserOut } from "../apollo";
import { theme } from "../styles";

export const Photo = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ color: theme === "dark" ? "white" : "black" }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
