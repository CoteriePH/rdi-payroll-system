import { theme } from "@/theme";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderAudPayroll = styled.div`
  display: ${(props)=>(props.tempDisplay ? props.tempDisplay : "none")};
  column-gap: 1em;
  width: 100%;
`;

export const InputDates = styled.div`
  display: ${(props)=> (props.dates ? props.dates : "flex")};
  
`;

export const From = styled.div`
  padding: 1em .5em;
  line-height: 10px;
  text-transform: uppercase;
  font-family: ${theme.fonts.avenirRoman} ;
  
`;

export const To = styled.div`
  padding: 1em .5em;
  line-height: 10px;
  text-transform: uppercase;
  font-family: ${theme.fonts.avenirRoman} ;
  
`;

export const ChevronForProll = styled.div` 
  width: 2.5em;
  height: 2.5em;
  color: ${theme.colors.default};     
  &:hover{
    cursor: pointer;
    color: ${theme.colors.lightViolet}
  }
`;

export const FlexRun = styled.div` 
  flex-grow: 2;
  display: flex;
  justify-content: flex-end;
  margin-right: 2.5em;
    
`;

export const HeaderCan = styled.div`
  padding: 1.5em 0em 1.2em 2.5em;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.1);
  display: flex;
  justify-content: ${(props) => (props.jc ? props.jc : "space-between")};
`;

export const HeaderName = styled.div`
  color: ${(props) => props.theme.colors.violet};
  font-family: ${(props) => props.theme.fonts.avenirBlack};
  font-size: 1.8em;
  padding-bottom: 0.5em;
`;

export const HeaderDate = styled.div`
  display: ${(props) => (props.display)};
  font-family: ${(props) => props.theme.fonts.avenirBook};
  color: rgb(10, 10, 10, 0.7);
  letter-spacing: 5px;
`;


export const TitleContainer = styled.div``;

export const TabsContainer = styled.div`
  display: ${(props)=> (props.TabContDisp ? props.TabContDisp : "flex")};
  gap: 3rem;
  padding: 1.5em 2.5em 1.2em 2.5em;
  .active {
    color: ${theme.colors.default};
    text-decoration: underline;
  }
`;

export const TabLink = styled(NavLink)`
  color: ${(props) => (props.color ? theme.colors[props.color] : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  font-family: ${(props) =>
    props.fontFamily ? theme.fonts[props.fontFamily] : theme.fonts.avenirRoman};
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.md};
  cursor: pointer;
  text-decoration: none;
  &:focus {
    text-decoration: underline;
  }
  &:hover {
    color: ${theme.colors.default};
    text-decoration: underline;
  }
`;
