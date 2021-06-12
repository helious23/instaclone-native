import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthButton } from "../components/auth/AuthButton";
import { AuthLayout } from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import FormError from "../components/auth/FormError";
import { theme } from "../styles";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { isLoggedInVar } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    setValue,
    clearErrors,
    watch,
    setError,
  } = useForm({
    mode: "onChange",
  });
  const passwordRef = useRef();

  // -------------------------------------- GraphQL -------------------------------------- //

  const onCompleted = (data) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    isLoggedInVar(true);
  };

  const [logInMutaion, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      logInMutaion({
        variables: {
          ...data,
        },
      });
    }
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

  const clearLoginError = () => {
    if (formState.errors.result) {
      clearErrors("result");
    }
  };

  return (
    <AuthLayout>
      <TextInput
        autoCapitalize={"none"}
        onFocus={() => clearErrors("username")}
        onChange={clearLoginError}
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
        onChange={clearLoginError}
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
        loading={loading}
        disabled={!watch("username") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
      <FormError message={formState?.errors?.result?.message} />
    </AuthLayout>
  );
};
