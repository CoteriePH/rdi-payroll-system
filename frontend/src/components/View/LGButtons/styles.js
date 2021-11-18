import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
    display: flex;        
    justify-content: center; /* this is for display only */
    column-gap: .8em;    
    /* width: 10%; */
        
`;

export const ListButton = styled.div`
    width: 2.5em;
    height: 2.5em;
    color: ${theme.colors.default};
    padding: .3em;
    border-radius: .5em;
    &:hover{
        box-shadow: 0pt 0pt 0pt 1pt ${theme.colors.default};
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
    }
    
`;