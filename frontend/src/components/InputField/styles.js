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
  height: 2rem;
  border-radius: 10px;
  span {
    display: flex;
    align-items: center;
    margin: 0 1rem;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 1em;
  height: 2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
  background-color: ${(props) =>
    props.border ? theme.colors.white : theme.colors.gray};
  border: ${(props) => (props.border ? `1px solid silver` : null)};
`;

export const Label = styled.small`
  text-transform: uppercase;
  margin-left: 0.2rem;
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSizes[props.fontSize]
      : props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;
