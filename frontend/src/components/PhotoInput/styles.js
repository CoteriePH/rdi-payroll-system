import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  height: 10rem;
  width: 10rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.lightViolet};
`;
export const Input = styled.input`
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: green;
`;

export const Box = styled.div`
  border: 1px dashed ${theme.colors.lightViolet};
  border-radius: 5px;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Label = styled.small`
  font-size: 0.6em;
  text-transform: uppercase;
  position: absolute;
  top: 48%;
  left: 30%;
  color: ${theme.colors.lightViolet};
`;
