import { Department, Name, Wrapper } from "./styles";
import Image from "next/image";

const Folder = ({ employeeNo, name, department, isGrid = false }) => {
  return (
    <Wrapper isGrid={isGrid}>
      <Image
        src="/icons/folder.svg"
        alt="folder"
        width="100px"
        height="100px"
      />
      {!isGrid && <p>{employeeNo}</p>}
      <Name>{name}</Name>
      <Department>{department}</Department>
    </Wrapper>
  );
};

export default Folder;
