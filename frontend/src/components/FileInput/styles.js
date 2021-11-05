import styled from 'styled-components';

const Color = {
  violet: (props) => props.theme.colors.violet
};

export const Wrapper = styled.div`
  display: table-cell;
  padding-right: 2rem;
`;
export const SubWrapper = styled.div`
  display: flex;
  background-color: #f6f6f6;
  border-radius: 0.5rem;
  position: relative;
  margin-top: 0.3rem;
  overflow: hidden;
`;
export const Input = styled.input`
  opacity: 0;
  padding: 0.5em 1em;
`;
export const InpButton = styled.div`
  width: 1.5rem;
  color: #fff;
  padding: 0.2em 0.5em;
  background-color: ${Color.violet};
  position: absolute;
  right: 0;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
