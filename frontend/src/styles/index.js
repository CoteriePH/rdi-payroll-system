import styled from "styled-components";
import { theme } from "@/theme";
// REUSABLE GLOBAL STYLES ONLY
export const HeaderText = styled.p`
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.xl2};
  color: ${theme.colors.violet};
  font-weight: bold;
  font-family: ${theme.fonts.avenirBlack};
`;
export const ErrorText = styled.small`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xs};
`;

export const Text = styled.small`
  font-family: ${(props) => props.theme.fontSizes.avenirRoman};
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.md};
`;

export const VStack = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction:column
  gap: 0.5rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : null)};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) => (props.bg ? theme.colors[props.bg] : null)};
  gap: ${(props) => (props.gap ? `${props.gap}rem` : null)};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : null)};
`;
