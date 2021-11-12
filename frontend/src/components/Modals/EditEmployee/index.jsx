import Checkbox from "@/components/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import {
  Wrapper,
  ModalStyle,
  OverlayStyle,
  CrossArea,
  CrossIcon,
  InfoHeader,
  FstList,
  FstHeader,
  FlxChkBx,
  FstCol,
  Li,
  SndCol,
  SeFstCol,
  SeSndCol,
  SndList,
  SndHeader,
  ButtonNext
} from "./styles";
import Button from "@/components/Button";

ReactModal.setAppElement("#root");

const EditEmployee = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(addEmployee(data));
    // reset({});
    // onClose();
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
      contentLabel="Edit Employee Modal"
      onRequestClose={onClose}
    >
      {/* Body */}
      <Wrapper>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CrossArea>
              <CrossIcon onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M52 2H12C6.476 2 2 6.477 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10zm-2.002 40.799L42.799 50L31.998 39.199L21.2 50l-7.201-7.201L24.799 32l-10.8-10.801L21.2 14l10.798 10.799L42.799 14l7.199 7.199L39.199 32l10.799 10.799z"
                    fill="currentColor"
                  />
                </svg>
              </CrossIcon>
            </CrossArea>
            <InfoHeader>
              What do you want to edit in John Doe's Information
            </InfoHeader>

            <FstList>
              <FstHeader>PERSONAL INFORMATION</FstHeader>
              <FlxChkBx>
                <FstCol>
                  <Li>
                    <Checkbox
                      border
                      name="employee_number"
                      label="Employee Number"
                    />
                  </Li>
                  <Li>
                    <Checkbox border name="last_name" label="Last Name" />
                  </Li>
                  <Li>
                    <Checkbox border name="first_name" label="First Name" />
                  </Li>
                  <Li>
                    <Checkbox border name="middle_name" label="Middle Name" />
                  </Li>
                  <Li>
                    <Checkbox border name="sex" label="Sex" />
                  </Li>
                </FstCol>
                <SndCol>
                  <Li>
                    <Checkbox border name="birth_date" label="Birthdate" />
                  </Li>
                  <Li>
                    <Checkbox border name="address" label="Address" />
                  </Li>
                  <Li>
                    <Checkbox border name="email" label="Email Address" />
                  </Li>
                  <Li>
                    <Checkbox border name="contact_no" label="Contact Number" />
                  </Li>
                </SndCol>
              </FlxChkBx>
            </FstList>
            <SndList>
            <SndHeader>Employement Status</SndHeader>
              <FlxChkBx>
                <SeFstCol>
                  <Li>
                    <Checkbox
                      border
                      name="employee_number"
                      label="Employment Type"
                    />
                  </Li>
                  <Li>
                    <Checkbox border name="last_name" label="Department" />
                  </Li>
                  <Li>
                    <Checkbox border name="first_name" label="Position" />
                  </Li>                  
                </SeFstCol>
                <SeSndCol>
                  <Li>
                    <Checkbox border name="birth_date" label="Basic Pay" />
                  </Li>
                  <Li>
                    <Checkbox border name="address" label="Date Hired" />
                  </Li>
                  <Li>
                    <Checkbox border name="email" label="Time Shaft" />
                  </Li>                  
                </SeSndCol>
              </FlxChkBx>
            </SndList>
          </form>
        </FormProvider>
        <ButtonNext>
          <Button
            w="5em"            
          >NEXT</Button>          
        </ButtonNext>
      </Wrapper>
    </ReactModal>
  );
};

export default EditEmployee;
