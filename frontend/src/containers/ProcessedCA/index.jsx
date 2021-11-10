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
import { findAllCashAdvance } from "@/features/cash_advance/cashAdvanceSlice";
import { caStatusColorPicker } from "@/helpers/colorPicker";

const ProcessedCA = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.cash_advance);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);

  useEffect(() => {
    dispatch(findAllCashAdvance());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "EMPLOYEE",
        Cell: (props) => {
          return (
            <div>
              {props.row.original.employee.first_name}{" "}
              {props.row.original.employee.last_name}
            </div>
          );
        },
      },
      {
        Header: "DEPARTMENT",
        accessor: "employee.department.name",
      },
      {
        Header: "STATUS",
        accessor: "ca_status",
        Cell: (props) => {
          return (
            <div style={{ color: caStatusColorPicker(props.value) }}>
              {props.value}
            </div>
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
          <Toolbar></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default ProcessedCA;
