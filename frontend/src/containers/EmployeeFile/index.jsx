import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import { settingsSelector } from "@/features/settings/settingsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTable } from "react-table";
import { Wrapper, TextLink, Container, Flex, TableContainer } from "./styles";
import AddEmployee from "@/components/Modals/AddEmployee";
import Button from "@/components/Button/";
import getTimeDuration from "@/helpers/getTimeDuration";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";

const EmployeeFile = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(findAllEmployees());
  }, []);

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
              {props.row.original.first_name} {props.row.original.middle_name}{" "}
              {props.row.original.last_name}
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
        Cell: () => {
          return <TextLink>Edit</TextLink>;
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  // if (isFetching) {
  //   /**
  //    * TODO - Loading Component
  //    */
  //   return <div>Loading</div>;
  // }
  return (
    <Wrapper>
      <Container>
        {/* NOTE: Gayahin nalang tong flex sa ibang @/components */}
        <Flex justify="space-between" direction="column" flex={8}>
          <TableContainer>
            {/* TODO - Component kung alang laman data */}
            {/* NOTE: To use Settings Component set parent div to position relative*/}
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 ? (
              <Table tableInstance={tableInstance} />
            ) : (
              "Wow, such empty"
            )}
          </TableContainer>
          {/* TEMPORARY ADD RECORD */}
          <Toolbar
            leftChildren={
              authRole === ROLES.ENCODER ? (
                <Button
                  onClick={onModalOpen}
                  minW="10rem"
                  h="2rem"
                  fontWeight="bold"
                  fontFamily="avenirRoman"
                >
                  Add Record
                </Button>
              ) : null
            }
          >
            {/* <Button
              h="2rem"
              minW="10rem"
              onClick={onModalOpen}
              fontWeight="bold"
              borderColor="darkViolet"
              border="2px"
              bg="white"
              color="darkViolet"
            >
              Add Record
            </Button> */}
          </Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
      <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
    </Wrapper>
  );
};

export default EmployeeFile;
