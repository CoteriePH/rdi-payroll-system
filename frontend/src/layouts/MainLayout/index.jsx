import { useDispatch, useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar";
import {
  MainCan,
  MainRight,
  WrapperRight,
  LinkWrapper,
  ButtonContainer,
} from "./styles";

// import MainCan from "./styles";
import Link from "@/components/Link";
import Button from "@/components/Button";
import { getSession, signOut, useSession } from "next-auth/react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const role = session?.user.role;
  const { data } = useSelector((state) => state.employees);
  const { pathname } = useRouter();

  // encoder based sidebar
  const routesMap = new Map();
  routesMap.set("/", "HUMAN RESOURCES");
  routesMap.set("/payroll", "PAYROLL");
  routesMap.set("/attendance", "ATTENDANCE");
  routesMap.set("/employee-file", "EMPLOYEE FILE");
  routesMap.set("/memo", "MEMO");
  routesMap.set("/cash-advance", "CASH ADVANCE");
  routesMap.set("/request", "REQUESTS");
  routesMap.set("/for-approval", "FOR APPROVAL");
  routesMap.set("/reports", "REPORTS");

  let headerName = "RDI PAYROLL SYSTEM";
  if (pathname.includes("/cash-advance")) {
    headerName = routesMap.get(
      pathname.replace(/cash-advance\/?.*/g, "cash-advance")
    );
  } else if (routesMap.has(pathname)) {
    headerName = routesMap.get(pathname);
  }

  const handleLogout = () => {
    signOut();
  };
  // Return null if pathname contains the employeeIds
  const renderHeader = () => {
    const employeeIds = data.map((e) => e.id);
    const path = location.pathname.split("/");

    if (employeeIds.includes(path.at(-1))) {
      return null;
    } else {
      return <Header headerName={headerName} />;
    }
  };

  return (
    <>
      <MainCan>
        <Sidebar>
          <LinkWrapper>
            {role === "ENCODER" && (
              <>
                <Link href={`/`}>HUMAN RESOURCES</Link>
                <Link href={`/payroll`}>PAYROLL</Link>
                <Link href={`/attendance`}>ATTENDANCE</Link>
                <Link href={`/employee-file`}>EMPLOYEE FILE</Link>
                <Link href={`/memo`}>MEMO</Link>
                <Link href={`/cash-advance`}>CASH ADVANCE</Link>
                <Link href={`/request`}>REQUEST</Link>
              </>
            )}
            {role === "AUDITOR" && (
              <>
                <Link href={`/payroll`}>PAYROLL</Link>
                <Link href={`/attendance`}>ATTENDANCE</Link>
                <Link href={`/employee-file`}>EMPLOYEE FILE</Link>
                <Link href={`/for-approval`}>FOR APPROVAL</Link>
                <Link href={`/reports`}>REPORTS</Link>
              </>
            )}
          </LinkWrapper>
          <ButtonContainer>
            <Button
              border="1px"
              borderColor="gray"
              w="50%"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </ButtonContainer>
        </Sidebar>

        <MainRight>
          {renderHeader()}
          <WrapperRight>{children}</WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  return {
    props: { session },
  };
};

export default MainLayout;
