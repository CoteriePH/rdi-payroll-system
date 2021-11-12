import styled from "styled-components";
import { theme } from "@/theme";

export const Box = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: ${theme.colors.white};
  border-radius: 3px;
  border: ${(props) =>
    props.border ? `1px solid ${theme.colors.darkViolet}` : null};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? null : theme.colors.violet};
  }
`;

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  svg {
    display: none;
    position: absolute;
    top: 1px;
    left: 0px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${Box} {
      background-color: ${theme.colors.violet};
    }

    &:checked ~ ${Box} + svg {
      display: block;
      path {
        fill: ${theme.colors.white};
      }
    }
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  gap: 2rem;
  span {
    user-select: none;
  }
  color: ${(props) => props.disabled && "gray"};
`;
