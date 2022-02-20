import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 21rem;
  height: 8rem;
  overflow: hidden;
  box-shadow: 0px 3px 10px 1px rgba(46, 54, 68, 0.1);
  border-radius: 0.5rem;
  padding: 1em;
  position: relative;
  margin: 0.8em 0.3em; /* delete if necessary */
`;

export const ToAndIcon = styled.div`
  display: flex;
`;

export const To = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  font-size: ${theme.fontSizes.xl};
  margin-right: 0.5rem;
`;

export const Name = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  font-size: ${theme.fontSizes.xl};
  flex-basis: 75%;
`;

export const Icon = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  margin-left: auto;
`;

export const WarningCount = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  font-size: ${theme.fontSizes.md};
`;

export const Description = styled.div`
  font-size: ${theme.fontSizes.sm};
  margin-top: 0.2rem;
  width: 100%;
  height: 2.3rem;
  overflow: hidden;
`;

export const Date = styled.div`
  color: ${theme.colors.default};
  position: absolute;
  bottom: 0;
  margin-bottom: 0.8em;
`;

export const Warning = styled.svg`
  color: #ffc837;
  display: ${(props) => (props.Warning ? props.Warning : "none")};
`;

export const Danger = styled.svg`
  color: #fe0e0e;
  display: ${(props) => (props.Danger ? props.Danger : "none")};
`;

export const BlueBell = styled.svg`
  color: #0374d8;
  display: ${(props) => (props.BlueBell ? props.BlueBell : "none")};
`;

export const BubbleMessage = styled.svg`
  color: #5ac0df;
  display: ${(props) => (props.BubbleMessage ? props.BubbleMessage : "none")};
`;
