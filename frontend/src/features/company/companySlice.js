import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'utils/API';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: ''
};

export const findAllCompanies = createAsyncThunk(
  '/companies/all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get('company');
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

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: {
    [findAllCompanies.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllCompanies.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllCompanies.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

// export const {} = companySlice.actions;
export default companySlice.reducer;
