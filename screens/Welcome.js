import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";

const LoginLink = styled.Text`
  color: #0095f6;
  font-weight: 600;
  margin-top: 20px;
`;

export const Welcome = ({ navigation }) => {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");

  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
};
