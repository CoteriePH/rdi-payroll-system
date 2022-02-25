import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";
import download from "downloadjs";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllEntries = createAsyncThunk(
  "/entries/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`entries`);
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

export const addEntry = createAsyncThunk(
  "/entries/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post(`entries`, data);
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

const entrySlice = createSlice({
  name: "entry",
  initialState,

  extraReducers: {
    [findAllEntries.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllEntries.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllEntries.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
    },
    [addEntry.pending]: (state) => {
      state.isFetching = true;
    },
    [addEntry.fulfilled]: (state) => {
      // TODO - Di ko alam kung tama tong pinag gagagawa ko haha
      // state.data = [...state.data, payload];
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Successfully added an entry.`);
    },
    [addEntry.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast.error(payload);
    },
  },
});

// export const {  } = entrySlice.actions;
export default entrySlice.reducer;
