import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllSchedules = createAsyncThunk(
  "/schedules/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`schedules`);
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

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllSchedules.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllSchedules.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllSchedules.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

// export const {} = scheduleSlice.actions;
export default scheduleSlice.reducer;
