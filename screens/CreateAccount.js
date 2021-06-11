import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
`;

export const CreateAccount = () => {
  return (
    <Container>
      <Text>Create Account</Text>
    </Container>
  );
};
