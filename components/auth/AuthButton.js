import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

const Button = styled.TouchableOpacity`
  background-color: #0095f6;
  padding: 12px 10px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;
export const AuthButton = ({ disabled, onPress, text, loading }) => {
  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
};

AuthButton.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
