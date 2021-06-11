import React from "react";
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components/native";
import { theme } from "../../styles";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 80%;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const AuthLayout = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
          }}
          behavior={Platform.OS === "ios" ? "position" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          <Logo
            resizeMode="contain"
            source={
              theme === "dark"
                ? require("../../assets/logo_white.png")
                : require("../../assets/logo_black.png")
            }
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
