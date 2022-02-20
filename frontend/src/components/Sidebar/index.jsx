import React from "react";
import { Nav, CompanyLogo, DummyLogo } from "./styles";

function Sidebar({ children }) {
  return (
    <>
      <Nav>
        <CompanyLogo>
          <DummyLogo src="/img/companyLog.png" />
        </CompanyLogo>
        {children}
      </Nav>
    </>
  );
}

export default Sidebar;
