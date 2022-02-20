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
import { useState } from "react";
import Payslip from "@/components/Modals/Payslip";
import Button from "@/components/Button";

const AuditorEmployeeFile = () => {
  const { data } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const [isPayslipModalOpen, setIsPayslipModalOpen] = useState(false);
  const onPayslipOpen = () => {
    setIsPayslipModalOpen(true);
  };
  const onPayslipClose = () => {
    setIsPayslipModalOpen(false);
  };
  return (
    <>
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
              <Path>Employee File</Path>
              {/* di ko sure kung pano 'to i-modify */}
            </FilePath>
            {/* TODO - MOVE LATER */}
            <div>
              <Button
                onClick={onPayslipOpen}
                minW="10rem"
                h="2rem"
                fontWeight="bold"
                fontFamily="avenirRoman"
              >
                Payslip
              </Button>
            </div>
            <div>
              <LGButtons />
            </div>

            <Settings />
          </Navigation>

          <ListTable>
            {data.map((employee) => (
              <FolderIcon
                name={`${employee.first_name} ${employee.last_name}`}
              />
            ))}
          </ListTable>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Wrapper>

      <Payslip isOpen={isPayslipModalOpen} onClose={onPayslipClose} />
    </>
  );
};

export default AuditorEmployeeFile;
