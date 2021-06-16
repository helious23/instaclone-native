import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

// To do: Make a follow, unfollow btn

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`;
const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  margin-right: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.formBorderColor};
`;
const Username = styled.Text`
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

const FollowBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.btnColor};
  border-radius: 5px;
  justify-content: center;
  padding: 5px 10px;
`;

const FollowBtnText = styled.Text`
  color: ${(props) => props.theme.fontColor};
  font-weight: 600;
`;

const UserRow = ({ id, avatar, username, isFollowing, isMe }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Column
        onPress={() =>
          navigation.navigate("Profile", {
            id,
            username,
          })
        }
      >
        <Avatar source={{ uri: avatar }} />
        <Username>{username}</Username>
      </Column>
      {!isMe ? (
        <FollowBtn>
          <FollowBtnText>{isFollowing ? "Unfollow" : "Follow"}</FollowBtnText>
        </FollowBtn>
      ) : null}
    </Wrapper>
  );
};

UserRow.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
};

export default UserRow;
