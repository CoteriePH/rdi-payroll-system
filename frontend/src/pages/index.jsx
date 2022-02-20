import HumanResources from "@/containers/HumanResources";
import { getSession } from "next-auth/react";

export default function Home() {
  return <HumanResources />;
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
