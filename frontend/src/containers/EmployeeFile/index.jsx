import { useSelector } from "react-redux";
import { ROLES } from "@/constants/constants";
import EncoderEF from "@/containers/EmployeeFile/encoder";
import AuditorEF from "@/containers/EmployeeFile/auditor";
import { useSession } from "next-auth/react";

const EmployeeFile = () => {
  const { data: session } = useSession();
  const role = session?.user.role;
  return (
    <>
      {role === ROLES.ENCODER && <EncoderEF />}
      {role === ROLES.AUDITOR && <AuditorEF />}
    </>
  );
};

export default EmployeeFile;
