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
import Button from "@/components/Button/";
import getTimeDuration from "@/helpers/getTimeDuration";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import EditEmployee from "@/components/Modals/EditEmployee";
import AddEmployee from "@/components/Modals/AddEmployee";
import RecordDeduction from "@/components/Modals/RecordDeduction";
import RecordEarnings from "@/components/Modals/RecordEarnings";

const EmployeeFile = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setwhichModal] = useState("");

  //TODO - NEXT BUTTON

  const onModalOpen = (e) => {
    setwhichModal(e.target.value);
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
        minWidth: 100,
        width: 100,
        maxWidth: 100,
        Header: "",
        accessor: "id",
        Cell: () => {
          return (
            <TextLink value="tl" onClick={(e) => onModalOpen(e)}>
              Edit
            </TextLink>
          );
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
                    value="add"
                    onClick={(e) => onModalOpen(e)}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    Add Record
                  </Button>
                  <Button
                    value="rd"
                    onClick={(e) => onModalOpen(e)}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    Record Deduction
                  </Button>
                  <Button
                    value="re"
                    onClick={(e) => onModalOpen(e)}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    Record Earnings
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
      {whichModal === "add" && (
        <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
      )}
      {whichModal === "tl" && (
        <EditEmployee isOpen={isModalOpen} onClose={onModalClose} />
      )}
      {whichModal === "rd" && (
        <RecordDeduction isOpen={isModalOpen} onClose={onModalClose} />
      )}
      {whichModal === "re" && (
        <RecordEarnings isOpen={isModalOpen} onClose={onModalClose} />
      )}
    </Wrapper>
  );
};

export default EmployeeFile;
