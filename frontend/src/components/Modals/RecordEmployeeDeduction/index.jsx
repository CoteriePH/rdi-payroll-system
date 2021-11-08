import React from "react";
import ReactModal from "react-modal";
import { Form, Header, ModalStyle, OverlayStyle } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { HeaderText } from "@/styles";
ReactModal.setAppElement("#root");

const RecordEmployeeDeduction = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(),
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
    onClose();
  };
  useEffect(() => {}, []);

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
      contentLabel="Record Employee Deduction"
      onRequestClose={onClose}
    >
      {/* HEADER */}
      <Header>
        <HeaderText>RECORD EMPLOYEE DEDUCTION</HeaderText>
        <div></div>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* ITO YUNG BODY, DITO KA MAG CODE */}

          {/* END OF BODY */}
        </Form>
      </FormProvider>
    </ReactModal>
  );
};

export default RecordEmployeeDeduction;
