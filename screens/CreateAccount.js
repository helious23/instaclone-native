import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";

export const CreateAccount = () => {
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="UserName"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton
        text={"Create Account"}
        disabled={true}
        onPress={() => null}
      />
    </AuthLayout>
  );
};
