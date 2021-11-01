import styled from 'styled-components';
import { theme } from 'theme';

const color = {
  default: (props) => props.theme.colors.violet,
  secondary: (props) => props.theme.colors.white
};
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Container = styled.div`
  background-color: ${color.secondary};
  border: 1.5px solid ${(props) => (props.bg ? props.bg : 'silver')};
  width: 100%;
  overflow: hidden;
  height: 3rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  line-height: 1;
  padding: 0.5rem 0.3rem;
  font-size: ${theme.fontSizes.sm};
  width: inherit;
  height: 100%;
  gap: 1rem;

  .radio__control {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.13rem solid ${color.default};
    transform: translateY(-0.05em);
    display: grid;
    place-items: center;
  }

  .radio__input {
    display: flex;
  }

  ${Input} + .radio__control::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    box-shadow: inset 0.5rem 0.5rem ${color.default};
    border-radius: 50%;
    transition: 0.3s transform ease-in-out;
    transform: scale(0);
  }

  ${Input}:checked + .radio__control::before {
    transform: scale(1);
  }
`;