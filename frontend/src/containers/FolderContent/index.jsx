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
        <Navigation>
          <FilePath>
            <CompanyIcon>R</CompanyIcon>
            <Chevron>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="rotate(-90 12 12)">
                  <path
                    d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Chevron>
            <Path onClick={() => router.push(`/employee-file/`)}>
              Employee File
            </Path>
            <Chevron>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="rotate(-90 12 12)">
                  <path
                    d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Chevron>
            <Path onClick={() => router.push(`/employee-file/${employee.id}`)}>
              {employee?.first_name} {employee?.last_name}
            </Path>
            <Chevron>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="rotate(-90 12 12)">
                  <path
                    d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Chevron>
            <Path>{name}</Path>
            {/* di ko sure kung pano 'to i-modify */}
          </FilePath>
          <div>
            <LGButtons />
          </div>
          <Settings />
        </Navigation>
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
              <HeaderText size="xxl">John Doe</HeaderText>
              <Text>
                EMPLOYEE NO: <span>0000-0000</span>
              </Text>
              <Text fontWeight="bold" color="lightViolet">
                ACCOUNTING & FINANCE
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
