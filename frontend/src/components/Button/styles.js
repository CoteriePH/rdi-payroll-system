import styled from 'styled-components';
import { theme } from 'theme';

// TODO - variant or colorScheme

export const Container = styled.button`
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.color ? theme.colors[props.color] : theme.colors.white)};
  background-color: ${(props) => (props.bg ? theme.colors[props.bg] : theme.colors.default)};
  border: ${(props) =>
    props.border && props.borderColor
      ? `${props.border ? props.border : '2px'} solid ${theme.colors[props.borderColor]}`
      : 'none'};
  outline: none;
  min-width: ${(props) => (props.minW ? props.minW : '13rem')};
  width: ${(props) => (props.w ? props.w : '100%')};
  height: ${(props) => (props.h ? props.h : '2.5rem')};
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : null)};
  font-family: ${(props) =>
    props.fontFamily ? theme.fonts[props.fontFamily] : theme.fonts.avenirRoman};
  display: flex;
  align-items: center;
  float: left;
  justify-content: center;
  &:active {
    background-color: #440099;
    color: ${theme.colors.white};
    transition: 0.1s ease-in-out;
  }
  &:hover {
    background-color: #440099;
    color: ${theme.colors.white};
    transition: 0.3s ease-in-out;
  }
`;
