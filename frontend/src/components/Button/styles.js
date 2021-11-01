import styled from 'styled-components';
import { theme } from 'theme';

// TODO - variant or colorScheme

export const Container = styled.button`
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.color ? theme.colors[props.color] : theme.colors.white)};
  background-color: ${(props) => (props.bg ? theme.colors[props.bg] : theme.colors.default)};
  border: ${(props) =>
    props.color === 'secondary' ? `2px solid ${props.theme.colors.violet}` : 'none'};
  outline: none;
  min-width: 15rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: #440099;
    transition: 0.1s ease-in-out;
  }
`;
