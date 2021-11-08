import React from "react";
import ReactModal from "react-modal";
import {
  ButtonsContainer,
  FilesContainer,
  Form,
  Header,
  LeftContainer,
  ModalStyle,
  OverlayStyle,
  RadioGroup,
  RightContainer,
  Section,
  SubSection,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/components/InputField";
import { FormProvider, useForm } from "react-hook-form";
import RadioInput from "@/components/RadioInput";
import SelectField from "@/components/SelectField";
import { useDispatch } from "react-redux";
import { addEmployee } from "@/features/employee/employeeSlice";
import { useEffect } from "react";
import { findAllCompanies } from "@/features/company/companySlice";
import { findAllDepartments } from "@/features/department/departmentSlice";
import { findAllPositions } from "@/features/position/positionSlice";
import { useSelector } from "react-redux";
import { HeaderText, Text } from "@/styles";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import PhotoInput from "@/components/PhotoInput";
ReactModal.setAppElement("#root");

//TODO MOVE TO UTILS/HELPERS
const employeeSchema = yup
  .object()
  .shape({
    employee_number: yup.string().required("Employee number is required."),
    last_name: yup.string().required("Last name is required."),
    first_name: yup.string().required("First name is required."),
    middle_name: yup.string().required("Middle name is required."),
    birth_date: yup.string().required("Birth date is required."),
    street: yup.string().required("Street is required."),
    city: yup.string().required("City is required."),
    province: yup.string().required("Province is required."),
    postal_code: yup.string().required("Postal code is required."),
    sex: yup.string().required("Sex is required."),
    email: yup.string().email().required("Email is required."),
    contact_no: yup.string().required("Contact number is required."),
    employment_type: yup.string().required("Employment type is required."),
    company_id: yup.string().required("Company is required."),
    department_id: yup.string().required("Department is required."),
    position_id: yup.string().required("Position is required."),
    basic_pay: yup
      .number("Basic Pay must be a number.")
      .required("Basic Pay is required."),
    date_hired: yup.string().required("Date hired is required."),
    time_shift: yup.string().required("Time shift is required."),
    nbi_clearance: yup.mixed(),
    nso: yup.mixed(),
    sss: yup.mixed(),
    photo: yup.mixed(),
  })
  .required();

const AddEmployee = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(employeeSchema),
  });
  const { handleSubmit, reset } = methods;
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const departments = useSelector((state) => state.departments.data);
  const positions = useSelector((state) => state.positions.data);
  const onSubmit = (data) => {
    //TODO - ADDRESS IN DB??
    console.log(data);
    dispatch(addEmployee(data));
    reset({});
    onClose();
  };
  useEffect(() => {
    dispatch(findAllCompanies());
    dispatch(findAllDepartments());
    dispatch(findAllPositions());
  }, []);

  useEffect(() => {
    // TODO - REFACTOR
    //BUGGY CODE
    if (!isOpen) {
      reset({ sex: "MALE", basic_pay: 0.0 });
    }
  }, [onClose, reset, isOpen]);

  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Add Employee Modal"
      onRequestClose={onClose}
    >
      {/* HEADER */}
      <Header>
        <HeaderText>PERSONAL INFORMATION</HeaderText>
        <div>
          {/* TODO - CLOSE BUTTON */}
          {/* <Button onClick={onClose}>Close Modal</Button> */}
        </div>
      </Header>
      {/* FORM BODY */}
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* LEFT DIV */}
          <LeftContainer>
            <Section>
              <SubSection>
                <InputField name="employee_number" label="Employee Number" />
                <InputField name="last_name" label="Last Name" />
                <InputField name="first_name" label="First Name" />
                <InputField name="middle_name" label="Middle Name" />
                <Text size="xs">SEX</Text>
                <RadioGroup>
                  <RadioInput value="MALE" name="sex" label="MALE" />
                  <RadioInput value="FEMALE" name="sex" label="FEMALE" />
                </RadioGroup>
              </SubSection>
              <SubSection>
                <InputField type="date" name="birth_date" label="Birth Date" />
                <InputField name="street" label="Street" />
                <InputField name="city" label="City" />
                <InputField name="province" label="Province" />
                <InputField name="postal_code" label="Postal Code" />
                <InputField name="email" label="Email Address" />
                <InputField
                  type="tel"
                  name="contact_no"
                  label="Contact Number"
                />
              </SubSection>
            </Section>
            <HeaderText size="lg">EMPLOYMENT STATUS</HeaderText>
            <Section>
              <SubSection>
                <SelectField
                  label="Employment Type"
                  name="employment_type"
                  id="employment_type"
                >
                  <option value="1">ET 1 </option>
                  <option value="2">ET 2 </option>
                </SelectField>
                {/* TODO - DAPAT NAKA HIDE MUNA YUNG DEPT TAS POSITION KUNG WALA PANG COMPANY NA NAPILI */}
                <SelectField label="Company" name="company_id" id="company_id">
                  {companies.map((company) => (
                    <option value={company.id} key={company.id}>
                      {company.name}
                    </option>
                  ))}
                </SelectField>
                <SelectField
                  label="Department"
                  name="department_id"
                  id="department_id"
                >
                  {departments.map((department) => (
                    <option value={department.id} key={department.id}>
                      {department.name}
                    </option>
                  ))}
                </SelectField>
                <SelectField
                  label="Position"
                  name="position_id"
                  id="position_id"
                >
                  {positions.map((position) => (
                    <option value={position.id} key={position.id}>
                      {position.name}
                    </option>
                  ))}
                </SelectField>
              </SubSection>
              <SubSection>
                <InputField
                  step="any"
                  type="number"
                  name="basic_pay"
                  label="Basic Pay"
                />

                <InputField type="date" name="date_hired" label="Date Hired" />
                <SelectField
                  label="Time Shift"
                  name="time_shift"
                  id="time_shift"
                >
                  <option value="MORNING">Morning</option>
                  <option value="MID_MORNING">Mid Morning </option>
                  <option value="NOON">Noon</option>
                  <option value="AFTERNOON">Afternoon</option>
                </SelectField>
              </SubSection>
            </Section>
            <HeaderText size="lg">LEGAL DOCUMENTS</HeaderText>
            <Section>
              <FilesContainer>
                <FileInput
                  name="nbi_clearance"
                  label="NBI CLEARANCE"
                  placeholder="NBI CLEARANCE"
                />
                <FileInput name="nso" label="NSO" placeholder="NSO" />
                <FileInput name="sss" label="SSS" placeholder="SSS" />
              </FilesContainer>
              {/* TODO FILEINPUT COMPONENT */}
            </Section>
          </LeftContainer>
          {/* RIGHT DIV */}
          <RightContainer>
            <div>
              {/* <Text>TODO ADD PHOTO</Text> */}
              <PhotoInput
                name="photo"
                label="Add Photo"
                placeholder="Add Photo"
              />
            </div>
            <ButtonsContainer>
              <Button>Import</Button>
              <Button type="submit">Save Record</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ButtonsContainer>
          </RightContainer>
        </Form>
      </FormProvider>
    </ReactModal>
  );
};

export default AddEmployee;
