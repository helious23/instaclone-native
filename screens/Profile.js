import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { logUserOut } from "../apollo";
import { theme } from "../styles";

export const Profile = () => {
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
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text
          style={{
            color: theme === "dark" ? "white" : "black",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          logOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};
