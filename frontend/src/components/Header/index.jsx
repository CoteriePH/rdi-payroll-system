import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CurrDate from "./date";
import {
  HeaderCan,
  HeaderName,
  HeaderDate,
  TitleContainer,
  TabsContainer,
  TabLink,
  ChevronForProll,
  HeaderAudPayroll
} from "./styles";

function Header(props) {
  let { pathname } = useLocation();
  const tabsMap = new Map();
  tabsMap.set("/cash-advance", [
    { title: "RUN", to: "/cash-advance" },
    { title: "UNPROCESSED C.A.'s", to: "/cash-advance/unprocessed" },
    { title: "PROCESSED C.A.'s", to: "/cash-advance/processed" },
  ]);
  if (pathname.includes("cash-advance")) {
    pathname = pathname.replace(/cash-advance\/?.*/g, "cash-advance");
  }

  return (
    <>
      <HeaderCan         
        jc={props.jc}>
        <HeaderAudPayroll tempDisplay = {props.tempDisplay}>
          <ChevronForProll>          
              <svg 
                mlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                  <path d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" fill="currentColor"/>
              </svg>
          </ChevronForProll>
          <HeaderName>
            {props.generatePayroll}
          </HeaderName> 
          From:  <input type="date" />
          To: <input type="date" />               
        </HeaderAudPayroll>
        
        {/* ChevronForProll is for Auditor Payroll */}
        <TitleContainer>          
          <HeaderName>
            {props.headerName}
          </HeaderName>
          <HeaderDate display={props.display}>
            <CurrDate />
          </HeaderDate>
        </TitleContainer>
        <TabsContainer>
          {tabsMap.get(pathname)?.map(({ title, to }, idx) => {
            return (
              <TabLink
                exact
                activeClassName="active"
                to={to}
                key={`${title}-${idx}`}
                size="xl"
                color="darkGray"
              >
                {title}
              </TabLink>
            );
          })}
        </TabsContainer>
      </HeaderCan>
    </>
  );

}

export default Header;
