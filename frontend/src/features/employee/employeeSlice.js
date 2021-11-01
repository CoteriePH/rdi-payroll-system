import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'utils/API';
import { getAllEmployees } from 'utils/employee.routes';
import download from 'downloadjs';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: null
};

export const findAllEmployees = createAsyncThunk(
  '/employees/all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllEmployees();
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const exportEmployeesToCSV = createAsyncThunk(
  '/employees/export-to-csv',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`employees/export-to-csv`);
      if (res.status === 200) {
        const csvFile = new File([res.data], 'employees.csv');
        download(csvFile, 'employees.csv');
      } else {
        throw new Error(res.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: {
    [findAllEmployees.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllEmployees.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllEmployees.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

// export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
