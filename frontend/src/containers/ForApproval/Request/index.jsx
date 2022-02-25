import {
  declineCashAdvance,
  deleteCashAdvance,
  editCashAdvance,
  findAllUnprocessedCAs,
} from "@/features/cash_advance/cashAdvanceSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import Input from "@/components/Input";

import {
  ButtonContainer,
  Content,
  HeaderLink,
  InfoBox,
  Item,
  ItemCheck,
  ItemContent,
  ItemNumber,
  ItemPrice,
  ItemTitle,
  LinkBox,
  MiddleBox,
  MiddleTitle,
  RightContainer,
  Tools,
  Wrapper,
} from "./styles";
import { Flex, Text } from "@/styles";
import Checkbox from "@/components/Checkbox";
import { FormProvider, useForm } from "react-hook-form";
import Dropdown from "@/components/Dropdown";
import { findAllDepartments } from "@/features/department/departmentSlice";
import { useRouter } from "next/router";
import Menu from "@/components/Menu";
import { settingsSelector } from "@/features/settings/settingsSlice";
import Settings from "@/components/Menu/settings";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const ForApprovalRequest = () => {
  const methods = useForm();
  const { handleSubmit, reset, setValue, register } = methods;
  const [isReset, setIsReset] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCA, setselectedCA] = useState([]);
  const { data: departments, isFetching: isFetchingDepartments } = useSelector(
    (state) => state.departments
  );
  const [caToShow, setCaToShow] = useState();
  const { isOpen } = useSelector(settingsSelector);

  const router = useRouter();
  const dispatch = useDispatch();
  const { unprocessedData: unprocessedCashAdvanceData, isFetching } =
    useSelector((state) => state.cash_advance);

  useEffect(() => {
    dispatch(findAllUnprocessedCAs());
    dispatch(findAllDepartments());
  }, [dispatch]);

  useEffect(() => {
    if (unprocessedCashAdvanceData.length > 0)
      setCaToShow(unprocessedCashAdvanceData[0]);
  }, [unprocessedCashAdvanceData]);

  const onSubmit = async (data) => {
    if (selectedCA.length > 0) {
      selectedCA.forEach((ca) => {
        dispatch(editCashAdvance({ id: ca, status: "PROCESSED" }));
      });
      router.reload();
    }
  };

  const onDecline = async () => {
    if (selectedCA.length > 0) {
      selectedCA.forEach((ca) => {
        dispatch(declineCashAdvance(ca));
      });
      router.reload();
    }
  };

  const onToggleCheckbox = (id) => {
    if (selectedCA.includes(id)) {
      setselectedCA(selectedCA.filter((el) => el !== id));
    } else {
      setselectedCA([...selectedCA, id]);
    }
  };

  return (
    <Wrapper>
      <LinkBox>
        <HeaderLink>Cash Advance</HeaderLink>
        <HeaderLink>Others</HeaderLink>
      </LinkBox>

      <MiddleBox>
        <FormProvider {...methods}>
          <form id="requestForApprovalForm" onSubmit={handleSubmit(onSubmit)}>
            <MiddleTitle>
              You have <span>{unprocessedCashAdvanceData.length} request</span>{" "}
              to approve
            </MiddleTitle>
            <Tools>
              <div>
                <Dropdown
                  bg="gray"
                  isReset={isReset}
                  setValue={setSelectedDepartment}
                  name="department"
                  label="Department"
                  options={
                    isFetchingDepartments
                      ? [{ id: 0, name: "Loading Departments" }]
                      : departments
                  }
                />
              </div>
              <div>
                <InputField
                  h="3.6em"
                  name="employee_number"
                  placeholder="Search employee no."
                />
              </div>
            </Tools>
            <Content>
              {unprocessedCashAdvanceData ? (
                unprocessedCashAdvanceData.map((unprocessedCashAdvanceData) => (
                  <Item
                    onClick={() => setCaToShow(unprocessedCashAdvanceData)}
                    key={unprocessedCashAdvanceData.id}
                  >
                    <ItemNumber>1</ItemNumber>
                    <ItemContent>
                      <ItemTitle>
                        {unprocessedCashAdvanceData.employee.first_name}{" "}
                        {unprocessedCashAdvanceData.employee.last_name}
                      </ItemTitle>
                      <ItemPrice>
                        P
                        {Number(
                          unprocessedCashAdvanceData.amount_borrowed
                        ).toFixed(2)}
                      </ItemPrice>
                    </ItemContent>
                    <input
                      onChange={() =>
                        onToggleCheckbox(
                          unprocessedCashAdvanceData.id,
                          unprocessedCashAdvanceData.employee.id
                        )
                      }
                      type="checkbox"
                    />

                    {/* <Checkbox /> */}
                  </Item>
                ))
              ) : (
                <Text>Wow, such empty.</Text>
              )}
            </Content>
          </form>
        </FormProvider>
      </MiddleBox>

      <RightContainer>
        <InfoBox>
          {caToShow ? (
            <>
              <Flex>
                <Flex direction="column">
                  <Text size="xs" color="darkGray">
                    Date
                  </Text>
                  <Text size="xs" fontWeight="bold" color="default">
                    {dayjs(new Date()).format("MMM DD, YYYY")}
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text size="xs" color="darkGray">
                    Subject
                  </Text>
                  <Text size="xs" fontWeight="bold" color="default">
                    CASH ADVANCE REQUEST
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Flex direction="column" gap="0">
                  <Text size="xs" color="darkGray">
                    Employee
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    {caToShow.employee.first_name} {caToShow.employee.last_name}
                  </Text>
                </Flex>
                <Flex direction="column" gap="0">
                  <Text size="xs" color="darkGray">
                    Salary deduction
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    P {Number(caToShow.salary_deduction).toFixed(2)}
                  </Text>
                </Flex>
              </Flex>
              <Flex>
                <Flex direction="column" gap="0">
                  <Text size="xs" color="darkGray">
                    Amount
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    P {Number(caToShow.amount_borrowed).toFixed(2)}
                  </Text>
                </Flex>

                <Flex direction="column">
                  <Text size="xs" color="darkGray">
                    Date Borrowed
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    {dayjs(caToShow.date_from).format("MMM DD, YYYY")}
                  </Text>
                </Flex>
              </Flex>

              <Flex>
                <Flex direction="column" gap="0">
                  <Text size="xs" color="darkGray">
                    No. of payments
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    {caToShow.no_of_payments}
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text size="xs" color="darkGray">
                    Expected date of completion
                  </Text>
                  <Text size="xl" fontWeight="bold" color="default">
                    {dayjs(caToShow.date_to).format("MMM DD, YYYY")}
                  </Text>
                </Flex>
              </Flex>
            </>
          ) : (
            <Flex align="center" justify="center">
              <Text color="darkGray">Please select to view the request.</Text>
            </Flex>
          )}
        </InfoBox>
        <ButtonContainer>
          <Button form="requestForApprovalForm">Approve</Button>
          <Button onClick={onDecline} bgHover="red" bg="red">
            Decline
          </Button>
        </ButtonContainer>
      </RightContainer>
    </Wrapper>
  );
};

export default ForApprovalRequest;
