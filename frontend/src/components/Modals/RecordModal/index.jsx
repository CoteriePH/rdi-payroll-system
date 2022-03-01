import { Flex, HeaderText } from "@/styles";
import ReactModal from "react-modal";
import { Header, ModalStyle, OverlayStyle } from "./styles";
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
      <Flex p="2em 1em" align="center" gap="3" direction="column">
        {/* BODY */}
        {/* Pwede mo baguhin tong Flex tsaka yung styles.js ikaw lang bahala */}
        <p>Hello</p>
      </Flex>
    </ReactModal>
  );
};

export default RecordModal;
