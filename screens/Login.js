import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import FormError from "../components/auth/FormError";
import { theme } from "../styles";

export const Login = () => {
  const { register, handleSubmit, formState, setValue, clearErrors } =
    useForm();
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("username", {
      required: "Username is required",
    });
    register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password should be longer than 6 Char.",
      },
    });
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        onFocus={() => clearErrors("username")}
        autoCapitalize={"none"}
        placeholder="Username"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("username", text)}
        hasError={Boolean(formState?.errors?.username?.message)}
      />
      <FormError message={formState?.errors?.username?.message} />
      <TextInput
        ref={passwordRef}
        onFocus={() => clearErrors("password")}
        autoCapitalize={"none"}
        placeholder="Password"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
        hasError={Boolean(formState?.errors?.password?.message)}
      />
      <FormError message={formState?.errors?.password?.message} />
      <AuthButton
        text={"Log in"}
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};
