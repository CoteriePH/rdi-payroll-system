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
  Dept,
  Left,
  Right,
  EmpSpecs,
  Span,
  Rate,
  DaysWorked,
  NumOfHours,
  SundayPay,
  Input,
  InputRate,
  SalaryEarnings,  
  SalaryDeductions,
  FinancialAssistance,
  ColumnTitle,
  EmpInfo,
  Section,
  SSSContri,
  LoveFunds,
  LoveLoans,
  PhiLoans,
  CashAdv,
  Others,
  InputSpecs,  
  BasicPay,
  OvertimeRate,
  NightDiff,
  SunPay,
  LegalHoliday,
  SickPay,
  SepaPay,
  BonusPay,
  OneThreeComputation,
  ThisYearSalary,
  OneThreePay,
  Run,
  ModifiedButton,
  ViewMonth,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  GrossPay,
  InputHR,
  LessDeduc,
  NetPay,
  FewButtons
} from "./styles"
import Checkbox from "@/components/Checkbox"
import Button from "@/components/Button"

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
            <Left>
              <EmpSpecs>
                <Rate>
                  <Span>Rate:</Span>
                  <InputRate type="text" maxLength="8"/>
                </Rate>
                <DaysWorked>
                  <Span>Days Worked:</Span>
                  <InputSpecs type="text" maxLength="6"/>
                </DaysWorked>
                <NumOfHours>
                  <Span>No. of Hours:</Span>
                  <InputSpecs type="text" maxLength="8"/>
                </NumOfHours>
                <SundayPay>              
                  <input type="checkbox" />
                  <Span>Sunday Pay</Span>
                </SundayPay>
              </EmpSpecs>
            
              <EmpInfo>
                <SalaryEarnings>
                  <ColumnTitle>Salary Earnings</ColumnTitle>
                  <SectionOne>
                    <BasicPay>
                      <div>Basic Pay:</div>
                      <Input type="text" maxLength="9"/>
                    </BasicPay>
                    <OvertimeRate>
                      <div>Overtime Rate:</div>
                      <Input type="text" maxLength="9"/>
                    </OvertimeRate>
                    <NightDiff>
                      <div>Night Differential:</div>
                      <Input type="text" maxLength="9"/>
                    </NightDiff>
                  </SectionOne>
                  <SectionTwo>
                    <SunPay>
                      <div>Sunday Pay:</div>
                      <Input type="text" maxLength="9"/>
                    </SunPay>
                    <LegalHoliday>
                      <div>Legal Holiday:</div>
                      <Input type="text" maxLength="9"/>
                    </LegalHoliday>
                  </SectionTwo>
                </SalaryEarnings>

                <SalaryDeductions>
                  <ColumnTitle>Salary Deduction</ColumnTitle>
                  <Section>
                    <SSSContri>
                      <Span>SSS Contributions:</Span>
                      <Input type="text" maxLength="9"/>
                    </SSSContri>
                    <LoveFunds>
                      <div>PAG-IBIG Funds:</div>
                      <Input type="text" maxLength="9"/>
                    </LoveFunds>
                    <LoveLoans>
                      <div>PAG-IBIG Loans:</div>
                      <Input type="text" maxLength="9"/>
                    </LoveLoans>
                  </Section>
                  <Section>
                    <PhiLoans>
                      <div>PhilHealth Loans:</div>
                      <Input type="text" maxLength="9"/>
                    </PhiLoans>
                    <CashAdv>
                      <div>Cash Advance:</div>
                      <Input type="text" maxLength="9"/>
                    </CashAdv>
                    <Others>
                      <div>Others:</div>
                      <Input type="text" maxLength="9"/>
                    </Others>
                  </Section>
                </SalaryDeductions>

                <FinancialAssistance>
                  <ColumnTitle>Financial Assistance</ColumnTitle>
                  <SectionThree>
                    <SickPay>
                      <div>Sick Pay:</div>
                      <Input type="text" maxLength="9"/>
                    </SickPay>

                    <SepaPay>
                      <div>Separation Pay:</div>
                      <Input type="text" maxLength="9"/>

                    </SepaPay>

                    <BonusPay>
                      <div>Bonus Pay:</div>
                      <Input type="text" maxLength="9"/>

                    </BonusPay>                    
                  </SectionThree>
                  <SectionFour>
                    <OneThreeComputation>
                        <Run>Run 13th month pay computation?</Run>
                        {/* <Button minW="5em">RUN</Button> */}
                        <ModifiedButton>yes</ModifiedButton>
                    </OneThreeComputation>

                    <ThisYearSalary>
                        <div>2021 Salary:</div>
                        <Input type="text" maxLength="9"/>
                    </ThisYearSalary>

                    <OneThreePay>
                        <div>13th Month Pay:</div>
                        <Input type="text" maxLength="9"/>
                    </OneThreePay>
                    <ViewMonth>
                      View this year's monthly salary
                    </ViewMonth>
                  </SectionFour>
                </FinancialAssistance>
              </EmpInfo>
            </Left>
            
            <Right>
              <GrossPay>
                <div>GROSS PAY:</div>
                <InputHR maxLength="21"></InputHR>
              </GrossPay>
              <LessDeduc>
                <div>LESS DEDUCTION:</div>
                <InputHR maxLength="21"></InputHR>
              </LessDeduc>
              <NetPay>
                <div>NET PAYABLE:</div>
                <InputHR maxLength="21"></InputHR>
              </NetPay>

              <FewButtons>                                
                <Button>VIEW</Button>
                <Button>EXPORT</Button>
                <Button>PRINT</Button>
              </FewButtons>
            </Right>
        </SubWrapper>

    </Wrapper>
  );
}

export default Attendance;
