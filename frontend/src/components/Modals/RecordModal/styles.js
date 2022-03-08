import styled from "styled-components";
import { theme } from "@/theme";


export const ModalStyle = styled.div`
  z-index: 1010;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 65rem;
  height: 38rem;
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
  padding: 1rem 2rem 1rem 2rem;
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
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
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

// Modal Content Styling
export const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  overflow-y: auto;
`;

export const Left = styled.div`
  
  padding-left: 1em;
  flex-basis: 50%;
  overflow-y: scroll;  
`;

export const Right = styled.div`
  border: 1px solid ${theme.colors.darkViolet};
  border-radius: 1rem;
  padding: 2em 2.1em;
  flex-basis: 50%;
`;

export const PicInfoCont = styled.div`
  display: flex;
  
`;

export const Picture = styled.div`
  flex-basis: 30%;
  width: 100%;
  height: 150px; // Di ko sure kung anong sizing ng picture  
  box-shadow: 0pt 0pt 0pt 1pt rgb(180,180,180, 0.8);
  border-radius: .5em;
  
`;

export const Info = styled.div`
  flex-basis: 69%;
  width: 100%;
  margin-top: auto;
  padding-left: .5em;
`;

export const EmpNumber = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  color: ${theme.colors.darkViolet};

`;

export const EmpName = styled.h2`
  margin: .3em 0em;
  text-transform: uppercase;
`;

export const EmpPos = styled.div`
  font-family: ${theme.fonts.avenirBook};
  text-transform: capitalize;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding-top: 2em;
  padding-left: 2em;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding-top: 2em;
  padding-right: 2em;
  margin-left: auto;
  
`;

export const OtherInfo = styled.div`
  display: flex;
`;

export const BreakButtons = styled.div`
  display: flex;
  margin-top: 4em;
  gap: 1em;
`;
export const TableCont = styled.div`

  
`;

export const Table = styled.table`
  width: 100%;  
`;

export const Tr = styled.tr`
  
`;

export const Th = styled.th`
  background-color: #9F53FF;
  color: ${theme.colors.white};
  width: 10em;
  padding: .8em;
  border-top-left-radius: .5em;
  border-bottom-left-radius: .5em;
  text-align:center;
  text-transform: uppercase;
  
`;
export const Th2 = styled.th`
  background-color: #9F53FF;
  color: ${theme.colors.white};
  width: 10em;
  padding: .8em;
  text-align:center;
  text-transform: uppercase;  

`;

export const Th3 = styled.th`
  background-color: #9F53FF;
  color: ${theme.colors.white};
  width: 10em;
  padding: .8em;
  border-top-right-radius: .5em;
  border-bottom-right-radius: .5em;
  text-align:center;
  text-transform: uppercase;
  
`;

export const Td = styled.td`

`;

