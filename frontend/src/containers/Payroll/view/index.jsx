import Button from "@/components/Button";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import {
  BasicPay,
  BonusPay,
  CashAdv,
  ColumnTitle,
  DaysWorked,
  Department,
  Dept,
  Details,
  EmpInfo,
  EmpName,
  EmpNumber,
  EmpPicture,
  EmpSpecs,
  FewButtons,
  FinancialAssistance,
  First,
  FlexRow,
  GrossPay,
  Input,
  InputHR,
  InputRate,
  InputSpecs,
  Last,
  Left,
  LegalHoliday,
  LessDeduc,
  LoveFunds,
  LoveLoans,
  MainDept,
  Middle,
  ModifiedButton,
  NameOthers,
  NetPay,
  NightDiff,
  NumOfHours,
  OneThreeComputation,
  OneThreePay,
  Others,
  OvertimeRate,
  PersonalInfo,
  PhiLoans,
  Position,
  Rate,
  Right,
  Run,
  SalaryDeductions,
  SalaryEarnings,
  Section,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
  SepaPay,
  SickPay,
  Span,
  SSSContri,
  SubWrapper,
  SundayPay,
  SunPay,
  ThisYearSalary,
  VerticalLine,
  ViewMonth,
  Wrapper,
} from "./styles";

const View = ({ employee }) => {
  const router = useRouter();
  const { id } = router.query;

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
              <First>{employee.first_name}</First>
              <Middle>{employee.middle_name.charAt(0)}.</Middle>
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
          <EmpSpecs>
            <Rate>
              <Span>Rate:</Span>
              <InputRate type="text" maxLength="8" />
            </Rate>
            <DaysWorked>
              <Span>Days Worked:</Span>
              <InputSpecs type="text" maxLength="6" />
            </DaysWorked>
            <NumOfHours>
              <Span>No. of Hours:</Span>
              <InputSpecs type="text" maxLength="8" />
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
                  <Input type="text" maxLength="9" />
                </BasicPay>
                <OvertimeRate>
                  <div>Overtime Rate:</div>
                  <Input type="text" maxLength="9" />
                </OvertimeRate>
                <NightDiff>
                  <div>Night Differential:</div>
                  <Input type="text" maxLength="9" />
                </NightDiff>
              </SectionOne>
              <SectionTwo>
                <SunPay>
                  <div>Sunday Pay:</div>
                  <Input type="text" maxLength="9" />
                </SunPay>
                <LegalHoliday>
                  <div>Legal Holiday:</div>
                  <Input type="text" maxLength="9" />
                </LegalHoliday>
              </SectionTwo>
            </SalaryEarnings>

            <SalaryDeductions>
              <ColumnTitle>Salary Deduction</ColumnTitle>
              <Section>
                <SSSContri>
                  <Span>SSS Contributions:</Span>
                  <Input type="text" maxLength="9" />
                </SSSContri>
                <LoveFunds>
                  <div>PAG-IBIG Funds:</div>
                  <Input type="text" maxLength="9" />
                </LoveFunds>
                <LoveLoans>
                  <div>PAG-IBIG Loans:</div>
                  <Input type="text" maxLength="9" />
                </LoveLoans>
              </Section>
              <Section>
                <PhiLoans>
                  <div>PhilHealth Loans:</div>
                  <Input type="text" maxLength="9" />
                </PhiLoans>
                <CashAdv>
                  <div>Cash Advance:</div>
                  <Input type="text" maxLength="9" />
                </CashAdv>
                <Others>
                  <div>Others:</div>
                  <Input type="text" maxLength="9" />
                </Others>
              </Section>
            </SalaryDeductions>

            <FinancialAssistance>
              <ColumnTitle>Financial Assistance</ColumnTitle>
              <SectionThree>
                <SickPay>
                  <div>Sick Pay:</div>
                  <Input type="text" maxLength="9" />
                </SickPay>

                <SepaPay>
                  <div>Separation Pay:</div>
                  <Input type="text" maxLength="9" />
                </SepaPay>

                <BonusPay>
                  <div>Bonus Pay:</div>
                  <Input type="text" maxLength="9" />
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
                  <Input type="text" maxLength="9" />
                </ThisYearSalary>

                <OneThreePay>
                  <div>13th Month Pay:</div>
                  <Input type="text" maxLength="9" />
                </OneThreePay>
                <ViewMonth
                  onClick={() =>
                    router.push(`/payroll/${employee.id}/monthly-salary`)
                  }
                >
                  {"View this year's monthly salary"}
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
};

export default View;
