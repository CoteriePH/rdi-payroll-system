import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    
`;

export const SubWrapper = styled.div`
    padding: 1em;    
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

// EmpPicture,
// NameOthers,
// FlexRow,
// Position,
// EmpNumber,