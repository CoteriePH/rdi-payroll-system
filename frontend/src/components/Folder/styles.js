import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.isGrid ? 'column' : 'row'};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  flex: 0 0 15%;

  ${props => props.isGrid && `svg{ height: 8rem; width: 10rem; }`}
`;

export const Name = styled.div``;

export const Department = styled.div``;
