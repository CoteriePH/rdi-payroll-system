import { Department, Name, Wrapper } from "./styles";
import Image from "next/image";

const Folder = ({ employeeNo, name, department, isGrid = false }) => {
  return (
    <Wrapper isGrid={isGrid}>
      {!isGrid && <p>{employeeNo}</p>}
      <Name>{name}</Name>
      <Department>{department}</Department>
    </Wrapper>
  );
};

export default Folder;
