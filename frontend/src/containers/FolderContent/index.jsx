import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import FolderItem from "@/components/View/FolderItem";
import LGButtons from "@/components/View/LGButtons";
import { settingsSelector } from "@/features/settings/settingsSlice";
import { Divider, Flex, HeaderText, Text } from "@/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  Chevron,
  CompanyIcon,
  FilePath,
  ListTable,
  Navigation,
  Path,
  Wrapper,
} from "./styles";

const FolderContent = ({ employee, name }) => {
  const { isOpen } = useSelector(settingsSelector);

  const router = useRouter();

  return (
    <Wrapper>
      {/* LIST VIEW */}
      <Flex direction="column" flex={15}>
        <Breadcrumbs
          paths={[
            {
              name: employee?.first_name + " " + employee?.last_name,
              href: `/employee-file/${employee.id}`,
            },
            {
              name: name,
            },
          ]}
        />
        <Flex direction="row">
          <Flex
            p="2em"
            direction="column"
            basis="25%"
            justify="center"
            align="center"
          >
            <Flex>
              <Image
                width="100px"
                height="100px"
                src="/icons/person.svg"
                alt="me.png"
              />
            </Flex>
            <Flex direction="column" justify="start" align="center" gap="0.75">
              <HeaderText size="xxl">
                {employee.first_name} {employee.last_name}
              </HeaderText>
              <Text>TYPE: {employee.employee_type}</Text>
              <Text fontWeight="bold" color="lightViolet">
                {employee.department.name}
              </Text>
            </Flex>
            <Flex direction="column" gap="1" mt="2em" justify="flex-end">
              <Button>View Legal Documents</Button>
              <Button>View Employee Details</Button>
            </Flex>
          </Flex>
          <Divider />
          <Flex basis="75%" p="2em">
            <ListTable>
              <div>File 1</div>
              <div>File 2</div>
              <div>File 3</div>
            </ListTable>
          </Flex>
        </Flex>
      </Flex>
      <Flex bg="gray" flex={1}>
        {isOpen && <Menu />}
      </Flex>
    </Wrapper>
  );
};

export default FolderContent;
