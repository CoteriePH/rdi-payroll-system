import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: null,
};

export const findAllRequests = createAsyncThunk(
  "/requests/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`requests`);
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

export const addRequest = createAsyncThunk(
  "/requests/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post(`requests`, data);
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

const requestSlice = createSlice({
  name: "request",
  initialState,

  extraReducers: {
    [findAllRequests.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllRequests.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllRequests.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [addRequest.pending]: (state) => {
      state.isFetching = true;
    },
    [addRequest.fulfilled]: (state) => {
      // TODO - Di ko alam kung tama tong pinag gagagawa ko haha
      // state.data = [...state.data, payload];
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Request Sent.`);
    },
    [addRequest.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast.error(payload);
    },
  },
});

// export const {  } = requestSlice.actions;
export default requestSlice.reducer;
