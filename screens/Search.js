import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../styles";
import styled from "styled-components/native";
import { useEffect } from "react";
import DismissKeyboard from "../components/DismissKeyboard";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client/core";

const SEARCH_PHOTOS = gql`
  query searchPhotos($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      id
      file
    }
  }
`;

const Input = styled.TextInput``;

export const Search = ({ navigation }) => {
  const { setValue, register, watch } = useForm();
  const SearchBox = () => (
    <TextInput
      style={{
        backgroundColor: theme === "dark" ? "#fff" : "#000",
        color: theme === "dark" ? "#000" : "#fff",
      }}
      placeholderTextColor={theme === "dark" ? "#000" : "#fff"}
      placeholder="Search Photos"
      autoCapitalize="none"
      returnKeyLabel="Search"
      returnKeyType="search"
      autoCorrect={false}
      onChangeText={(text) => setValue("keyword", text)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword");
  }, []);
  console.log(watch());
  return (
    <DismissKeyboard>
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
    </DismissKeyboard>
  );
};
