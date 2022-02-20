import styled from "styled-components";

const colors = {
  default: (props) => props.theme.colors.violet,
  white: (props) => props.theme.colors.white,
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

// TODO: Download Bebas Neue Font
export const Left = styled.div`
  flex: 1;
  background-color: ${colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 3rem;
`;

export const Powered = styled.div`
  p {
    font-family: ${(props) => props.theme.fonts.avenirRoman};
    margin: 0;
  }

  h1 {
    font-family: ${(props) => props.theme.fonts.bebasNeue};
    margin: 0;
  }
`;

export const Right = styled.div`
  flex: 1;
  background-color: ${colors.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const LoginContainer = styled.div`
  background-color: ${colors.white};
  height: 24rem;
  width: 23rem;
  border-radius: 15px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

// TODO: Download Bebas Neue Font
export const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  text-transform: uppercase;
  color: ${colors.default};
  margin-top: 0;
`;
