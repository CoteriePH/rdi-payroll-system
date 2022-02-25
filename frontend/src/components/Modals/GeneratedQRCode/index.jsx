import { Flex, HeaderText } from "@/styles";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { Header, ModalStyle, OverlayStyle } from "./styles";
import QRCode from "qrcode.react";
import Button from "@/components/Button";
ReactModal.setAppElement("#__next");

const GeneratedQRCode = ({ isOpen, onClose, value = "", name }) => {
  const downloadQR = () => {
    const canvas = document.getElementById(value);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${name}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

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
        <div>
          {/* TODO - CLOSE BUTTON */}
          {/* <Button onClick={onClose}>Close Modal</Button> */}
        </div>
      </Header>
      <Flex p="2em 1em" align="center" gap="3" direction="column">
        <QRCode id={value} size={250} value={value} />
        <Flex>
          <Button onClick={downloadQR}>Download QR Code</Button>
        </Flex>
      </Flex>
    </ReactModal>
  );
};

export default GeneratedQRCode;
