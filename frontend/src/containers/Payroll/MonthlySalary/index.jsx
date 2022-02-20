import React from "react";
import {
  Wrapper,
  Details,
  NameOthers,
  EmpPicture,
  EmpName,
  First,
  Middle,
  Last,
  FlexRow,
  Position,
  VerticalLine,
  EmpNumber,
  PersonalInfo,
  Department,
  MainDept,
  Dept,
  SubWrapper,
  Left,
  Right,
  Focused,
} from "./styles";
import Header from "@/components/Header";
import MarBox from "@/components/View/MarBox";
function Attendance() {
  return (
    <Wrapper>
      <Header
        tempDisplay="flex"
        display="none" // Header Date
        dates="none" // From and To Input Vanish
        TabContDisp="none"
        generatePayroll="generate payroll"
        jc="flex-start"
      />
      <Details>
        <PersonalInfo>
          <EmpPicture></EmpPicture>
          <NameOthers>
            <EmpName>
              <First>John</First>
              <Middle>Z.</Middle>
              <Last>Dough</Last>
            </EmpName>
            <FlexRow>
              <Position>AUDITOR</Position>
              <VerticalLine></VerticalLine>
              <EmpNumber>1516-0121</EmpNumber>
            </FlexRow>
          </NameOthers>
        </PersonalInfo>
        <Department>
          <MainDept>ACCOUNTING / FINANCE</MainDept>
          <Dept>DEPARTMENT</Dept>
        </Department>
      </Details>
      <SubWrapper>
        <Left>
          {/* example only not sure about scrolling dates if
              there are any react libraries that we can utilize */}
          <div>2017</div>
          <div>2018</div>
          <div>2019</div>
          <div>2020</div>
          <Focused>2021</Focused>
        </Left>
        <Right>
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
          <MarBox />
        </Right>
      </SubWrapper>
    </Wrapper>
  );
}

export default Attendance;
