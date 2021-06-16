import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { logUserOut } from "../apollo";
import { theme } from "../styles";

const Logout = () => {
  return (
    <TouchableOpacity onPress={() => logUserOut()}>
      <Text
        style={{
          color: theme === "dark" ? "white" : "black",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Log out
      </Text>
    </TouchableOpacity>
  );
};

export default Logout;
