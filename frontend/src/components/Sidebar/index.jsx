import React from "react";
import CompLog from "@/assets/img/companyLog.png";
import { Nav, CompanyLogo, DummyLogo } from "./styles";

function Sidebar({ children }) {
  return (
    <>
      <Nav>
        <CompanyLogo>
          <DummyLogo src={CompLog} />
        </CompanyLogo>
        {children}
      </Nav>
    </>
  );
}

export default Sidebar;
