import React, { useEffect, useState } from "react";
import CurrDate from "./date";
import {
  HeaderCan,
  HeaderName,
  HeaderDate,
  TitleContainer,
  TabsContainer,
  TabLink,
  ChevronForProll,
  HeaderAudPayroll,
  From,
  To,
  FlexRun,
  InputDates,
} from "./styles";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import Link from "next/link";

function Header(props) {
  const { pathname } = useRouter();
  let modPathName = pathname;

  // let prevHref = props.prevhref ? props.prevHref : "/payroll";

  const tabsMap = new Map();
  tabsMap.set("/cash-advance", [
    { title: "RUN", to: "/cash-advance" },
    { title: "UNPROCESSED C.A.'s", to: "/cash-advance/unprocessed" },
    { title: "PROCESSED C.A.'s", to: "/cash-advance/processed" },
  ]);
  if (pathname.includes("cash-advance")) {
    modPathName = pathname.replace(/cash-advance\/?.*/g, "cash-advance");
  }

  return (
    <>
      <HeaderCan jc={props.jc}>
        <HeaderAudPayroll tempDisplay={props.tempDisplay}>
          <Link href={props.prevHref || "/payroll"} passHref>
            <ChevronForProll>
              <svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z"
                  fill="currentColor"
                />
              </svg>
            </ChevronForProll>
          </Link>
          <HeaderName>{props.generatePayroll}</HeaderName>
          <InputDates dates={props.dates}>
            <From>From:</From>
            <input type="date" />
            <To>To:</To>
            <input type="date" />
          </InputDates>
          <FlexRun>
            <Button w="5%">RUN</Button>
          </FlexRun>
        </HeaderAudPayroll>

        <TitleContainer>
          <HeaderName>{props.headerName}</HeaderName>
          <HeaderDate display={props.display}>
            <CurrDate />
          </HeaderDate>
        </TitleContainer>
        <TabsContainer TabContDisp={props.TabContDisp}>
          {tabsMap.get(modPathName)?.map(({ title, to }, idx) => {
            return (
              <Link key={title + to} href={to} passHref>
                <TabLink
                  exact
                  activeClassName="active"
                  key={`${title}-${idx}`}
                  size="xl"
                  color="darkGray"
                >
                  {title}
                </TabLink>
              </Link>
            );
          })}
        </TabsContainer>
      </HeaderCan>
    </>
  );
}

export default Header;
