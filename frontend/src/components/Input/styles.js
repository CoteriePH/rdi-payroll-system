import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 15rem;
  width: 100%;
  /* border: 1.5px solid ${(props) =>
    props.disabled ? theme.colors.default : "silver"}; */
  height: ${(props) => (props.menu ? "2.5rem" : "3rem")};
  box-shadow: 0pt 0pt 0pt 1.5pt
    ${(props) =>
      props.disabled
        ? theme.colors.default
        : props.menu
        ? theme.colors.white
        : "silver"};
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? theme.colors.lightViolet : theme.colors.white};
  span {
    display: flex;
    align-items: center;
    margin: 0 1rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }

  &:focus-within {
    box-shadow: 0pt 0pt 0pt 2pt
      ${(props) => (props.menu ? "white" : props.theme.colors.violet)};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: ${(props) => (props.menu ? "0 1em" : "0 1em 0 0")};
  height: 2rem;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
  background: ${(props) =>
    props.disabled ? theme.colors.lightViolet : theme.colors.white};
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-left: 0.2rem;
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;
