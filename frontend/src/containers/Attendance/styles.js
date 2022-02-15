import styled from "styled-components";
import { theme } from "@/theme";

export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.lightViolet};
  cursor: pointer;
  text-decoration: underline;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Wrapper = styled.div`
  height: inherit;
`;

export const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : 1)};
  flex-basis: ${(props) => (props.basis ? props.basis : 1)};
  align-items: ${(props) => (props.align ? props.align : null)};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) => (props.bg ? theme.colors[props.bg] : null)};
  transition: 0.3s ease-in-out;
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  & .child {
    transition-delay: 1s;
  }
`;

export const TableContainer = styled.div`
  position: relative;
  width: inherit;
  padding: 2em;
`;

export const Details = styled.div`
  padding: 1.5em 2em;
  display: flex;
  justify-content: space-between;
`;

export const PersonalInfo = styled.div`
  display: flex;
  column-gap: 1.5em;
`;

export const EmpPicture = styled.div`
  background-color: ${theme.colors.lightViolet};
  width: 10em;
  height: 10em;
  border-radius: 0.5em;
`;

export const EmpName = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  font-size: ${theme.fontSizes.xxl};
`;

export const First = styled.span`
  padding: 0em 0.1em;
`;

export const Middle = styled.span`
  padding: 0em 0.1em;
`;

export const Last = styled.span`
  padding: 0em 0.1em;
`;

export const NameOthers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FlexRow = styled.div`
  display: flex;
  column-gap: 1.5em;
`;

export const Position = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  text-decoration: uppercase;
  font-size: ${theme.fontSizes.lg};
  color: #9e9f9e;
  padding-left: 0.2em;
`;

export const VerticalLine = styled.div`
  width: 0.2em;
  background-color: #aaa;
`;

export const EmpNumber = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  color: ${theme.colors.violet};
  font-size: ${theme.fontSizes.lg};
`;

export const Department = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainDept = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-decoration: uppercase;
  font-size: 40px;
  color: ${theme.colors.lightViolet};
`;

export const Dept = styled.div`
  font-size: ${theme.fontSizes.lg};
  text-align: right;
  color: #9e9f9e;
`;

export const SubWrapper = styled.div`
  padding: 0.5em 2em;
  display: flex;
`;

export const Left = styled.div`
  flex-basis: 80%;
`;

export const EmpSpecs = styled.div`
  display: flex;
  column-gap: 3em;
  box-shadow: 0pt 0pt 0pt 1pt #d3bfe8;
  border-radius: 0.2em;
  padding: 0.5em 2em;
`;

export const EmpInfo = styled.div``;

export const Input = styled.input`
  background-color: ${theme.colors.lightViolet};
  font-family: ${theme.fonts.avenirBlack};
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 0.3em;
  text-align: center;
  margin-left: 0.5em;
`;
export const InputRate = styled.input`
  width: 7em;
  background-color: ${theme.colors.lightViolet};
  font-family: ${theme.fonts.avenirBlack};
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 0.3em;
  text-align: center;
  margin-left: 0.5em;
`;

export const InputSpecs = styled.input`
  width: 5em;
  background-color: ${theme.colors.lightViolet};
  font-family: ${theme.fonts.avenirBlack};
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 0.3em;
  text-align: center;
  margin-left: 0.5em;
`;

export const ColumnTitle = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  font-size: ${theme.fontSizes.xl2};
  color: ${theme.colors.default};
  width: 5em;
  display: flex;
  align-items: center;
`;

export const BasicPay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;
export const OvertimeRate = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;
export const NightDiff = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;
export const SunPay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const LegalHoliday = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const SalaryEarnings = styled.div`
  box-shadow: 0pt 0pt 0pt 1pt #d3bfe8;
  margin: 1em 0em;
  padding: 1em 1.3em;
  border-radius: 0.2em;
  display: flex;
  column-gap: 1.5em;
`;

export const SalaryDeductions = styled.div`
  box-shadow: 0pt 0pt 0pt 1pt #d3bfe8;
  margin: 1em 0em;
  padding: 1em 1.3em;
  border-radius: 0.2em;
  display: flex;
  column-gap: 1.5em;
`;

export const FinancialAssistance = styled.div`
  box-shadow: 0pt 0pt 0pt 1pt #d3bfe8;
  margin: 1em 0em;
  padding: 1em 1.3em;
  border-radius: 0.2em;
  display: flex;
  column-gap: 1.5em;
`;

export const SectionOne = styled.div`
  margin-left: 0.3em;
`;

export const SectionTwo = styled.div`
  margin-left: 1.5em;
`;
export const SectionThree = styled.div`
  margin-left: 1.3em;
`;

export const SectionFour = styled.div`
  margin-left: 0.3em;
`;

export const SSSContri = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const LoveFunds = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const LoveLoans = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const PhiLoans = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const CashAdv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const Others = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const SickPay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const SepaPay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const BonusPay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const OneThreeComputation = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const ThisYearSalary = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const OneThreePay = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8em;
`;

export const Run = styled.div`
  color: ${theme.colors.default};
`;
export const ModifiedButton = styled.button`
  color: #fff;
  background-color: ${theme.colors.default};
  font-family: ${theme.fonts.avenirRoman};
  font-size: ${theme.fontSizes.md};
  border: none;
  border-radius: 0.3em;
  padding: 0.3em 0.5em;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.darkViolet};
  }
  margin-left: 0.5em;
`;

export const ViewMonth = styled.div`
  color: ${theme.colors.default};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: ${theme.colors.darkViolet};
  }
  text-align: right;
  margin-top: 0.8em;
`;

export const Section = styled.div``;

export const DaysWorked = styled.div``;

export const NumOfHours = styled.div``;

export const SundayPay = styled.div``;

export const Span = styled.span``;

export const Rate = styled.div``;

export const Right = styled.div`
  flex-basis: 20%;
  padding: 2em 0em 2em 2em;
`;

export const GrossPay = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  text-decoration: uppercase;
`;

export const LessDeduc = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  text-decoration: uppercase;
  margin-top: 4em;
`;

export const NetPay = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  color: ${theme.colors.default};
  text-decoration: uppercase;
  margin-top: 4em;
`;

export const FewButtons = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 1em;
`;
export const Li = styled.div`
  margin-top: 4em;
`;

export const InputHR = styled.input`
  width: 93%;
  font-family: ${theme.fonts.avenirBlack};
  font-size: ${theme.fontSizes.md};
  border: none;
  outline: none;
  padding: 0.2em 0.5em;
  margin: 0.5em 0em;
  box-shadow: 0pt 2pt 0pt -1pt #aaa;
`;
