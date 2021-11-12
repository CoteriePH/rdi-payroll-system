import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllEmployees } from "@/features/employee/employeeSlice";
import { settingsSelector } from "@/features/settings/settingsSlice";
import {
  Wrapper,
  Container,
  ViewContainer,
  Path,
  View,
  NavPane,
} from "./styles";
import Folder from "@/components/Folder";
import { ReactComponent as ListViewIcon } from "@/assets/icons/listview.svg";
import { ReactComponent as GridViewIcon } from "@/assets/icons/gridview.svg";
import { ReactComponent as ChevronRightIcon } from "@/assets/icons/chevron_right.svg";
import { Flex } from "@/styles";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Loader from "@/components/Loader";
import Button from "@/components/Button";

const sampleData = [{name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'},
  {name: 'Glendell Bringino'}]

const AuditorEmployeeFile = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(settingsSelector);
  const { data, isFetching } = useSelector((state) => state.employees);
  const [view, setView] = useState("list");

  useEffect(() => {
    dispatch(findAllEmployees());
    console.log(data);
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  const renderListView = () => {
    return (
      <Flex direction="column" gap={0.5}>
        {data.length > 0
          ? data.map((d) => (
              <Folder
                key={d.id}
                employeeNo={d.id.slice(0, 8)}
                name={`${d.first_name} ${d.last_name}`}
                department={d.department.name}
              />
            ))
          : null}
        {/* TODO: Screens for page if empty */}
      </Flex>
    );
  };

  const renderGridView = () => {
    return (
      <Flex wrap>
        {sampleData.length > 0
          ? sampleData.map((d, index) => (
              <Folder key={index} name={d.name} isGrid />
            ))
          : null}
      </Flex>
    );
  };

  return (
    <Wrapper>
      <Flex flex={20}>
        <ViewContainer>
          <Settings />
          <NavPane>
            <Flex justify="space-between" align="center">
              <Path>
                <ChevronRightIcon /> Employee Files
              </Path>
              <View>
                <button onClick={() => setView("list")}>
                  <ListViewIcon />
                </button>

                <button onClick={() => setView("grid")}>
                  <GridViewIcon />
                </button>
              </View>
            </Flex>
          </NavPane>
          <Container>
            {view === "list" && renderListView()}
            {view === "grid" && renderGridView()}
          </Container>
        </ViewContainer>
      </Flex>
      <Flex bg="gray" flex={1}>
        {isOpen && <Menu />}
      </Flex>
    </Wrapper>
  );
};

export default AuditorEmployeeFile;
