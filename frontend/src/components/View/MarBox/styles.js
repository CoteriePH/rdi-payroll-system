import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    background-color: #fff;
    width: 15em;
    height: 8em;
    border-radius: 1em;    
    border: solid transparent 1px;
    border-bottom: solid ${theme.colors.darkViolet} 5px;
    box-shadow: 0px 5px 5px 1px rgb(0,0,51, 0.5);
    position:relative;
    margin: 1em;
`;

export const Month = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    padding: .5em 1.5em;
    background-color: #F6F3FA;
    color: ${theme.colors.default};
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border: solid #F6F3FA 5px;
`;

export const Details = styled.div`
    padding: .5em 1em;
    
`;

export const TotalDW = styled.span`
    padding-left: .3em;
    font-family: ${theme.fonts.avenirBlack};
    color: ${theme.colors.default};
`;

export const TotalDeduc = styled.span`
    padding-left: .3em;
    font-family: ${theme.fonts.avenirBlack};
    color: ${theme.colors.default};
`;

export const DaysWorked = styled.div`
    font-family: ${theme.fonts.avenirBook};
    color: rgb(0,0,0 0.8);
`;

export const Deductions = styled.div`
    font-family: ${theme.fonts.avenirBook};
    color: rgb(0,0,0 0.8);
`;
export const Total = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    color: #575454;
    position: absolute;
    bottom: 5px;
    font-size: ${theme.fontSizes.xl};
`;