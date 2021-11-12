import styled from "styled-components";
import { theme } from "@/theme";

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

export const ModalStyle = styled.div`
  z-index: 1010;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //   background-color: ${theme.colors.darkViolet};
  background-color: #f7f6f7;
  width: 26rem;
  height: 34rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-height: 60rem;
  overflow: hidden;
  outline: none;
`;

export const Wrapper = styled.div``;
export const CrossArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em;
  
`;
export const CrossIcon = styled.span`
  display: block;
  width: 1.5em;
  height: 1.5em;
  color: ${theme.colors.darkViolet};
  cursor: pointer;
`;
export const InfoHeader = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  font-size: 1.3rem;
  text-align: center;
  padding: .5em 3em;
  padding-top: 0em;
  
`;
export const FstList = styled.div`
  background-color: ${theme.colors.white};
  padding: 0.5em;
  margin: 1em;
  margin-top: 0em;
  border-radius: 0.5em;
`;

export const FstHeader = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-align: center;
  color: ${theme.colors.violet};
`;

export const SndHeader = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-align: center;
  color: ${theme.colors.violet};
`;

export const FlxChkBx = styled.div`
  padding: 1em 0em;
  display: flex;
  column-gap: 1em;
  justify-content: center;
`;


export const Li = styled.li`
  list-style-type: none;
  padding: .5em;
`;

export const FstCol = styled.div`
  font-size: 0.705rem;
  font-family: ${theme.fonts.avenirBook};
  text-transform: uppercase;
  
`;

export const SndCol = styled.div`
  font-size: 0.705rem;
  font-family: ${theme.fonts.avenirBook};
  text-transform: uppercase;  
`;
export const SeFstCol = styled.div`
  font-size: 0.705rem;
  font-family: ${theme.fonts.avenirBook};
  text-transform: uppercase;
  
  flex-basis: 45%;
`;

export const SeSndCol = styled.div`
  font-size: 0.705rem;
  font-family: ${theme.fonts.avenirBook};
  text-transform: uppercase;  
  flex-basis: 38%;
  
`;

export const SndList = styled.div`
  background-color: ${theme.colors.white};
  padding: 0.5em;  
  margin: 1em;  
  border-radius: 0.5em;
`;

export const ButtonNext = styled.div `
  display: flex;
  justify-content: flex-end;
  padding: 0em 1em;
`;
