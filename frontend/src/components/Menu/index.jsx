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
  const filters = useSelector((state) => state.settings.filters);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch(findAllCompanies());
    dispatch(findAllDepartments());
    dispatch(findAllPositions());
  }, []);

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
                      setValue("MORNING", null);
                      setValue("NOON", null);
                      setValue("MID_MORNING", null);
                      setValue("AFTERNOON", null);
                    }
                  }}
                />
                <Grid col={2}>
                  <Checkbox
                    name="MORNING"
                    label="Morning"
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="NOON"
                    label="Noon"
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="MID_MORNING"
                    label="Mid-morning"
                    disabled={!checkboxValue}
                  />
                  <Checkbox
                    name="AFTERNOON"
                    label="Afternoon"
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
