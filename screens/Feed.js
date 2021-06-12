import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { isLoggedInVar, logUserOut, tokenVar } from "../apollo";
import styled from "styled-components/native";

const LogOut = styled.Text`
  text-align: center;
  margin-top: 50%;
`;

export const Feed = ({ navigation }) => {
  const token = tokenVar();
  const logOut = async () => {
    logUserOut();
  };
  return (
    <View>
      <Text>Hello</Text>
      <TouchableOpacity onPress={logOut}>
        <LogOut>Log out</LogOut>
      </TouchableOpacity>
    </View>
  );
};
