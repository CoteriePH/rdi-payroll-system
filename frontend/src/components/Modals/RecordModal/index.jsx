import { Flex, HeaderText } from "@/styles";
import ReactModal from "react-modal";
import 
{ Header, 
  ModalStyle, 
  OverlayStyle,
  LeftContainer,
  RightContainer,  
  Wrapper,
  Left,
  Right,
  PicInfoCont,
  Picture,
  Info,
  EmpNumber,
  EmpName,
  EmpPos
   } from "./styles";
ReactModal.setAppElement("#__next");

const RecordModal = ({ isOpen, onClose, value = "", name }) => {
  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Add Employee Modal"
      onRequestClose={onClose}
    >
      {/* HEADER */}
      <Header>
        <HeaderText>{name}</HeaderText>
      </Header>
        <Wrapper>
          <Left>           
          
          </Left>
          <Right>
            <PicInfoCont>
              <Picture>
                
              </Picture>
              <Info>
                <EmpNumber>
                  0000-0021
                </EmpNumber>
                <EmpName>
                  john joe
                </EmpName>
                <EmpPos>
                  product manager
                </EmpPos>
              </Info>
            </PicInfoCont>
            
          </Right>
        </Wrapper>
    </ReactModal>
  );
};

export default RecordModal;
