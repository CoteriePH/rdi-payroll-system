import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import { settingsSelector } from "@/features/settings/settingsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTable } from "react-table";
import { Wrapper, Container, Flex, TableContainer } from "./styles";
import AddEmployee from "@/components/Modals/AddEmployee";
import Button from "@/components/Button/";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import { findAllAttendance } from "@/features/attendance/attendanceSlice";
import { accuracyColorPicker } from "@/helpers/colorPicker";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";

const Attendance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.attendances);
  const { isOpen } = useSelector(settingsSelector);
  const { data: session } = useSession();
  const authRole = session?.user.role;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(findAllAttendance());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "EMPLOYEE NAME",
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
        Header: "DATE",
        accessor: "created_at",
        Cell: (props) => {
          return <div>{dayjs(props.value).format("YYYY-MM-DD")}</div>;
        },
      },
      {
        //TODO TIME CONVERTER HELPER
        Header: "TIME IN",
        Cell: (props) => {
          const entries = props.row.original.entries;

          return <div>{dayjs(entries[0].created_at).format("hh:mm:ss A")}</div>;
        },
      },
      {
        Header: "TIME OUT",
        Cell: (props) => {
          const entries = props.row.original.entries;
          return (
            <div>
              {dayjs(entries[entries.length - 1].created_at).format(
                "hh:mm:ss A"
              )}
            </div>
          );
        },
      },
      {
        Header: "TRT",
        accessor: "total_running_time",
        Cell: (props) => {
          return (
            <div>
              {props.value
                ? new Date(props.value * 1000).toISOString().substr(11, 8)
                : "N/A"}
            </div>
          );
        },
      },
      {
        Header: "NO. OF ENTRIES",
        accessor: "entries",
        Cell: (props) => {
          return <div>{props.value ? props.value.length : "0"}</div>;
        },
      },
    ],
    []
  );

  // if (isFetching) {
  //   /**
  //    * TODO - Loading Component
  //    */
  //   return <div>Loading</div>;
  // }
  return (
    <Wrapper>
      <Container>
        {/* NOTE: Gayahin nalang tong flex sa ibang components */}
        <Flex justify="space-between" direction="column">
          <TableContainer>
            {/* TODO - Component kung alang laman data */}
            {/* NOTE: To use Settings Component set parent div to position relative*/}
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 && columns ? (
              <Table columns={columns} data={data} />
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
          ></Toolbar>
        </Flex>
        <Flex bg="gray">{isOpen && <Menu />}</Flex>
      </Container>
      <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
    </Wrapper>
  );
};

export default Attendance;
