import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import { theme } from "../styles";

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

const ActionContainer = styled.View`
  padding: 10px;
`;

const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Likes = styled.Text`
  color: ${(props) => props.theme.fontColor};
  margin: 7px 0px;
  font-weight: 600;
`;

const Caption = styled.View`
  flex-direction: row;
`;

const CaptionText = styled.Text`
  margin-left: 5px;
  color: ${(props) => props.theme.fontColor};
`;

const Photo = ({ id, user, file, isLiked, likes, caption }) => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions(); // window의 너비 높이
  const [imageHeight, setImageHeight] = useState(height - 450);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 9); // 추후 조절 필요
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
      <ActionContainer>
        <Actions>
          <Action>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : theme === "dark" ? "#fff" : "#000"}
              size={26}
            />
          </Action>
          <Action onPress={() => navigation.navigate("Comments")}>
            <Ionicons
              name="chatbubble-outline"
              color={theme === "dark" ? "#fff" : "#000"}
              size={22}
            />
          </Action>
        </Actions>
        <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
          <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        </TouchableOpacity>
        <Caption>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Username>{user.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </ActionContainer>
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
