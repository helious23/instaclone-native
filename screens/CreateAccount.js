import React, { useRef } from "react";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { theme } from "../styles";

export const CreateAccount = () => {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
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
        placeholder="First Name"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        keyboardType="email-address"
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
      <AuthButton
        text={"Create Account"}
        disabled={true}
        onPress={() => null}
      />
    </AuthLayout>
  );
};
