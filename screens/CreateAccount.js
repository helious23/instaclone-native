import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import FormError from "../components/auth/FormError";
import { theme } from "../styles";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;
export const CreateAccount = () => {
  const { register, handleSubmit, formState, setValue, clearErrors, watch } =
    useForm({
      mode: "onChange",
    });

  // -------------------------------------- GraphQL -------------------------------------- //

  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const onValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: { ...data },
    });
  };

  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
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
        onChange={() => clearErrors("firstName")}
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
        onChange={() => clearErrors("lastName")}
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
        onChange={() => clearErrors("username")}
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
        onChange={() => clearErrors("email")}
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
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};
