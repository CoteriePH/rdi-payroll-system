import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin } from "@/utils/auth.routes";
import API from "@/utils/API";

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

export const verifyAuth = createAsyncThunk(
  "/auth/verify-auth",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`auth/verify-token`, {
        headers: { auth: localStorage.getItem("token") },
      });
      if (res.status === 200) {
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

const initialState = {
  username: "",
  role: "",
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearState: (state) => {
      state.isSuccess = false;
      state.isFetching = false;
      state.isError = false;

      return state;
    },
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
  extraReducers: {
    [signinUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      state.username = payload.username;
      state.role = payload.role;
      state.isFetching = false;
      state.isSuccess = true;
      state.isAuth = true;
      toast?.success(`Welcome ${payload.username}`);
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      toast?.error(state.errorMessage);
    },
    [verifyAuth.pending]: (state) => {
      state.isFetching = true;
    },
    [verifyAuth.fulfilled]: (state, { payload }) => {
      state.username = payload.username;
      state.role = payload.role;
      state.isFetching = false;
      state.isSuccess = true;
      state.isAuth = true;
    },
    [verifyAuth.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      state.isAuth = false;
    },
  },
});

export const { clearState, logout } = authSlice.actions;
export const authSelector = (state) => state.auth;
