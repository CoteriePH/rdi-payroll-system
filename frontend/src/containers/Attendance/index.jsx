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
      {
        Header: "ACCURACY",
        accessor: "accuracy",
        Cell: (props) => {
          const val = Math.floor(Math.random() * (100 - 0 + 1) + 0);
          return (
            <div style={{ color: accuracyColorPicker(val) }}>
              {props.value ? props.value : val}%
            </div>
          );
        },
      },
      {
        Header: "TRT",
        accessor: "total_running_time",
        Cell: (props) => {
          return <div>{props.value ? props.value : "N/A"}</div>;
        },
      },
      {
        Header: "NO. OF ENTRIES",
        accessor: "entries",
        Cell: (props) => {
          return <div>{props.value ? props.value : "0"}</div>;
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
        <Flex bg="gray">{isOpen && <Menu />}</Flex>
      </Container>
      <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
    </Wrapper>
  );
};

export default Attendance;
