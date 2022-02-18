import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
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
  StyledDate,
  Position,
  BasicMoney,
  BasicDate,
  SubDetail,
  DataInfo,
  BasicCaption,
  Hr,
  Hr1,
  FrthCol,
  BigCol,
  SmallCol,
  Attendance,
  Deductions,
  Pay,
  ADTitle,
  AttContent,
  DeducContent,
  BigUpper,
  BigLower,
  Approve,
  WasApprove,
  MarkCheck,
} from "./styles";
import Button from "@/components/Button";
import { useDispatch, useSelector } from "react-redux";
import Table from "@/components/Table";
import { findAllAttendance } from "@/features/attendance/attendanceSlice";
import dayjs from "dayjs";

ReactModal.setAppElement("#root");

const Payslip = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const methods = useForm({
    resolver: yupResolver(),
  });
  const { handleSubmit, reset } = methods;
  const { data, isFetching } = useSelector((state) => state.attendances);
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    // TODO - FIND ALL EMPLOYEE'S ATTENDANCE
    dispatch(findAllAttendance());
  }, [dispatch]);

  const attendance_columns = React.useMemo(
    () => [
      {
        Header: "DATE",
        accessor: "date",
        Cell: (props) => {
          return <div>{dayjs(props.value).format("YYYY-MM-DD")}</div>;
        },
      },

      {
        //TODO TIME CONVERTER HELPER
        Header: "TIME IN",
        accessor: "time_in",
        Cell: (props) => {
          {
            if (props.value) {
              const time = props.value?.split(":");
              return (
                <div>
                  {dayjs(new Date().setHours(time[0], time[1], time[2])).format(
                    "hh:mm:ss A"
                  )}
                </div>
              );
            } else {
              return <div>N/A</div>;
            }
          }
        },
      },
      {
        Header: "TIME OUT",
        accessor: "time_out",
        Cell: (props) => {
          if (props.value) {
            const time = props.value?.split(":");
            return (
              <div>
                {dayjs(new Date().setHours(time[0], time[1], time[2])).format(
                  "hh:mm:ss A"
                )}
              </div>
            );
          } else {
            return <div>N/A</div>;
          }
        },
      },
    ],
    []
  );

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
            </UpperCol>
            <SndCol>
              <SndWrapper>
                <CompName>COMPANY NAME</CompName>
                <BigText>EMPLOYEE'S PAYSLIP</BigText>
              </SndWrapper>
              <BtnWrapper>
                <Button minW="6em">EXPORT</Button>
                <Button minW="6em">PRINT PAYSLIP</Button>
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
                    <StyledDate>Aug 21, 2021</StyledDate>
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
            <Hr />

            <FrthCol>
              <BigCol>
                <BigUpper>
                  <Attendance>
                    <ADTitle>attendance</ADTitle>
                    <AttContent>
                      <Table columns={attendance_columns} data={data} />
                    </AttContent>
                  </Attendance>
                  <Deductions>
                    <ADTitle>deductions</ADTitle>
                    <DeducContent>{/* TABLE INSERT HERE? */}</DeducContent>
                  </Deductions>
                </BigUpper>
                <Hr1 />
                <BigLower>
                  <Approve>
                    <MarkCheck>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06a.733.733 0 0 1 1.047 0l3.052 3.093l5.4-6.425a.247.247 0 0 1 .02-.022z" />
                        </g>
                      </svg>
                    </MarkCheck>
                    <WasApprove>APPROVED BY HR</WasApprove>
                  </Approve>
                </BigLower>
              </BigCol>

              <SmallCol>
                <Pay>
                  Regular Pay??
                  {/* TABLE INSERT HERE? */}
                </Pay>
              </SmallCol>
            </FrthCol>
          </Wrapper>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default Payslip;
