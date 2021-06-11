import React, { useRef } from "react";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { theme } from "../styles";

export const Login = () => {
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onDone = () => {
    alert("Done");
  };
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={onDone}
      />
      <AuthButton text={"Log in"} disabled={true} onPress={() => null} />
    </AuthLayout>
  );
};
