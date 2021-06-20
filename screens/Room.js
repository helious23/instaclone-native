import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";

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

export default function Room({ route, navigation }) {
  const { data } = useQuery(ROOM_QUERY, {
    variables: {
      id: route?.params?.id,
    },
  });
  console.log(data);
  useEffect(() => {
    navigation.setOptions({
      title: `${route?.params?.talkingTo?.username}`,
    });
  }, []);
  return (
    <View>
      <Text>Messages List</Text>
    </View>
  );
}
