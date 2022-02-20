import styled from "styled-components";
import { theme } from "@/theme";

export const Container = styled.li`
  padding: 0;
  text-align: center;
  position: relative;
`;

export const StyledLink = styled.a`
  display: block;
  padding: 1.7em 1.5em;
  /* color: #4c00aa; */
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #4c00aa;
    background-color: #fff;
    font-family: "Avenir-Black";
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10%;
      right: 0;
      border: #4c00aa 0.3em solid;
      background-color: #4c00aa;
      border-bottom-right-radius: 1em;
      transform: translate(1px, -32px);
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 10%;
      right: 0;
      border: #4c00aa 0.3em solid;
      background-color: #4c00aa;
      border-top-right-radius: 1em;
      transform: translate(1px, 36px);
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
