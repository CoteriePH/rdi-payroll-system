import Breadcrumbs from "@/components/Breadcrumbs";
import ListItem from "@/components/ListItem";
import Menu from "@/components/Menu";
import FolderIcon from "@/components/View/FolderIcon";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import { Flex } from "@/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListTable, Wrapper } from "./styles";

const AuditorEmployeeFile = () => {
  const { data } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const [view, setView] = useState("list");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllEmployees());
  }, [dispatch]);

  return (
    <Wrapper>
      {/* LIST VIEW */}
      <Flex direction="column" flex={15}>
        <Breadcrumbs setView={setView} withMenu />
        <ListTable gridCols={view === "grid" ? 10 : 1}>
          {data.map((employee) => (
            <>
              {view === "grid" ? (
                <FolderIcon
                  key={employee.id}
                  id={employee.id}
                  name={`${employee.first_name} ${employee.last_name}`}
                  href={`/employee-file/${employee.id}`}
                />
              ) : (
                <ListItem
                  key={employee.id}
                  col1={employee.id}
                  col2={employee.first_name + " " + employee.last_name}
                  col3={employee.department.name}
                  href={`/employee-file/${employee.id}`}
                />
              )}
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
