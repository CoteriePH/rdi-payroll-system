import Button from "@/components/Button";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import getTimeDuration from "@/helpers/getTimeDuration";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, TableContainer, Wrapper } from "./styles";

const Payroll = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  useEffect(() => {
    dispatch(findAllEmployees());
  }, [dispatch]);

  const columns = React.useMemo(
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
      {
        Header: "",
        accessor: "id",
        Cell: (props) => {
          return <Link href={`payroll/${props.value}`}>view</Link>;
        },
      },
    ],
    []
  );

  if (isFetching) {
    return <Loader />;
  }
  return (
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
          <Toolbar leftChildren={<></>}></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && (
            <Menu>
              {authRole === ROLES.ENCODER ? (
                <>
                  <Button
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
                  </Button>
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
  );
};

export default Payroll;
