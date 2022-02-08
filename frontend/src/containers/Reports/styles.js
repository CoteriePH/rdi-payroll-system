import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    padding: 1.5em;
    display: flex;
    column-gap: .5em;
`;

export const LeftSide = styled.div`  
    padding: .2em .5em;
    overflow: scroll;   
    height: 90vh;
    flex-basis: 39%;
    
    
`;

export const RightSide = styled.div`
    padding-top: 1em;
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
`;

export const DisplayNotif = styled.div`
    padding: 3em 2.5em;
    box-shadow: 0px 3px 10px 1px rgba(46, 54, 68, 0.2); 
    border-radius: .5em;   
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    
`;

export const To = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.xl};    
`;

export const SubText = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.md};
`;

export const MainMessage = styled.div`
    font-family: ${theme.fonts.avenirBook};
    font-size: ${theme.fontSizes.md};
`;

export const ProgressBar = styled.div`
    padding: 3em 2em;
    box-shadow: 0px 3px 10px 1px rgba(46, 54, 68, 0.2);  
    border-radius: .5em;  
`;

export const TitleBar = styled.div`
    font-family: ${theme.fonts.avenirBlack};
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.default};
    text-align: right;
    width: 6em;
  

`;