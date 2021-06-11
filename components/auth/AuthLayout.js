import React from "react";
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
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

export const AuthLayout = ({ children }) => {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={
          theme === "dark"
            ? require("../../assets/logo_white.png")
            : require("../../assets/logo_black.png")
        }
      />
      {children}
    </Container>
  );
};
