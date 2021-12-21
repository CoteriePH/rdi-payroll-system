import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    width: 21rem;
    height: 8rem;
    overflow: hidden;
    box-shadow: 0px 3px 10px 1px rgba(46, 54, 68, 0.1);
    border-radius: .5rem;
    padding: 1em;
    position: relative;
`;

export const ToAndIcon = styled.div`
    display: flex;    
    
`;

export const To = styled.div`
    font-family: ${theme.fonts.avenirRoman};
    font-size: ${theme.fontSizes.xl};
    margin-right: .5rem;
`;

export const Name = styled.div`
    font-family: ${theme.fonts.avenirRoman};
    font-size: ${theme.fontSizes.xl};
    flex-basis: 75%;
`;

export const Icon = styled.div`    
    width: 2.1rem;
    height: 2.1rem;
    color: #FFC837;
    margin-left: auto;        
`;

export const WarningCount = styled.div`
    font-family: ${theme.fonts.avenirRoman};
    font-size: ${theme.fontSizes.md};
`;

export const Description = styled.div`
    font-size: ${theme.fontSizes.sm};
    margin-top: .2rem;
    width: 100%;
    height: 2.3rem;
    overflow: hidden;
    
`;

export const Date = styled.div`
    color: ${theme.colors.default};
    position: absolute;
    bottom: 0;
    margin-bottom: .8em;
`;



