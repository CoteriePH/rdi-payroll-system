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

  // &:focus-within {
  //   box-shadow: 0pt 0pt 0pt 2pt ${(props) =>
    props.menu ? "white" : props.theme.colors.violet};
  // }
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
  background-color: ${theme.colors.gray};
`;

export const Label = styled.small`
  text-transform: uppercase;
  margin-left: 0.2rem;
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;
