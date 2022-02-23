import { theme } from "@/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${theme.colors.default};
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScannerBox = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 1em;
  width: 30em;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: Download Bebas Neue Font
export const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  text-transform: uppercase;
  color: ${theme.colors.default};
  margin-top: 0;
`;
