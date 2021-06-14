import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../styles";

export const Feed = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: theme === "dark" ? "white" : "black" }}>
          Photo
        </Text>
      </TouchableOpacity>
    </View>
  );
};
