import { Department, Name, Wrapper } from "./styles";
import { ReactComponent as FolderIcon } from "@/assets/icons/folder.svg";

const Folder = ({ employeeNo, name, department, isGrid = false }) => {
  return (
    <Wrapper isGrid={isGrid}>
      <FolderIcon />
      {!isGrid && <p>{employeeNo}</p>}
      <Name>{name}</Name>
      <Department>{department}</Department>
    </Wrapper>
  );
};

export default Folder;
