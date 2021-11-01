import { useState } from 'react';
import Button from 'components/Button/index.jsx';
import Checkbox from 'components/Checkbox/index.jsx';
import Dropdown from 'components/Dropdown/index.jsx';
import Input from 'components/Input';
import Radio from 'components/Radio/index.jsx';
import Toggle from 'components/Toggle/index.jsx';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { exportEmployeesToCSV } from 'features/employee/employeeSlice';
import {
  Wrapper,
  Heading,
  Tab,
  RadioWrapper,
  DropdownWrapper,
  Text,
  FormContainer,
  Grid,
  Form
} from './styles.js';

const Menu = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <>
      <Wrapper>
        <Heading>
          <Tab>FILTERS</Tab>
          <Tab>SORT</Tab>
        </Heading>

        <FormProvider {...methods}>
          <Form>
            <FormContainer>
              <Input name="search" type="search" placeholder="Search" menu />
              <RadioWrapper>
                <Radio>Male</Radio>
                <Radio>Female</Radio>
              </RadioWrapper>
              <DropdownWrapper>
                {/* TODO: Dropdown options */}
                <Dropdown label="Company" options={['a', 'b', 'c', 'd', 'e']} />
                <Dropdown label="Department" options={['a', 'b', 'c', 'd', 'e']} />
                <Dropdown label="Position" options={['a', 'b', 'c', 'd', 'e']} />
                <Dropdown label="Level" options={['a', 'b', 'c', 'd', 'e']} />
              </DropdownWrapper>
              <div>
                <Text>Time Duration</Text>
                <Grid col={1}>
                  <Input name="dateFrom" type="date" menu />
                  <Input name="dateTo" type="date" menu />
                </Grid>
              </div>
              <div>
                <Text>Schedule</Text>
                <Toggle
                  label="All"
                  checked={checkboxValue}
                  onChange={() => setCheckboxValue(!checkboxValue)}
                />
                <Grid col={2}>
                  <Checkbox label="Morning" disabled={!checkboxValue} />
                  <Checkbox label="Noon" disabled={!checkboxValue} />
                  <Checkbox label="Mid-morning" disabled={!checkboxValue} />
                  <Checkbox label="Afternoon" disabled={!checkboxValue} />
                </Grid>
              </div>
            </FormContainer>
            <Button type="reset">Reset Selection</Button>
            {/* FIX: Move nalang to sa baba ng table */}
            {/* <Button
              onClick={() => {
                dispatch(exportEmployeesToCSV());
              }}
            >
              Export
            </Button> */}
          </Form>
        </FormProvider>
      </Wrapper>
    </>
  );
};

export default Menu;
