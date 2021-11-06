import styled from 'styled-components';
import { theme } from 'theme';

export const ModalStyle = styled.div`
  z-index: 1010;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 60rem;
  height: 40rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-height: 60rem;
  overflow: hidden;
  outline: none;
`;

export const OverlayStyle = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.16);
  padding: 0 2rem 0 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  max-height: 80%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-grow: 5/6;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${theme.colors.darkViolet};
  border-radius: 1rem;
  flex-direction: column;
  max-height: 100%;
  overflow-y: scroll;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1/6;
  max-height: 100%;
  padding: 1rem 0 0 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'column')};
  width: 100%;
  gap: 1rem;
`;

export const FilesContainer = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  gap: 1rem;
  // border-spacing: 20px 0;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
