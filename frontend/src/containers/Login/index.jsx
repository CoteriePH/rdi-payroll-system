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
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const methods = useForm();
  const router = useRouter();

  useEffect(() => {
    if (router.query.error === "CredentialsSignin") {
      console.log("toast na");
      toast.error("Username or password is incorrect!");
    }
  }, [router.query.error]);

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

  return (
    <>
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
    </>
  );
};

export default LoginPage;
