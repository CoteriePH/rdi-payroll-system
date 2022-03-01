import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import RecordModal from "@/components/Modals/RecordModal";
import Table from "@/components/Table";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import getTimeDuration from "@/helpers/getTimeDuration";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, TableContainer, Wrapper, SubWrapper } from "./styles";

const Payroll = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const { data: session } = useSession();
  const authRole = session?.user.role;
  const [isRecordEarningsOpen, setIsRecordEarningsOpen] = useState(false);
  const [isRecordDeductionsOpen, setIsRecordDeductionsOpen] = useState(false);

  useEffect(() => {
    dispatch(findAllEmployees());
  }, [dispatch]);

  let columns = React.useMemo(
    () => [
      {
        Header: "COMPANY",
        accessor: "company.name", // accessor is the "key" in the data
      },
      {
        Header: "DEPARTMENT",
        accessor: "department.name",
      },
      {
        Header: "POSITION",
        accessor: "position.name",
      },
      {
        Header: "EMPLOYEE",
        Cell: (props) => {
          return (
            <div>
              {props.row.original.first_name} {props.row.original.last_name}
            </div>
          );
        },
      },
      {
        Header: "TIME DURATION",
        accessor: "date_hired",
        Cell: (props) => {
          return <div>{getTimeDuration(props.value)} years</div>;
        },
      },
    ],
    []
  );

  if (authRole === "AUDITOR") {
    columns = [
      ...columns,
      {
        Header: "",
        accessor: "id",
        Cell: (props) => {
          return <Link href={`payroll/${props.value}`}>View</Link>;
        },
      },
    ];
  }

  if (isFetching) {
    return <Loader />;
  }
  return (
    <>
      <Wrapper>
        <Container>
          {/* NOTE: Gayahin nalang tong flex sa ibang @/components */}
          {/* TODO - Add nalang ng global styles na pwede gamitin kahit san like Flex */}
          <Flex justify="space-between" direction="column" flex={8}>
            <TableContainer>
              {/* TODO - Component kung alang laman data */}

              {/* NOTE: To use Settings Component set parent div to position relative*/}
              <Settings />
              {data.length > 0 ? (
                <Table columns={columns} data={data} />
              ) : (
                "Wow, such empty"
              )}
            </TableContainer>
            <SubWrapper>
              <Button onClick={() => setIsRecordEarningsOpen(true)} w="10rem">
                Record Earnings
              </Button>
              <Button onClick={() => setIsRecordDeductionsOpen(true)} w="11rem">
                Record Deductions
              </Button>
            </SubWrapper>
            <Toolbar showGenerateButton leftChildren={<></>}></Toolbar>
          </Flex>
          <Flex bg="gray" flex={1}>
            {isOpen && (
              <Menu>
                {authRole === ROLES.ENCODER ? (
                  <>
                    {/* <Button
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    RECORD DEDUCTION
                  </Button>
                  <Button
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    RECORD EARNINGS
                  </Button> */}
                    <Button
                      minW="13rem"
                      h="2rem"
                      fontWeight="bold"
                      fontFamily="avenirRoman"
                    >
                      REQUEST FOR APPROVAL
                    </Button>
                  </>
                ) : null}
              </Menu>
            )}
          </Flex>
        </Container>
      </Wrapper>
      <RecordModal
        name="Record Earnings"
        isOpen={isRecordEarningsOpen}
        onClose={() => setIsRecordEarningsOpen(false)}
      />
      <RecordModal
        name="Record Deductions"
        isOpen={isRecordDeductionsOpen}
        onClose={() => setIsRecordDeductionsOpen(false)}
      />
    </>
  );
};

export default Payroll;
