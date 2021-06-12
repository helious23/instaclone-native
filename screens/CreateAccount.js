import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import FormError from "../components/auth/FormError";
import { theme } from "../styles";

export const CreateAccount = () => {
  const { register, handleSubmit, formState, setValue, clearErrors } =
    useForm();

  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onValid = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("firstName", {
      required: "First Name is required",
    });
    register("lastName", {
      required: true,
    });
    register("email", {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email is invalid",
      },
    });
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
        onFocus={() => clearErrors("firstName")}
        placeholder="First Name"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
        hasError={Boolean(formState?.errors?.firstName?.message)}
      />
      <FormError message={formState?.errors?.firstName?.message} />
      <TextInput
        onFocus={() => clearErrors("lastName")}
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text) => setValue("lastName", text)}
        hasError={Boolean(formState?.errors?.lastName?.message)}
      />
      <FormError message={formState?.errors?.lastName?.message} />
      <TextInput
        onFocus={() => clearErrors("username")}
        autoCapitalize={"none"}
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("username", text)}
        hasError={Boolean(formState?.errors?.username?.message)}
      />
      <FormError message={formState?.errors?.username?.message} />
      <TextInput
        onFocus={() => clearErrors("email")}
        autoCapitalize={"none"}
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={
          theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "gray"
        }
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
        hasError={Boolean(formState?.errors?.email?.message)}
      />
      <FormError message={formState?.errors?.email?.message} />
      <TextInput
        onFocus={() => clearErrors("password")}
        autoCapitalize={"none"}
        ref={passwordRef}
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
        text={"Create Account"}
        loading
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};
