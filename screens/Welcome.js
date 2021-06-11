import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { theme } from "../styles";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor};
  padding: 0px 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.blue};
  padding: 15px 10px;
  margin-top: 20px;
  border-radius: 5px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${(props) => props.theme.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export const Welcome = ({ navigation }) => {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={
          theme === "dark"
            ? require("../assets/logo_white.png")
            : require("../assets/logo_black.png")
        }
      />
      <CreateAccount disabled={false} onPress={goToCreateAccount}>
        <CreateAccountText>Create New Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};
