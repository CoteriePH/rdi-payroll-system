import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: ${(props) => (props.primary ? theme.colors.default : theme.colors.white)};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
