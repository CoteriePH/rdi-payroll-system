import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllDepartments = createAsyncThunk(
  "/departments/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`departments`);
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

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllDepartments.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllDepartments.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllDepartments.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.message;
    },
  },
});

// export const {} = departmentSlice.actions;
export default departmentSlice.reducer;
