import React, { useState } from "react";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { Wrapper, TextLink, Container, Flex, TableContainer } from "./styles";
import Button from "@/components/Button/";
import getTimeDuration from "@/helpers/getTimeDuration";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import EditEmployee from "@/components/Modals/EditEmployee";
import AddEmployee from "@/components/Modals/AddEmployee";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import Menu from "@/components/Menu";
import { useSession } from "next-auth/react";

const EncoderEmployeeFile = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const { data: session } = useSession();
  const authRole = session?.user.role;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  //TODO - NEXT BUTTON
  const onEditModalOpen = () => {
    setIsEditModalOpen(true);
  };
  const onEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };

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
        minWidth: 100,
        width: 100,
        maxWidth: 100,
        Header: "",
        accessor: "id",
        Cell: () => {
          return <TextLink onClick={onEditModalOpen}>Edit</TextLink>;
        },
      },
    ],
    []
  );
  return (
    <Wrapper>
      <Container>
        {/* NOTE: Gayahin nalang tong flex sa ibang components */}
        <Flex justify="space-between" direction="column" flex={8}>
          <TableContainer>
            {/* TODO - Component kung alang laman data */}
            {/* NOTE: To use Settings Component set parent div to position relative*/}
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 ? (
              <Table columns={columns} data={data} />
            ) : (
              "Wow, such empty"
            )}
          </TableContainer>
          {/* TEMPORARY ADD RECORD */}
          <Toolbar
            leftChildren={
              authRole === ROLES.ENCODER ? (
                <>
                  <Button
                    onClick={onModalOpen}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    Add Record
                  </Button>
                </>
              ) : null
            }
          ></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
      <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
      <EditEmployee isOpen={isEditModalOpen} onClose={onEditModalClose} />
    </Wrapper>
  );
};

export default EncoderEmployeeFile;
