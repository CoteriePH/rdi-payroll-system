import styled from "styled-components";
import { theme } from "@/theme";
// REUSABLE GLOBAL STYLES ONLY
export const HeaderText = styled.p`
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.xl2};
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.violet};
  font-weight: bold;
  font-family: ${theme.fonts.avenirBlack};
  margin: ${(props) => (props.m ? props.m : "1rem 0rem")};
`;
export const ErrorText = styled.small`
  color: ${theme.colors.red};
  font-size: ${theme.fontSizes.xs};
`;

export const Text = styled.small`
  color: ${(props) => (props.color ? theme.colors[props.color] : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  font-family: ${(props) =>
    props.fontFamily ? theme.fonts[props.fontFamily] : theme.fonts.avenirRoman};
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.md};
`;

export const VStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const HStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;
`;

export const SectionHeader = styled.header`
  margin-bottom: 1rem;
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
