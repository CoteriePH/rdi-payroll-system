import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    
`;

export const Details = styled.div`
    margin: 1.5em 2em;
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
    margin: 1.5em 2em;    
    display: flex; 
    
    border-radius: .5em;
`;

export const Left = styled.div`
    background-color: #F6F3FB;
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.xl2};
    color: ${theme.colors.lightViolet};
    box-shadow: 21pt 0pt 0pt 0pt #F6F3FB;
    padding: .5em 2em;          
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    flex-basis: 10%;
    text-align: center;    
`;

export const Right = styled.div`
    padding: .5em 1em;  
    display: flex; 
    justify-content: center;
    flex-wrap : wrap ;
    border-left: solid ${theme.colors.default} .8em;
    border-radius: 2em;    
    background-color: #fff;
    box-shadow: 0px 0px 5px 1px rgb(0,0,51, 0.5);
    flex-basis: 85%;
`;
export const Focused = styled.div`
    color: ${theme.colors.default};
    font-size: ${theme.fontSizes.xxl};
`;
