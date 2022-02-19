import FolderContent from "@/containers/FolderContent";
import { getOneEmployee } from "@/utils/employee.routes";
import React from "react";

const EmployeePayroll = ({ employee }) => {
  return <FolderContent employee={employee} name="Payroll" />;
};

export const getServerSideProps = async ({ params }) => {
  let employee;

  if (params && params.id) {
    const res = await getOneEmployee(params.id);
    employee = res.data;
  }

  return {
    props: { employee },
  };
};

export default EmployeePayroll;
