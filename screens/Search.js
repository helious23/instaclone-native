import React, { useEffect } from "react";
import { ActivityIndicator, TextInput, View } from "react-native";
import { theme } from "../styles";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client/core";
import { useLazyQuery } from "@apollo/client";

const SEARCH_PHOTOS = gql`
  query searchPhotos($keyword: String!) {
    searchPhotos(keyword: $keyword) {
      photos {
        id
        file
      }
    }
  }
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MessageText = styled.Text`
  margin-top: 15px;
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
`;

const Input = styled.TextInput``;

export const Search = ({ navigation }) => {
  const { setValue, register, watch, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);
  const onValid = ({ keyword }) => {
    startQueryFn({
      variables: {
        keyword,
      },
    });
  };
  console.log(data);
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
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword", {
      required: true,
      minLength: 2,
    });
  }, []);
  return (
    <DismissKeyboard>
      <View
        style={{ flex: 1, backgroundColor: theme === "dark" ? "#000" : "#fff" }}
      >
        {loading ? (
          <MessageContainer>
            <ActivityIndicator size="large" />
            <MessageText>Searching...</MessageText>
          </MessageContainer>
        ) : null}
        {!called ? (
          <MessageContainer>
            <MessageText>Search by keyword</MessageText>
          </MessageContainer>
        ) : null}
        {data?.searchPhotos?.photos !== undefined &&
        data?.searchPhotos?.photos?.length === 0 ? (
          <MessageContainer>
            <MessageText>Could not find anything</MessageText>
          </MessageContainer>
        ) : null}
      </View>
    </DismissKeyboard>
  );
};
