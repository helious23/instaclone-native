import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { gql } from "@apollo/client/core";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";
import { FEED_PHOTO } from "../fragments";

const UPLOAD_PHOTO_MUTATION = gql`
  mutation uploadPhoto($file: Upload!, $caption: String) {
    uploadPhoto(file: $file, caption: $caption) {
      ...FeedPhoto
    }
  }
  ${FEED_PHOTO}
`;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0px 50px;
`;
const Photo = styled.Image`
  height: 350px;
`;
const CaptionContainer = styled.View`
  margin-top: 30px;
`;
const Caption = styled.TextInput`
  background-color: ${(props) => props.theme.fontColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 100px;
`;

const HeaderRightText = styled.Text`
  color: ${(props) => props.theme.blue};
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

export default function UploadForm({ route, navigation }) {
  const [uploadPhotoMutation, { loading }] = useMutation(UPLOAD_PHOTO_MUTATION);

  const HeaderRightLoading = () => (
    <ActivityIndicator size="small" color="#fff" style={{ marginRight: 10 }} />
  );
  const { register, handleSubmit, setValue } = useForm();
  const HeaderRight = () => (
    <TouchableOpacity onPress={handleSubmit(onValid)}>
      <HeaderRightText>Next</HeaderRightText>
    </TouchableOpacity>
  );
  useEffect(() => {
    register("caption");
  }, [register]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: loading ? HeaderRightLoading : HeaderRight,
      ...(loading && { headerLeft: () => null }),
    });
  }, [loading]);
  const onValid = ({ caption }) => {
    const file = new ReactNativeFile({
      uri: route?.params?.file,
      name: `1.jpg`,
      type: "image/jpeg",
    });
    uploadPhotoMutation({
      variables: {
        caption,
        file,
      },
    });
  };
  return (
    <DismissKeyboard>
      <Container>
        <Photo resizeMode="contain" source={{ uri: route?.params?.file }} />
        <CaptionContainer>
          <Caption
            placeholder="Write a caption..."
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            onChangeText={(text) => setValue("caption", text)}
            onSubmitEditing={handleSubmit(onValid)}
            returnKeyType="done"
          />
        </CaptionContainer>
      </Container>
    </DismissKeyboard>
  );
}
