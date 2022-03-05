import { Flex, HeaderText } from "@/styles";
import ReactModal from "react-modal";
import Button from "@/components/Button";
import InputField from "@/components/Input";
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
  EmpPos,
  Label,
  Inputs,
  OtherInfo,
  BreakButtons
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

            <OtherInfo>
                <Label>
                  <div>Date:</div>
                  <div>
                    <input type="checkbox"></input>
                    Withholding Tax:
                  </div>                  
                  <div>
                    <input type="checkbox"></input>
                    Others:
                  </div>
                </Label>

                <Inputs>
                  <div>
                    <input type="date" />                    
                  </div>
                  <div>
                    <input type="text" />                    
                  </div>
                  <div>
                    <input type="text" />                    
                  </div>
                  <div>
                    <input type="text" />                    
                  </div>
                </Inputs>

            </OtherInfo>
            <BreakButtons>
              <Button
              bg="green">
                ADD RECORD
              </Button>
              <Button
              bg="red">
                CLEAR
              </Button>
            </BreakButtons>
          </Right>
        </Wrapper>
    </ReactModal>
  );
};

export default RecordModal;
