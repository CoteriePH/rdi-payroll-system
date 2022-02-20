import { useState } from "react";
import Button from "@/components/Button/index.jsx";
import Checkbox from "@/components/Checkbox/index.jsx";
import Dropdown from "@/components/Dropdown/index.jsx";
import Input from "@/components/Input";
import Radio from "@/components/Radio/index.jsx";
import Toggle from "@/components/Toggle/index.jsx";
import { useForm, FormProvider } from "react-hook-form";
import {
  Wrapper,
  Heading,
  Tab,
  RadioWrapper,
  DropdownWrapper,
  Text,
  FormContainer,
  Grid,
  Form,
  ButtonGroup,
} from "./styles.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllCompanies } from "@/features/company/companySlice.js";
import { findAllDepartments } from "@/features/department/departmentSlice.js";
import { findAllPositions } from "@/features/position/positionSlice.js";
import {
  findAllEmployees,
  findAllFilteredEmployees,
} from "@/features/employee/employeeSlice.js";
import { SCHEDULES } from "@/constants/constants.js";
import { findAllSchedules } from "@/features/schedule/scheduleSlice.js";

const Menu = ({ children }) => {
  const methods = useForm();
  const { handleSubmit, reset, setValue } = methods;

  const [checkboxValue, setCheckboxValue] = useState(false);
  const dispatch = useDispatch();
  const { data: companies, isFetching: isFetchingCompanies } = useSelector(
    (state) => state.companies
  );
  const { data: departments, isFetching: isFetchingDepartments } = useSelector(
    (state) => state.departments
  );
  const { data: positions, isFetching: isFetchingPositions } = useSelector(
    (state) => state.positions
  );
  const { data: schedules, isFetching: isFetchingSchedules } = useSelector(
    (state) => state.schedules
  );
  const filters = useSelector((state) => state.settings.filters);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch(findAllCompanies());
    dispatch(findAllDepartments());
    dispatch(findAllPositions());
    dispatch(findAllSchedules());
  }, [dispatch]);

  const onSubmit = (data) => {
    // TODO - REFACTOR DROPDOWN
    setIsReset(false);
    data.company = selectedCompany;
    data.department = selectedDepartment;
    data.position = selectedPosition;
    data = { ...data, ...filters };
    dispatch(findAllFilteredEmployees(data));
  };

  const onReset = () => {
    reset({});
    setSelectedCompany("");
    setSelectedDepartment("");
    setSelectedPosition("");
    setIsReset(true);
    dispatch(findAllEmployees());
  };

  return (
    <>
      <Wrapper>
        <Heading>
          <Tab>FILTERS</Tab>
          <Tab>SORT</Tab>
        </Heading>

        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <Input name="search" type="search" placeholder="Search" menu />
              <RadioWrapper>
                <Radio value="MALE" name="sex">
                  Male
                </Radio>
                <Radio value="FEMALE" name="sex">
                  Female
                </Radio>
              </RadioWrapper>
              <DropdownWrapper>
                {/* TODO: Dropdown options */}
                <Dropdown
                  isReset={isReset}
                  setValue={setSelectedCompany}
                  name="company"
                  label="Company"
                  options={
                    isFetchingCompanies
                      ? [{ id: 0, name: "Loading Companies" }]
                      : companies
                  }
                />
                <Dropdown
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
                <Dropdown
                  isReset={isReset}
                  setValue={setSelectedPosition}
                  name="position"
                  label="Position"
                  options={
                    isFetchingPositions
                      ? [{ id: 0, name: "Loading Positions" }]
                      : positions
                  }
                />
                {/* <Dropdown name="level" label="Level" options={['a', 'b', 'c', 'd', 'e']} /> */}
              </DropdownWrapper>
              <div>
                <Text>Time Duration</Text>
                <Grid col={1}>
                  <Input name="date_hired_from" type="date" menu />
                  <Input name="date_hired_to" type="date" menu />
                </Grid>
              </div>
              <div>
                <Text>Schedule</Text>
                <Toggle
                  label="All"
                  checked={checkboxValue}
                  onChange={() => {
                    setCheckboxValue(!checkboxValue);
                    // TODO - REFACTOR
                    if (checkboxValue) {
                      setValue("SCHEDULE_A", null);
                      setValue("SCHEDULE_B", null);
                      setValue("SCHEDULE_C", null);
                      setValue("SCHEDULE_D", null);
                      setValue("SCHEDULE_E", null);
                      setValue("SCHEDULE_F", null);
                      setValue("SCHEDULE_G", null);
                    }
                  }}
                />
                <Grid col={1}>
                  <Checkbox
                    name="SCHEDULE_A"
                    label={SCHEDULES.SCHEDULE_A}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_B"
                    label={SCHEDULES.SCHEDULE_B}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_C"
                    label={SCHEDULES.SCHEDULE_C}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_D"
                    label={SCHEDULES.SCHEDULE_D}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_E"
                    label={SCHEDULES.SCHEDULE_E}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_F"
                    label={SCHEDULES.SCHEDULE_F}
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="SCHEDULE_G"
                    label={SCHEDULES.SCHEDULE_G}
                    disabled={!checkboxValue}
                  />
                </Grid>
              </div>
            </FormContainer>
            <ButtonGroup>
              {/* TODO - TEMPORARY FILTER BUTTO */}
              <Button
                minW="10rem"
                h="2rem"
                fontWeight="bold"
                fontFamily="avenirRoman"
                type="submit"
              >
                FILTER
              </Button>
              <Button
                minW="10rem"
                h="2rem"
                fontWeight="bold"
                fontFamily="avenirRoman"
                type="submit"
                onClick={onReset}
              >
                Reset Selection
              </Button>
              {children}
            </ButtonGroup>
          </Form>
        </FormProvider>
      </Wrapper>
    </>
  );
};

export default Menu;
