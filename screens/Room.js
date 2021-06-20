import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { FlatList, KeyboardAvoidingView } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import styled from "styled-components/native";
import { theme } from "../styles";

const ROOM_QUERY = gql`
  query seeRoom($id: Int!) {
    seeRoom(id: $id) {
      messages(lastId: 0) {
        id
        payload
        user {
          username
          avatar
        }
        read
      }
    }
  }
`;
const MessageContainer = styled.View``;
const Author = styled.View``;
const Avatar = styled.Image``;
const Username = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;
const Message = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;
const TextInput = styled.TextInput`
  margin-bottom: 100px;
  width: 95%;
  background-color: ${(props) => props.theme.fontColor};
  padding: 10px 20px;
  border-radius: 100px;
`;

export default function Room({ route, navigation }) {
  const { data, loading } = useQuery(ROOM_QUERY, {
    variables: {
      id: route?.params?.id,
    },
  });
  useEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.talkingTo?.username}`,
    });
  }, []);
  const renderItem = ({ item: message }) => (
    <MessageContainer>
      <Author>
        <Avatar source={{ uri: message.user.avatar }} />
        <Username>{message.user.username}</Username>
      </Author>
      <Message>{message.payload}</Message>
    </MessageContainer>
  );
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme === "dark" ? "#000" : "#fff" }}
      behavior="height"
      keyboardVerticalOffset={50}
    >
      <ScreenLayout loading={loading}>
        <FlatList
          inverted
          style={{ width: "100%" }}
          data={data?.seeRoom?.messages}
          keyExtractor={(message) => "" + message.id}
          renderItem={renderItem}
        />
        <TextInput
          placeholder="Write a message..."
          returnKeyLabel="Send Message"
          returnKeyType="send"
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
}
