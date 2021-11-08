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
