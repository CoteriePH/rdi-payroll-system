import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  min-width: 15rem;
`;

export const Container = styled.div`
  background-color: ${(props) =>
    props.bg ? theme.colors[props.bg] : theme.colors.white};
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

export const Label = styled.div`
  user-select: none;
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Options = styled.div`
  position: absolute;
  width: inherit;

  background: ${theme.colors.white};
  max-height: 12rem;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  z-index: 10;
`;

export const List = styled.li`
  list-style: none;
  margin: 0.5rem 0;
  padding: 1rem;
  user-select: none;
  font-family: ${(props) => props.theme.fonts.avenirRoman};

  &:hover {
    background: ${theme.colors.lightViolet};
  }
`;
