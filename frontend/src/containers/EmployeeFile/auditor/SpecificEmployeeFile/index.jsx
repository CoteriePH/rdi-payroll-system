import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import GeneratedQRCode from "@/components/Modals/GeneratedQRCode";
import FolderItem from "@/components/View/FolderItem";
import { Divider, Flex, HeaderText, Text } from "@/styles";
import Image from "next/image";
import { useState } from "react";
import { ListTable, Wrapper } from "./styles";

const SpecificEmployeeFile = ({ employee }) => {
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);

  const onGenerateQRCode = () => {
    setIsQRCodeOpen(true);
  };

  return (
    <>
      <Wrapper>
        {/* LIST VIEW */}
        <Flex direction="column" flex={15}>
          <Breadcrumbs
            prevHref={`/employee-file/`}
            paths={[
              {
                name: employee?.first_name + " " + employee?.last_name,
                href: `/employee-file/${employee.id}`,
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

              <Flex
                direction="column"
                justify="start"
                align="center"
                gap="0.75"
              >
                <HeaderText size="xxl">
                  {employee.first_name} {employee.last_name}
                </HeaderText>
                <Text>TYPE: {employee.employee_type}</Text>
                <Text fontWeight="bold" color="lightViolet">
                  {employee.department?.name}
                </Text>
              </Flex>
              <Flex direction="column" gap="1" mt="2em" justify="flex-end">
                <Button>View Legal Documents</Button>
                <Button>View Employee Details</Button>
                <Button onClick={onGenerateQRCode}>View QR Code</Button>
              </Flex>
            </Flex>
            <Divider />
            <Flex basis="75%" p="2em">
              <ListTable>
                <FolderItem
                  href={`/employee-file/${employee.id}/payroll`}
                  size="10em"
                  name="PAYROLL"
                />
                <FolderItem
                  href={`/employee-file/${employee.id}/attendance`}
                  size="10em"
                  name="ATTENDANCE"
                />
                <FolderItem
                  href={`/employee-file/${employee.id}/employee-ca`}
                  size="10em"
                  name="CASH ADVANCE"
                />
                <FolderItem
                  href={`/employee-file/${employee.id}/salary-earnings`}
                  size="10em"
                  name="SALARY EARNINGS"
                />
                <FolderItem
                  href={`/employee-file/${employee.id}/salary-deductions`}
                  size="10em"
                  name="SALARY DEDUCTIONS"
                />
                <FolderItem
                  href={`/employee-file/${employee.id}/memos`}
                  size="10em"
                  name="MEMOS"
                />
              </ListTable>
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>

      <GeneratedQRCode
        isOpen={isQRCodeOpen}
        value={employee.id}
        name={employee.first_name + " " + employee.last_name}
        onClose={() => setIsQRCodeOpen(false)}
      />
    </>
  );
};

export default SpecificEmployeeFile;
