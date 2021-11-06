import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'utils/API';
import { getAllEmployees } from 'utils/employee.routes';
import download from 'downloadjs';
import { toast } from 'react-toastify';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: ''
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

export const findAllFilteredEmployees = createAsyncThunk(
  '/employees/all',
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.get(`employees`, {
        params: data
      });
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

export const addEmployee = createAsyncThunk('/employees/add', async (data, { rejectWithValue }) => {
  try {
    const res = await API.post(`employees`, data);
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
});

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
      state.errorMessage = payload;
    },
    [findAllFilteredEmployees.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllFilteredEmployees.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllFilteredEmployees.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [addEmployee.pending]: (state) => {
      state.isFetching = true;
    },
    [addEmployee.fulfilled]: (state) => {
      // TODO - Di ko alam kung tama tong pinag gagagawa ko haha
      // state.data = [...state.data, payload];
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Successfully added an employee.`);
    },
    [addEmployee.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast.error(payload);
    }
  }
});

// export const {  } = employeeSlice.actions;
export default employeeSlice.reducer;
