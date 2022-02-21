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
  Content,
  HeaderLink,
  Item,
  ItemCheck,
  ItemContent,
  ItemNumber,
  ItemPrice,
  ItemTitle,
  LinkBox,
  MiddleBox,
  MiddleTitle,
  Tools,
  Wrapper,
} from "./styles";
import { Flex } from "@/styles";
import Checkbox from "@/components/Checkbox";
import { FormProvider, useForm } from "react-hook-form";
import Dropdown from "@/components/Dropdown";
import { findAllDepartments } from "@/features/department/departmentSlice";
import { useRouter } from "next/router";

const ForApprovalRequest = () => {
  const methods = useForm();
  const { handleSubmit, reset, setValue, register } = methods;
  const [isReset, setIsReset] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCA, setselectedCA] = useState([]);
  const { data: departments, isFetching: isFetchingDepartments } = useSelector(
    (state) => state.departments
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const { unprocessedData: unprocessedCashAdvanceData, isFetching } =
    useSelector((state) => state.cash_advance);

  useEffect(() => {
    dispatch(findAllUnprocessedCAs());
    dispatch(findAllDepartments());
  }, [dispatch]);

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
      <FormProvider {...methods}>
        <form id="requestForApprovalForm" onSubmit={handleSubmit(onSubmit)}>
          <MiddleBox>
            <MiddleTitle>
              You have <span>{unprocessedCashAdvanceData.length} request</span>{" "}
              to approve
            </MiddleTitle>
            <Tools>
              <div>
                <Dropdown
                  withBorder
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
                <input type="search" placeholder="Search Employee No" />
              </div>
              <div>Check</div>
              <div>Minus</div>
            </Tools>
            <Content>
              {unprocessedCashAdvanceData.map((unprocessedCashAdvanceData) => (
                <Item key={unprocessedCashAdvanceData.id}>
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
              ))}
            </Content>
          </MiddleBox>
        </form>
      </FormProvider>

      <div>
        <img src="" alt="image" />
        <div>
          <button onClick={onDecline}>Decline</button>
          <button form="requestForApprovalForm">Approve</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ForApprovalRequest;
