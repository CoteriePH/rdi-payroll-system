import { theme } from "@/theme";
import styled from "styled-components";

export const ViewContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 4rem;
`;

export const NavPane = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid ${theme.colors.violet};
`;

export const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Container = styled.div`
  height: inherit;
  padding: 2rem 0;
`;

export const Wrapper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: row;
`;
