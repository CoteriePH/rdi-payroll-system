import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { ModalStyle, OverlayStyle } from "./styles";
import Button from "@/components/Button";

ReactModal.setAppElement("#root");

const Payslip = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(),
  });
  const { handleSubmit, reset } = methods;
  const onSubmit = (data) => {
    console.log(data);
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
      contentLabel="Payslip Modal"
      onRequestClose={onClose}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>Payslip</div>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default Payslip;
