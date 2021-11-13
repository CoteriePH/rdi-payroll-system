import {} from "./styles";
import { ModalStyle, OverlayStyle, Header } from "../modalGlobalStyles";
import { HeaderText } from "@/styles";
import ReactModal from "react-modal";
import { FormProvider, useForm } from "react-hook-form";

const RecordDeduction = ({ isOpen, onClose }) => {
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
      contentLabel="Record Deduction"
      onRequestClose={onClose}
    >
      <Header>
        <HeaderText>Record Employee Deduction</HeaderText>
      </Header>
      <FormProvider {...methods}>{/* dito form */}</FormProvider>
    </ReactModal>
  );
};

export default RecordDeduction;
