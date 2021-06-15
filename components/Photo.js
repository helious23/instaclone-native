import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useEffect } from "react";
import { useState } from "react";

const Container = styled.View``;

const Header = styled.TouchableOpacity`
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.formBorderColor};
`;

const Username = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
`;

const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;

const CaptionText = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;

const Likes = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;

const Photo = ({ id, user, file, isLiked, likes, caption }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions(); // window의 너비 높이
  const [imageHeight, setImageHeight] = useState(height - 450);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 10); // 추후 조절 필요
    });
  }, [file]);

  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar resizeMode="cover" source={{ uri: user.avatar }} />
        <Username>{user.username}</Username>
      </Header>
      <File
        resizeMode="contain"
        style={{
          // width, height 필수값
          width,
          height: imageHeight,
        }}
        source={{ uri: file }}
      />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      <Caption>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Username>{user.username}</Username>
        </TouchableOpacity>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Container>
  );
};

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  caption: PropTypes.string,
  commentNumber: PropTypes.number.isRequired,
};

export default Photo;
