import React from "react";
import Login from "../../../containers/Login";
import { getSession } from "next-auth/react";

const LoginPage = () => {
  return <Login />;
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

export default LoginPage;
