import styled from 'styled-components';
import { theme } from 'theme';

export const TextLink = styled.a`
  color: ${(props) => props.theme.colors.lightViolet};
  cursor: pointer;
  text-decoration: underline;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const Wrapper = styled.div`
  height: inherit;
`;

export const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : null)};
  justify-content: ${(props) => (props.justify ? props.justify : null)};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  background-color: ${(props) => (props.bg ? theme.colors[props.bg] : null)};
  transition: 0.3s ease-in-out;
  overflow: ${(props) => (props.overflow ? props.overflow : null)};
  & .child {
    transition-delay: 1s;
  }
`;

export const TableContainer = styled.div`
  position: relative;
  width: inherit;
  padding: 2em;
`;
