import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import { settingsSelector } from "@/features/settings/settingsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Container, Flex, TableContainer } from "./styles";
import Toolbar from "@/components/Toolbar";
import {
  findAllCashAdvance,
  findAllUnprocessedCAs,
} from "@/features/cash_advance/cashAdvanceSlice";
import { caStatusColorPicker } from "@/helpers/colorPicker";
import { useSession } from "next-auth/react";

const UnprocessedCA = () => {
  const dispatch = useDispatch();
  const { unprocessedData: data, isFetching } = useSelector(
    (state) => state.cash_advance
  );
  const { isOpen } = useSelector(settingsSelector);

  const { data: session } = useSession();
  const authRole = session?.user.role;
  useEffect(() => {
    dispatch(findAllUnprocessedCAs());
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

export default UnprocessedCA;
