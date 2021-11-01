import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.button`
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.color === 'secondary' ? theme.colors.violet : theme.colors.white)};
  background-color: ${(props) =>
    props.color === 'secondary'
      ? theme.colors.white
      : props.color === 'red'
      ? theme.colors.red
      : props.color === 'green'
      ? theme.colors.green
      : theme.colors.violet};
  border: ${(props) =>
    props.color === 'secondary'
      ? `2px solid ${theme.colors.violet}`
      : props.outline
      ? `1px solid ${theme.colors.gray}`
      : 'none'};
  outline: none;
  min-width: 15rem;
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  text-transform: uppercase;
  font-family: ${theme.fonts.avenirRoman};
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background: #440099;
    transition: 0.1s ease-in-out;
  }
`;
