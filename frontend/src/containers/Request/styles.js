import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  width: 70rem;
  height: 15rem;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
  outline: none;
`;

export const GhostArea = styled.div`
  border: solid black 1px;
  padding: 1rem 1rem 4rem 1rem;
  border-radius: 0.5rem;
  /* border: solid black 1px;
  border-radius: 0.5rem;
  resize: none;
  width: 70rem;
  height: 15rem;
  font-family: ${(props) => props.theme.fonts.avenirRoman};
  padding: 1rem 1rem 3rem 1rem; */
`;

export const FlexDrop = styled.div`
  display: flex;
  padding-right: 2rem;
  margin-bottom: 1.5rem;
`;

export const WordTools = styled.div`
  display: flex;
  z-index: 1;
  width: 68rem;
  height: 1.5rem;
  transform: translateY(-3.5rem) translateX(0.7rem);
  border: solid black 1px;
  border-radius: 0.5rem;
  padding: 0.5em 1.3rem;
`;

export const SetOne = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0em 1em;
`;

export const Bold = styled.div`
  width: 1.5em;
  height: 1em;
  padding: 0em 0.5em;
`;

export const Italic = styled.div`
  width: 1.5em;
  height: 1em;
  padding: 0em 0.5em;
`;

export const Underline = styled.div`
  width: 1.5em;
  height: 1em;
  padding: 0em 0.5em;
`;

export const SetTwo = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0em 1em;
`;

export const ColorText = styled.div`
  width: 1.5em;
  height: 1em;
  padding: 0em 0.5em;
`;

export const Tt = styled.div`
  width: 1.5em;
  height: 0em;
  padding: 0em 0.5em;
`;

export const SetThree = styled.div`
  display: flex;
  background-color: #fff;
  margin: 0em 1em;
`;

export const Left = styled.div`
  width: 1.5em;
  height: 0em;
  padding: 0em 0.5em;
`;

export const Center = styled.div`
  width: 1.5em;
  height: 0em;
  padding: 0em 0.5em;
`;

export const Right = styled.div`
  width: 1.5em;
  height: 0em;
  padding: 0em 0.5em;
`;

export const Tools = styled.div`
  flex-grow: 4;
  display: flex;
`;

export const SetEnd = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export const AttachFile = styled.div`
  opacity: 0.8;
  font-size: 0.9rem;
  padding: 0em 1em;
`;

export const Clip = styled.div`
  width: 1.5em;
  height: 0em;
  padding: 0em 1em;
`;
// Below has no effect
export const FlexButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FlexMore = styled.div`
  display: flex;
  justify-content: flex-end;
`;
