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
function MonthlySalary({ employee }) {
  return (
    <Wrapper>
      <Header
        isPayrollHeader={true}
        tempDisplay="flex"
        display="none" // Header Date
        dates="none" // From and To Input Vanish
        TabContDisp="none"
        generatePayroll="generate payroll"
        jc="flex-start"
        prevHref={`/payroll/${employee.id}`}
      />
      <Details>
        <PersonalInfo>
          <EmpPicture></EmpPicture>
          <NameOthers>
            <EmpName>
              <First>{employee.first_name}</First>
              <Middle>{employee.middle_name[0]}.</Middle>
              <Last>{employee.last_name}</Last>
            </EmpName>
            <FlexRow>
              <Position>{employee.position?.name}</Position>
              <VerticalLine></VerticalLine>
              <EmpNumber>{employee.id}</EmpNumber>
            </FlexRow>
          </NameOthers>
        </PersonalInfo>
        <Department>
          <MainDept>{employee.department?.name}</MainDept>
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

export default MonthlySalary;
