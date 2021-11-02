import Button from 'components/Button';
import { exportEmployeesToCSV } from 'features/employee/employeeSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Wrapper } from './styles';

const Toolbar = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Box>
        <Button minW="10rem" h="2rem" fontWeight="bold" fontFamily="avenirRoman">
          Generate All
        </Button>
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
