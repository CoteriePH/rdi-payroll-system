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
  width: 26em;
  height: 26em;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${theme.colors.darkGray};
    margin-bottom: 0.5em;
  }
`;
export const Section = styled.section`
  width: 290px;
`;
// TODO: Download Bebas Neue Font
export const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  text-transform: uppercase;
  color: ${theme.colors.default};
  margin-top: 0;
`;
