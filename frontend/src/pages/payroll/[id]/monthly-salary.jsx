import MonthlySalary from "@/containers/Payroll/MonthlySalary";
import View from "@/containers/Payroll/view";
import { getOneEmployee } from "@/utils/employee.routes";
import React from "react";

const MonthlySalaryPage = ({ employee }) => {
  return <MonthlySalary employee={employee} />;
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

export default MonthlySalaryPage;
