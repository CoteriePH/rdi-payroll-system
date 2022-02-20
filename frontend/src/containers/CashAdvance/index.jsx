import Button from "@/components/Button/";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import RunCashAdvance from "@/components/Modals/RunCashAdvance";
import Table from "@/components/Table";
import TableCheckbox from "@/components/TableCheckbox";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import {
  resetEmployeeToRun,
  toggleEmployeeToRun,
} from "@/features/cash_advance/cashAdvanceSlice";
import { findAllFilteredEmployees } from "@/features/employee/employeeSlice";
import {
  addFilter,
  resetFilters,
  settingsSelector,
} from "@/features/settings/settingsSlice";
import getTimeDuration from "@/helpers/getTimeDuration";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, TableContainer, Wrapper } from "./styles";

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const { data: session } = useSession();
  const authRole = session?.user.role;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRunOpen, setIsRunOpen] = useState(false);
  const { isFetching: isGenerating, isSuccess: isGenerated } = useSelector(
    (state) => state.cash_advance
  );
  useEffect(() => {
    dispatch(addFilter({ cash_advance_eligibility: 1 }));
    dispatch(findAllFilteredEmployees({ cash_advance_eligibility: 1 }));
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(resetEmployeeToRun());
      dispatch(resetFilters());
    };
  }, [dispatch]);
  useEffect(() => {
    if (isGenerated) {
      dispatch(findAllFilteredEmployees({ cash_advance_eligibility: 1 }));
      setIsRunOpen(false);
    }
  }, [isGenerating, isGenerated, dispatch]);
  useEffect(() => {
    return () => {
      dispatch(resetEmployeeToRun());
    };
  }, [dispatch, data]);

  const onRunCashAdvanceOpen = () => {
    setIsRunOpen(true);
  };

  const onSelectAll = () => {
    console.log("", data);
  };

  const columns = React.useMemo(
    () => [
      {
        minWidth: 35,
        width: 35,
        maxWidth: 35,
        Header: (props) => {
          return <TableCheckbox disabled onChange={onSelectAll} />;
        },
        accessor: "id",
        Cell: (props) => {
          return (
            <TableCheckbox
              onClick={(e) => {
                dispatch(
                  toggleEmployeeToRun({
                    id: props.value,
                    first_name: props.row.original.first_name,
                    last_name: props.row.original.last_name,
                    position: props.row.original.position,
                    department: props.row.original.position,
                  })
                );
              }}
            />
          );
        },
      },
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
    ],
    []
  );
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" direction="column" flex={8}>
          <TableContainer>
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 ? (
              <Table columns={columns} data={data} />
            ) : (
              "Wow, such empty"
            )}
          </TableContainer>
          <Toolbar
            leftChildren={
              authRole === ROLES.ENCODER ? (
                <>
                  <Button
                    // onClick={onModalOpen}
                    minW="12rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    ADD EMPLOYEE ON LIST
                  </Button>
                  <Button
                    onClick={onRunCashAdvanceOpen}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    RUN CASH ADVANCE
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
      {isRunOpen ? (
        <RunCashAdvance
          isOpen={isRunOpen}
          onClose={() => setIsRunOpen(false)}
        />
      ) : null}
    </Wrapper>
  );
};

export default CashAdvance;
