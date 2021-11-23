import React from 'react';
import Header from '@/components/Header';
import {
  Wrapper,
  SubWrapper,
  Details,
  PersonalInfo,
  Department,
  EmpPicture,
  NameOthers,
  EmpName,
  First,
  Middle,
  Last,
  FlexRow,
  Position,
  EmpNumber,
  VerticalLine,
  MainDept,
  Dept
  
} from "./styles"
function Attendance() {
  // Yung content nito should be in auditor/payroll. Dito na lang muna yung playground since
  // mahirap pa gumawa gamit react hooks, ilipat na lang.
  return (
    <Wrapper>      
      <Header  
        tempDisplay="flex"      
        display="none" // Header Date
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
              <Middle>M.</Middle>
              <Last>Doe</Last>
            </EmpName>          
            <FlexRow>
              <Position>AUDITOR</Position>
              <VerticalLine></VerticalLine>              
              <EmpNumber>0000-003</EmpNumber>
            </FlexRow>
          </NameOthers>
        </PersonalInfo>
        <Department>
          <MainDept>
            ACCOUNTING/FINANCE
          </MainDept>
          <Dept>
            DEPARTMENT
          </Dept>
        </Department>
      </Details>
      <SubWrapper>
        
      </SubWrapper>
        
    </Wrapper>
  );
}

export default Attendance;
