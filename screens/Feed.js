import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";
import { theme } from "../styles";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export const Feed = ({ navigation }) => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme === "dark" ? "white" : "black" }}>Photo</Text>
    </View>
  );
};
