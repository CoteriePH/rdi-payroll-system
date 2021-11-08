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

export const Select = styled.select`
  width: 100%;
  padding: 0 1rem 0 0.5rem;
  height: inherit;
  outline: none;
  border: 0;
  border-radius: 5px;
  background-color: ${theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;

export const Label = styled.label`
  text-transform: uppercase;
  margin-left: 0.2rem;
  font-size: ${theme.fontSizes.xs};
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
`;
