import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from 'utils/API';

const initialState = {
  data: [],
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: ''
};

export const findAllPositions = createAsyncThunk(
  '/positions/all',
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get(`positions`);
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

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {},
  extraReducers: {
    [findAllPositions.pending]: (state) => {
      state.isFetching = true;
    },
    [findAllPositions.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isFetching = false;
      state.isSuccess = true;
    },
    [findAllPositions.rejected]: (state, { payload }) => {
      state.data = [];
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    }
  }
});

// export const {} = positionSlice.actions;
export default positionSlice.reducer;
