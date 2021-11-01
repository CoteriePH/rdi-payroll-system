import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${theme.colors.gray};
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 0.75rem;
`;

export const Tab = styled.h3`
  color: ${theme.colors.violet};
`;

export const SettingsButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: -20px;
  border: none;
  background-color: ${theme.colors.gray};
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 1rem;
      width: 1rem;
    }
  }
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  button {
    margin: 1rem 0;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const Text = styled.p`
  color: ${theme.colors.violet};
  font-family: ${(props) => props.theme.fonts.avenirRoman};
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, minmax(0, 1fr));
  gap: 0.5rem;
  margin-top: 1rem;
`;
