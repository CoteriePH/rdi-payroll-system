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
  BreakButtons,
  TableCont,
  Table,
  Tr,
  Tr2,
  Th,
  Th2,
  Th3,
  Td
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
            <TableCont>
              <Table>
                <Tr>
                  <Th>EMPLOYEE NO.</Th>
                  <Th2>NAME</Th2>
                  <Th3>POSITION</Th3>
                </Tr>

                <Tr2> {/* Tr2 para sa mga Td   */}
                  <Td>001-021</Td>
                  <Td>John Z. Doe</Td>
                  <Td>Product Manager</Td>
                </Tr2>                
                <Tr2> {/* Tr2 para sa mga Td   */}
                  <Td>001-021</Td>
                  <Td>John Z. Doe</Td>
                  <Td>Product Manager</Td>
                </Tr2>                
                <Tr2> {/* Tr2 para sa mga Td   */}
                  <Td>001-021</Td>
                  <Td>John Z. Doe</Td>
                  <Td>Product Manager</Td>
                </Tr2>                
                <Tr2> {/* Tr2 para sa mga Td   */}
                  <Td>001-021</Td>
                  <Td>John Z. Doe</Td>
                  <Td>Product Manager</Td>
                </Tr2>                
              </Table>
            </TableCont>  
            
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
              bg="green"
              bgHover="green">
                ADD RECORD
              </Button>
              <Button
              bg="red"
              bgHover="red">
                CLEAR
              </Button>
            </BreakButtons>
          </Right>
        </Wrapper>
    </ReactModal>
  );
};

export default RecordModal;
