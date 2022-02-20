import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    padding: 2.3em 2em;

`;

export const Inputs = styled.div`
    margin: 1em 0em;
    display: flex;
    gap: 1em;
    font-family: ${theme.fonts.avenirRoman};
    font-size: ${theme.fontSizes.xl};
`;

export const NotifbarTray = styled.div`
    display: flex;    
    flex-wrap: wrap;
`;
