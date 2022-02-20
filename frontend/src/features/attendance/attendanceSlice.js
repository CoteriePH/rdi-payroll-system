import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllAttendance = createAsyncThunk(
  "/attendances/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`attendances`);
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

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllAttendance.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllAttendance.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllAttendance.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload?.message;
    },
  },
});

// export const {} = attendanceSlice.actions;
export default attendanceSlice.reducer;
