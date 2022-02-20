import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  height: inherit;
`;
export const Navigation = styled.div`
  box-shadow: 0pt 10pt 0pt -8pt ${theme.colors.default};
  padding: 0.5em 3em 0.8em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CompanyIcon = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  background-color: #804dc5;
  padding: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  text-align: center;
  margin: 0;
  color: #fff;
  line-height: 15px;
`;

export const Chevron = styled.div`
  width: 2em;
  height: 2em;
  color: #804dc5;
`;

export const Path = styled.div`
  line-height: 2.1em;
  color: #804dc5;
  font-family: ${theme.fonts.avenirRoman};
`;

export const FilePath = styled.div`
  display: flex;
`;

export const ListTable = styled.div`
  position: relative;
  padding: 0.5em 1em;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
`;
