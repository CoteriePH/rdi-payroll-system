import Breadcrumbs from "@/components/Breadcrumbs";
import Menu from "@/components/Menu";
import FolderIcon from "@/components/View/FolderIcon";
import { settingsSelector } from "@/features/settings/settingsSlice";
import { Flex } from "@/styles";
import { useSelector } from "react-redux";
import { ListTable, Wrapper } from "./styles";

const AuditorEmployeeFile = () => {
  const { data } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);

  return (
    <Wrapper>
      {/* LIST VIEW */}
      <Flex direction="column" flex={15}>
        <Breadcrumbs />
        <ListTable>
          {data.map((employee) => (
            <>
              <FolderIcon
                key={employee.id}
                id={employee.id}
                name={`${employee.first_name} ${employee.last_name}`}
                href={`/employee-file/${employee.id}`}
              />
            </>
          ))}
        </ListTable>
      </Flex>
      <Flex bg="gray" flex={1}>
        {isOpen && <Menu />}
      </Flex>
    </Wrapper>
  );
};

export default AuditorEmployeeFile;
