import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding-left: 2.5em;
  padding-top: 2em;
  margin-right: 3em;
`;

export const HeaderLink = styled.h2`
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: scale(-1, -1);
  color: ${theme.colors.default};
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  overflow-y: scroll;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 35%;
  flex-wrap: wrap;
  padding: 2em 0em;
  gap: 1.5em;
  padding: 1em;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.gray};
  border-radius: 1em;
  padding: 2em;
  width: 80%;
  flex-basis: 0;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`;

export const MiddleTitle = styled.h4`
  color: ${theme.colors.darkGray};
  span {
    color: ${theme.colors.default};
  }
  font-size: ${theme.fontSizes.xl};
`;

export const Tools = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid silver;
  border-radius: 0.5em;
  padding: 0.6em 1em;
  width: 100%;
  justify-content: space-between;
`;

export const ItemNumber = styled.p`
  color: ${theme.colors.violet};
  font-size: ${theme.fontSizes.lg};
`;
export const ItemTitle = styled.h3`
  margin: 0;
  color: ${theme.colors.darkViolet};
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
`;
export const ItemPrice = styled.h3`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.darkGray};

  margin: 0;
`;

export const ItemCheck = styled.div``;
