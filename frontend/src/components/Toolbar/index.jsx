import Button from "@/components/Button";
import { ROLES } from "@/constants/constants";
import { exportEmployeesToCSV } from "@/features/employee/employeeSlice";
import { useSession } from "next-auth/react";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Box, Wrapper } from "./styles";

const Toolbar = ({ children, leftChildren }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const authRole = session?.user.role;

  return (
    <Wrapper>
      <Box>
        {authRole === "AUDITOR" ? (
          <Button
            minW="10rem"
            h="2rem"
            fontWeight="bold"
            fontFamily="avenirRoman"
          >
            Generate All
          </Button>
        ) : null}
        {leftChildren}
      </Box>
      <Box>
        {children}
        <Button
          minW="10rem"
          h="2rem"
          fontWeight="bold"
          borderColor="darkViolet"
          border="2px"
          bg="white"
          color="darkViolet"
        >
          View All
        </Button>
        <Button
          minW="10rem"
          h="2rem"
          onClick={() => {
            dispatch(exportEmployeesToCSV());
          }}
          fontWeight="bold"
          borderColor="darkViolet"
          border="2px"
          bg="white"
          color="darkViolet"
        >
          Export All
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Toolbar;
