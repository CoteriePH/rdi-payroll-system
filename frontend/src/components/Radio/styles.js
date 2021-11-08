import styled from "styled-components";
import { theme } from "@/theme";

export const Container = styled.div`
  background-color: ${theme.colors.secondary};
  width: 7rem;
  border-radius: 65px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5rem;
  line-height: 1;
  padding: 0.5rem 0.3rem;

  .radio__control {
    display: block;
    width: 1rem;
    height: 1rem;
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
    width: 0.5rem;
    height: 0.5rem;
    box-shadow: inset 0.5rem 0.5rem ${theme.colors.default};
    border-radius: 50%;
    transition: 0.3s transform ease-in-out;
    transform: scale(0);
  }

  ${Input}:checked + .radio__control::before {
    transform: scale(1);
  }
`;
