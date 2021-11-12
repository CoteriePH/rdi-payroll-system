import { theme } from "@/theme";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderCan = styled.div`
  padding: 1.5em 0em 1.2em 2.5em;
  box-shadow: 0px 10px 10px rgba(46, 54, 68, 0.1);
  display: flex;
  justify-content: space-between;
`;

export const HeaderName = styled.div`
  color: ${(props) => props.theme.colors.violet};
  font-family: ${(props) => props.theme.fonts.avenirBlack};
  font-size: 1.8em;
  padding-bottom: 0.5em;
`;

export const HeaderDate = styled.div`
  font-family: ${(props) => props.theme.fonts.avenirBook};
  color: rgb(10, 10, 10, 0.7);
  letter-spacing: 5px;
`;

export const TitleContainer = styled.div``;

export const TabsContainer = styled.div`
  display: flex;
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
