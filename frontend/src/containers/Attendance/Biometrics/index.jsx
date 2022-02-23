import Button from "@/components/Button/";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import AddEmployee from "@/components/Modals/AddEmployee";
import Table from "@/components/Table";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import { findAllAttendance } from "@/features/attendance/attendanceSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import { Text } from "@/styles";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Flex, TableContainer, Wrapper } from "./styles";
import { attendanceStatusColorPicker } from "@/helpers/colorPicker";

const Biometrics = () => {
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
        Header: "Status",
        Cell: (props) => {
          const status_time_in = props.row.original.status_time_in;
          const status_time_out = props.row.original.status_time_out;
          return (
            <>
              {status_time_in ? (
                <Text
                  color={attendanceStatusColorPicker(status_time_in)}
                  textTransform="capitalize"
                >
                  {status_time_in.toLowerCase()}
                </Text>
              ) : (
                "Not available"
              )}
              {status_time_out ? (
                <Text
                  color={attendanceStatusColorPicker(status_time_out)}
                  textTransform="capitalize"
                >
                  {" "}
                  / {status_time_out.toLowerCase()}
                </Text>
              ) : (
                "Not available"
              )}
            </>
          );
        },
      },
    ],
    []
  );

  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" direction="column">
          <TableContainer>
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 && columns ? (
              <Table columns={columns} data={data} />
            ) : (
              "Wow, such empty"
            )}
          </TableContainer>
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

export default Biometrics;
