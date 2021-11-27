import { useSelector } from "react-redux";
import { ROLES } from "@/constants/constants";
import EncoderEF from "@/containers/EmployeeFile/encoder";
import AuditorEF from "@/containers/EmployeeFile/auditor";

const EmployeeFile = () => {
  const { role } = useSelector((state) => state.auth);
  return (
    <>
      {role === ROLES.ENCODER && <EncoderEF />}
      {role === ROLES.AUDITOR && <AuditorEF />}
    </>
  );
};

export default EmployeeFile;
