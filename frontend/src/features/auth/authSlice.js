import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin } from "utils/auth.routes";

export const signinUser = createAsyncThunk(
  "/auth/signin",
  async (data, { rejectWithValue }) => {
    try {
      const res = await signin(JSON.stringify(data));
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        return res.data;
      } else {
        return rejectWithValue(res.data);
      }
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    username: null,
    role: null,
    params: "",
    isFetching: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    accessToken: null,
  },

  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isFetching = false;
      state.isError = false;
      state.username = null;
      state.role = null;
      state.accessToken = null;
      return state;
    },
  },
  extraReducers: {
    [signinUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.username = payload.username;
      state.role = payload.role;
      state.accessToken = payload.accessToken;
      state.isFetching = false;
      state.isSuccess = true;
      toast.success(`Welcome ${payload.username}`);

      return state;
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.username = null;
      state.role = null;
      state.accessToken = null;
      state.errorMessage = payload.message;
      toast.error(state.errorMessage);
    },
  },
});

export const { clearState } = authSlice.actions;
export const authSelector = (state) => state.auth;
