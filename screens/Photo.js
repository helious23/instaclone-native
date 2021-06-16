import React from "react";
import { gql, useQuery } from "@apollo/client";
import { RefreshControl, ScrollView, View } from "react-native";
import Photo from "../components/Photo";
import { ScreenLayout } from "../components/ScreenLayout";
import { PHOTO_FRAGMENT } from "../fragments";
import { theme } from "../styles";
import { useState } from "react";

const SEE_PHOTO = gql`
  query seePhoto($id: Int!) {
    seePhoto(id: $id) {
      ...PhotoFragment
      user {
        id
        username
        avatar
      }
      caption
    }
  }
  ${PHOTO_FRAGMENT}
`;

export default function PhotoScreen({ route }) {
  const { data, loading, refetch } = useQuery(SEE_PHOTO, {
    variables: {
      id: route?.params?.photoId,
    },
  });
  const [refreshing, setRefreshing] = useState();
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        refreshControl={
          // scrollview 에서 pull to refresh 는 RefreshControl comp 필요함
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
        contentContainerStyle={{
          backgroundColor: theme === "dark" ? "black" : "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Photo {...data?.seePhoto} />
      </ScrollView>
    </ScreenLayout>
  );
}
