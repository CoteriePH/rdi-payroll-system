import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`    
    width: 5.1em;
    height: auto;    
    margin: 1em;
`;

export const Folder = styled.div`
    width: 5em;
    height: 5em;    
    color: ${theme.colors.default};
`;

export const Name = styled.div`
   padding-left: .5em;
   font-family: ${theme.fonts.avenirRoman};
`;