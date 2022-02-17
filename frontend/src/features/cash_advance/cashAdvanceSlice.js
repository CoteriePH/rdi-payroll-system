import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "@/utils/API";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  processedData: [],
  unprocessedData: [],
  dataToRun: [], //BATCH IN MODAL
  batchIdsToExecute: [], //FINAL BATCH IDS
  isError: false,
  isFetching: false,
  isSuccess: false,
  errorMessage: "",
};

export const findAllCashAdvance = createAsyncThunk(
  "/cash-advance/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("cash-advance");
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

export const findAllProcessedCAs = createAsyncThunk(
  "/cash-advance/processed",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("cash-advance", {
        params: {
          status: "PROCESSED",
        },
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

export const findAllUnprocessedCAs = createAsyncThunk(
  "/cash-advance/unprocessed",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("cash-advance", {
        params: {
          status: "UNPROCESSED",
        },
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

export const editCashAdvance = createAsyncThunk(
  "/cash-advance/edit",
  async (values, { rejectWithValue }) => {
    const { id, ...rest } = values;
    try {
      const res = await API.patch(`cash-advance/${id}`, rest);
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

export const declineCashAdvance = createAsyncThunk(
  "/cash-advance/delete",
  async (id, { rejectWithValue }) => {
    try {
      await API.delete(`cash-advance/${id}`, {
        cash_advance_eligibility: 1,
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response.data.error ||
          error.response.data ||
          "Something went wrong!"
      );
    }
  }
);

// TODO BACKEND GENERATE BATCH CA
export const generateCashAdvanceByBatch = createAsyncThunk(
  "/cash-advance/generate-by-batch",
  async (data, { rejectWithValue }) => {
    try {
      let { amount_borrowed, no_of_payments, batchIdsToExecute } = data;
      await Promise.all(
        batchIdsToExecute.map(async (employee_id) => {
          await API.post("cash-advance", {
            amount_borrowed,
            no_of_payments,
            employee_id,
          });
        })
      );
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const generateCashAdvance = createAsyncThunk(
  "/cash-advance/generate",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("cash-advance", data);
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
  name: "cash-advance",
  initialState,
  reducers: {
    toggleEmployeeToRun: (state, action) => {
      const filtered = state.dataToRun.filter(
        (el) => el.id !== action.payload.id
      );
      if (state.dataToRun.length === filtered.length) {
        state.dataToRun = [...state.dataToRun, action.payload];
      } else {
        state.dataToRun = filtered;
      }
    },
    toggleBatchToExecute: (state, action) => {
      const filtered = state.batchIdsToExecute.filter(
        (el) => el !== action.payload
      );
      if (state.batchIdsToExecute.length === filtered.length) {
        state.batchIdsToExecute = [...state.batchIdsToExecute, action.payload];
      } else {
        state.batchIdsToExecute = filtered;
      }
    },
    toggleAll: (state, action) => {},
    resetBatchIdsToExecute: (state) => {
      state.batchIdsToExecute = [];
    },
    resetEmployeeToRun: (state) => {
      state.dataToRun = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllCashAdvance.pending, (state, { payload }) => {
        state.isFetching = true;
      })
      .addCase(findAllCashAdvance.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(findAllCashAdvance.rejected, (state, { payload }) => {
        state.data = [];
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(findAllProcessedCAs.pending, (state, { payload }) => {
        state.isFetching = true;
      })
      .addCase(findAllProcessedCAs.fulfilled, (state, { payload }) => {
        state.processedData = payload;
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(findAllProcessedCAs.rejected, (state, { payload }) => {
        state.processedData = [];
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(findAllUnprocessedCAs.pending, (state, { payload }) => {
        state.isFetching = true;
      })
      .addCase(findAllUnprocessedCAs.fulfilled, (state, { payload }) => {
        state.unprocessedData = payload;
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(findAllUnprocessedCAs.rejected, (state, { payload }) => {
        state.unprocessedData = [];
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;
      })
      .addCase(generateCashAdvance.pending, (state, { payload }) => {
        state.isFetching = true;
      })
      .addCase(generateCashAdvance.fulfilled, (state, { payload }) => {
        state.dataToRun = [];
        state.batchIdsToExecute = [];
        state.isFetching = false;
        state.isSuccess = true;
        toast.success(`Cash advance generated successfully.`);
      })
      .addCase(generateCashAdvance.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
        toast.error(payload);
      })
      .addCase(generateCashAdvanceByBatch.pending, (state, { payload }) => {
        state.isFetching = true;
      })
      .addCase(generateCashAdvanceByBatch.fulfilled, (state, { payload }) => {
        state.dataToRun = [];
        state.batchIdsToExecute = [];
        state.isFetching = false;
        state.isSuccess = true;
        toast.success(`Cash advance generated successfully.`);
      })
      .addCase(generateCashAdvanceByBatch.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
        toast.error("Something went wrong!");
      });
  },
});

export const {
  toggleEmployeeToRun,
  resetEmployeeToRun,
  resetBatchIdsToExecute,
  toggleBatchToExecute,
  toggleAll,
} = companySlice.actions;
export default companySlice.reducer;
