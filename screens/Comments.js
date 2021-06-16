import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { theme } from "../styles";

export const Comments = () => {
  /* to do : keyboard avoiding view, dismisskeyboard
  flatlist, pull to refresh ...
  */
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
          Comments
        </Text>
      </TouchableOpacity>
    </View>
  );
};
