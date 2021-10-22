import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { MainCan, MainRight, WrapperRight } from "./styles";
import Link from "components/Link";

const HomePage = ({ children }) => {
  return (
    <>
      <MainCan>
        <Sidebar>
          <Link to={`/`}>PAYROLL</Link>
          <Link to={`/attendance`}>ATTENDANCE</Link>
          <Link to={`/employee-file`}>EMPLOYEE FILE</Link>
          <Link to={`/for-approval`}>FOR APPROVAL</Link>
          <Link to={`/reports`}>REPORTS</Link>
        </Sidebar>

        <MainRight>
          <Header headerName={`payroll`} />
          <WrapperRight>{children}</WrapperRight>
        </MainRight>
      </MainCan>
    </>
  );
};

export default HomePage;
