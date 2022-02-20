import Payslip from "@/components/Modals/Payslip";
import FolderContent from "@/containers/FolderContent";
import { getOneEmployee } from "@/utils/employee.routes";
import React, { useState } from "react";

const EmployeePayroll = ({ employee }) => {
  const [isPayslipModalOpen, setIsPayslipModalOpen] = useState(false);
  const [payrollId, setPayrollId] = useState();
  const onPayslipOpen = () => {
    setIsPayslipModalOpen(true);
  };
  const onPayslipClose = () => {
    setIsPayslipModalOpen(false);
  };
  return (
    <>
      <FolderContent
        setFileId={setPayrollId}
        onOpen={onPayslipOpen}
        employee={employee}
        name="Payroll"
      />
      <Payslip
        employee={employee}
        setPayrollId={setPayrollId}
        payrollId={payrollId}
        isOpen={isPayslipModalOpen}
        onClose={onPayslipClose}
      />
    </>
  );
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
