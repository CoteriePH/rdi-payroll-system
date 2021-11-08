import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  height: 2rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${theme.colors.gray};
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  line-height: 1;
  font-size: ${theme.fontSizes.xs};
  width: inherit;
  height: 100%;
  gap: 0.5em;

  .radio__control {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    border: 0.13rem solid ${theme.colors.default};
    transform: translateY(-0.05em);
    display: grid;
    place-items: center;
  }

  .radio__input {
    display: flex;
  }

  ${Input} + .radio__control::before {
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    box-shadow: inset 0.5rem 0.5rem ${theme.colors.default};
    border-radius: 50%;
    transition: 0.3s transform ease-in-out;
    transform: scale(0);
  }

  ${Input}:checked + .radio__control::before {
    transform: scale(1);
  }
`;
