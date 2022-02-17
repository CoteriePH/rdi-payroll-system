import React from "react";
import LoginPage from "../../../containers/Login";
import { getSession } from "next-auth/react";

const Login = () => {
  return <LoginPage />;
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Login;
