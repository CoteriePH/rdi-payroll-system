import {
  Wrapper,
  Navigation,
  FilePath,
  CompanyIcon,
  Chevron,
  Path,
  ListTable,
} from "./styles";

import FolderIcon from "@/components/View/FolderIcon";
import PayslipIcon from "@/components/View/PayslipIcon";
import LGButtons from "@/components/View/LGButtons";
import { useSelector } from "react-redux";
import { Flex } from "@/styles";
import Settings from "@/components/Menu/settings";
import { settingsSelector } from "@/features/settings/settingsSlice";
import Menu from "@/components/Menu";
import Breadcrumbs from "@/components/Breadcrumbs";

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
