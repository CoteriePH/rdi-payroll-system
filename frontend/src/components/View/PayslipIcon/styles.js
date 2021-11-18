import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    width: 5.1em;
    height: auto;    
    margin: 1em;
    
`;

export const DocumentIcon = styled.div`
    width: 5em;
    height: 5em;
    color: ${theme.colors.default};    
`;

export const Date = styled.div`    
    padding: .2em 0em 0em .5em;
    
    width: 5.1em;
    font-family: ${theme.fonts.avenirRoman};
`;

export const Month = styled.span`    
    font-family: ${theme.fonts.avenirBook};
`;
export const Day = styled.span`    
    font-family: ${theme.fonts.avenirBook};
`;
export const Year = styled.span`    
    font-family: ${theme.fonts.avenirBook};
`;

export const Status = styled.div`
    padding-left: .5em;
    font-family: ${theme.fonts.avenirRoman};
`;
