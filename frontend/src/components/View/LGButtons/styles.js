import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    display: flex;            
    column-gap: 1em;    
    width: 100%;        
`;

export const ListButton = styled.div`
    width: 2.5em;
    height: 2.5em;
    color: ${theme.colors.default};
    padding: .3em;
    border-radius: .5em;
    &:hover{
        box-shadow: 0pt 0pt 0pt 1pt ${theme.colors.default};
        cursor: pointer;
    }
`;

export const GridButton = styled.div`
    width: 2.5em;
    height: 2.5em;
    color: ${theme.colors.default};
    padding: .3em;
    border-radius: .5em;
    &:hover{
        box-shadow: 0pt 0pt 0pt 1pt ${theme.colors.default};
        cursor: pointer;
    }
    
`;
