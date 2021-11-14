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
  background-color: #f7f6f7;
  width: 70rem;
  height: 37rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-height: 60rem;
  overflow: hidden;
  outline: none;
`;

export const Wrapper = styled.div`

`;

export const UpperCol = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  box-shadow: 0px 0px 10px rgba(46, 54, 68, 0.1);
  
`;

export const CompTitle = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  color: ${theme.colors.violet};
  font-size: 1.21rem;
`;

export const PaginationNum = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  font-size: .85rem;
`;

export const CrossIcon = styled.div`
  display: block;
  width: 1.5em;
  height: 1.5em;
  color: ${theme.colors.darkViolet};
  cursor: pointer;
`;

export const SndCol = styled.div`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
`;

export const SndWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BtnWrapper = styled.div`
  display: flex;
  column-gap: .8em;
  
`;

export const CompName = styled.div`
  font-family: ${theme.fonts.avenirRoman};
  text-transform: uppercase;
  
`;

export const BigText = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  font-size: 1.8rem;
  text-transform: uppercase;
`;

export const TrdCol = styled.div`
  padding: 0em 2em;
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div`
  display: flex;
  column-gap: 2em;
  
`;

export const DetailOne = styled.div`
  display: flex;  
`;

export const DetailTwo = styled.div`
  display: flex;    
`;


export const SubDetail = styled.div`
  font-family: ${theme.fonts.avenirBook};
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: .5em;  
`;


export const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-transform: uppercase;
`;

export const EmpNum = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-transform: uppercase;
`;

export const Date = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-transform: uppercase;
`;

export const Position = styled.div`
  font-family: ${theme.fonts.avenirBlack};
  text-transform: uppercase;
`;

export const BasicPay= styled.div`
  
`;

export const BasicCaption= styled.div`
  text-align: right;
  text-transform: uppercase;
`;

export const BasicMoney = styled.span`
  padding-left: .5em;
  text-transform: uppercase;
  font-family: ${theme.fonts.avenirBlack};
  color: ${theme.colors.default};
`;

export const BasicDate = styled.div`
  text-transform: uppercase;
  font-family: ${theme.fonts.avenirBlack};
  color: ${theme.colors.default}
  
`;

