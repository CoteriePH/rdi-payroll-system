import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { 
  ModalStyle, 
  OverlayStyle,
  Wrapper,
  UpperCol, 
  CompTitle,
  PaginationNum,
  CrossIcon,
  SndCol,
  SndWrapper,
  BtnWrapper,
  CompName,
  BigText,
  TrdCol,
  Details,
  BasicPay,
  DetailOne,
  DetailTwo,
  Name,
  EmpNum,
  Date,
  Position,
  BasicMoney,
  BasicDate,  
  SubDetail,
  DataInfo,
  BasicCaption

} from "./styles";
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
          <Wrapper>
            <UpperCol>
              <CompTitle>Payslip</CompTitle>
              <PaginationNum>1/1</PaginationNum>
              <CrossIcon>
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
            </UpperCol>
            <SndCol>
              <SndWrapper>
                <CompName>COMPANY NAME</CompName>
                <BigText>EMPLOYEE'S PAYSLIP</BigText>              
              </SndWrapper>              
              <BtnWrapper>
                <Button                   
                  minW = "6em">EXPORT</Button>
                <Button
                  minW = "6em">PRINT PAYSLIP</Button>
              </BtnWrapper>
            </SndCol>
            <br />
            <TrdCol>
              <Details>
                <DetailOne>
                  <SubDetail>                    
                    <div>NAME:</div>                     
                    <div>EMPLOYEE NO. :</div>                                         
                  </SubDetail>

                  <DataInfo>                    
                    <Name>JANE M. DOE</Name>
                    <EmpNum>0000-00021</EmpNum>
                  </DataInfo>
                </DetailOne>

                <DetailTwo>
                  <SubDetail>
                    <div>DATE PROCESSED: </div>
                    <div>POSITION:</div>                                        
                  </SubDetail>

                  <DataInfo>                    
                    <Date>Aug 21, 2021</Date>
                    <Position>Encoder</Position>
                  </DataInfo>                         
                </DetailTwo>

              </Details>

              <BasicPay>                
                  <BasicCaption>
                    Basic Pay:<BasicMoney>P537.00</BasicMoney>
                  </BasicCaption>                                
                  <BasicDate>AUG-01-2021 TO AUG-07-2021</BasicDate>                                               
              </BasicPay>
            </TrdCol>
          </Wrapper>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default Payslip;
