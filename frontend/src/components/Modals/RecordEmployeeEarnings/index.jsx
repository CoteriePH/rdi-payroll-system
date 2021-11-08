import React from "react";
import ReactModal from "react-modal";
import { Header, ModalStyle, OverlayStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { HeaderText } from "@/styles";
ReactModal.setAppElement("#root");

const RecordEmployeeEarnings = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
    onClose();
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
      contentLabel="Record Employee Earnings"
      onRequestClose={onClose}
    >
      {/* HEADER */}
      <Header>
        <HeaderText>RECORD EMPLOYEE EARNINGS</HeaderText>
        <div></div>
      </Header>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ITO YUNG BODY, DITO KA MAG CODE */}

          {/* END OF BODY */}
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default RecordEmployeeEarnings;
