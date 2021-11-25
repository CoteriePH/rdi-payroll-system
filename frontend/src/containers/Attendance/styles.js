import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    
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
    border-radius: .5em;    
`;

export const EmpName = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.xxl};
`;

export const First = styled.span`
    padding: 0em .1em;
`;

export const Middle = styled.span`
    padding: 0em .1em;
`;

export const Last = styled.span`
    padding: 0em .1em;
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
    color: #9E9F9E;
    padding-left: .2em;
`;

export const VerticalLine = styled.div`
    width: .2em;
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
    color: #9E9F9E;
`;

export const SubWrapper = styled.div`
    padding: .5em 2em;  
    display: flex;  
`;

export const Left = styled.div`
    flex-basis:78%;
    
`;

export const Right = styled.div`
    flex-basis: 22%;
`;

export const EmpSpecs = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 20px;
    box-shadow: 0pt 0pt 0pt 1pt #D3BFE8;
    border-radius: .2em;
    padding: .5em 1em;
    
`;

export const EmpInfo = styled.div`

`;

export const Input = styled.input`
    
    background-color: ${theme.colors.lightViolet};
    font-family: ${theme.fonts.avenirBlack};
    border: none;
    outline:none;
    padding: .5em;
    border-radius: .3em;
    text-align: center;
    margin-left: .5em;
    

`;
export const InputRate = styled.input`
    width: 7em;
    background-color: ${theme.colors.lightViolet};
    font-family: ${theme.fonts.avenirBlack};
    border: none;
    outline:none;
    padding: .5em;
    border-radius: .3em;
    text-align: center;
    margin-left: .5em;

`;

export const InputSpecs = styled.input`
    width: 5em;
    background-color: ${theme.colors.lightViolet};
    font-family: ${theme.fonts.avenirBlack};
    border: none;
    outline:none;
    padding: .5em;
    border-radius: .3em;
    text-align: center;
    margin-left: .5em;
    
`;

export const Rate = styled.div`
     
`;


export const ColumnTitle = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.xl2};
    color: ${theme.colors.default};
    width: 5em;
    display: flex;
    align-items: center;
`;

export const SalaryEarnings = styled.div`
    box-shadow: 0pt 0pt 0pt 1pt #D3BFE8;
    margin: 1em 0em;
    padding: 1em 2em;
    border-radius: .2em;
    display: flex;
    
    column-gap: 2em;
`;

export const BasicPay = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;
export const OvertimeRate = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;
export const NightDiff = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;
export const SunPay = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;
export const LegalHoliday = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const SalaryDeductions = styled.div`
    box-shadow: 0pt 0pt 0pt 1pt #D3BFE8;
    margin: 1em 0em;
    padding: 1em 2em;
    border-radius: .2em;
    display: flex;    
    column-gap: 2em;
`;

export const FinancialAssistance = styled.div`
    box-shadow: 0pt 0pt 0pt 1pt #D3BFE8;
    margin: 1em 0em;
    padding: 1em 2em;
    border-radius: .2em;
    display: flex;    
    column-gap: 2em;
`;

export const Section = styled.div`

    
`;

export const SSSContri = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const LoveFunds = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const LoveLoans = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const PhiLoans = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const CashAdv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const Others = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;

export const Span = styled.span`
    
`;

export const SickPay = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
     
`;

export const SepaPay = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;

`;

export const BonusPay = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: .5em;
`;
export const DaysWorked = styled.div`
     
`;

export const NumOfHours = styled.div`

`;

export const SundayPay = styled.div`

`;
