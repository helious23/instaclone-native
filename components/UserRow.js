import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

// To do: Make a follow, unfollow btn

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
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

const FollowBtn = styled.TouchableOpacity``;
const FollowBtnText = styled.Text`
  color: ${(props) => props.theme.fontColor};
`;

const UserRow = ({ avatar, username, isFollowing, isMe }) => {
  return (
    <Wrapper>
      <Column>
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
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
};

export default UserRow;
