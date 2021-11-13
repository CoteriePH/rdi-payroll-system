import {} from "./styles";
import { ModalStyle, OverlayStyle, Header } from "../modalGlobalStyles";
import { HeaderText } from "@/styles";
import ReactModal from "react-modal";
import { FormProvider, useForm } from "react-hook-form";

const RecordEarnings = ({ isOpen, onClose }) => {
  const methods = useForm();
  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, Children) => (
        <ModalStyle {...props}>{Children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Record Earnings"
      onRequestClose={onClose}
    >
      <Header>
        <HeaderText>Record Employee Earnings</HeaderText>
      </Header>
      <FormProvider {...methods}></FormProvider>
    </ReactModal>
  );
};

export default RecordEarnings;
