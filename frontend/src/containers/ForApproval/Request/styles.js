import styled from "styled-components";
import { theme } from "@/theme";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const HeaderLink = styled.h2`
  transform: rotate(-90deg);
  text-transform: uppercase;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding-top: 6em;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
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
