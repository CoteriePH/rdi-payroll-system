import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  width: 5.1em;
  height: auto;
  margin: 1em;
  cursor: pointer;
`;

export const Folder = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  color: ${theme.colors.default};
`;

export const Name = styled.div`
  padding-left: 0.5em;
  font-family: ${theme.fonts.avenirRoman};
`;
