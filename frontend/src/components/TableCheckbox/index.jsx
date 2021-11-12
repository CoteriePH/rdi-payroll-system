import React from "react";
import { Box, Container, Wrapper } from "./styles";
import Check from "@/assets/icons/Check";

const TableCheckbox = ({ checked, ...rest }) => {
  return (
    <>
      <Wrapper>
        <Container>
          <input {...rest} checked={checked} type="checkbox" />
          <Box border />
          <Check w={16} h={18} />
        </Container>
      </Wrapper>
    </>
  );
};

export default TableCheckbox;
