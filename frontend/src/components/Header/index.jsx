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
      <HeaderCan>
        <TitleContainer>
          <HeaderName>{props.headerName}</HeaderName>
          <HeaderDate>
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
