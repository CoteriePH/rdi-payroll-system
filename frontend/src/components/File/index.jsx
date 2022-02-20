import React, { useEffect, useState } from "react";
import Payslip from "../Modals/Payslip";

const File = ({ name = "File", onOpen, ...rest }) => {
  return (
    <>
      <div {...rest} onClick={onOpen}>
        {name}
      </div>
    </>
  );
};

export default File;
