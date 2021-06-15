import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Photo from "../components/Photos";
import { ScreenLayout } from "../components/ScreenLayout";
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

export const Feed = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false} // scroll 없앰
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id} // key 값은 string
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
};
