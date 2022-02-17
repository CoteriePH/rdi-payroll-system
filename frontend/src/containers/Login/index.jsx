import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Left,
  Right,
  LoginContainer,
  Header,
  Form,
  Powered,
} from "./styles.js";
import InputField from "@/components/Input/index.jsx";
import Button from "@/components/Button/index.jsx";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, clearState } from "@/features/auth/authSlice.js";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

const LoginPage = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const router = useRouter();

  const { isError, isSuccess } = useSelector(authSelector);

  const onSubmit = async (data) => {
    await signIn("credentials", {
      callbackUrl: `${
        router.query.callbackUrl
          ? router.query.callbackUrl
          : window.location.origin
      }`,
      ...data,
    });
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  return (
    <Container>
      <Left>
        <Powered>
          <p>POWERED BY:</p>
          <h1>FANART INC.</h1>
        </Powered>
      </Left>
      <Right>
        <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
        <LoginContainer>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Header>Login</Header>
              <InputField uname name="username" required />
              <InputField pwd name="password" type="password" required />
              <Button type="submit">Log in</Button>
            </Form>
          </FormProvider>
        </LoginContainer>
      </Right>
    </Container>
  );
};

export default LoginPage;
