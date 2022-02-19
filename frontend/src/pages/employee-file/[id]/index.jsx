import SpecificEmployeeFile from "@/containers/EmployeeFile/auditor/SpecificEmployeeFile";
import { getOneEmployee } from "@/utils/employee.routes";
import React from "react";

const SpecificEmployeeFilePage = ({ employee }) => {
  return <SpecificEmployeeFile employee={employee} />;
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

export default SpecificEmployeeFilePage;
