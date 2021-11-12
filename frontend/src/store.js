import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { authSlice } from "@/features/auth/authSlice";
import { settingsSlice } from "@/features/settings/settingsSlice";
import employeeSlice from "@/features/employee/employeeSlice";
import departmentSlice from "@/features/department/departmentSlice";
import positionSlice from "@/features/position/positionSlice";
import companySlice from "@/features/company/companySlice";
import requestSlice from "@/features/request/requestSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cashAdvanceSlice from "./features/cash_advance/cashAdvanceSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  settings: settingsSlice.reducer,
  employees: employeeSlice,
  departments: departmentSlice,
  positions: positionSlice,
  companies: companySlice,
  requests: requestSlice,
  cash_advance: cashAdvanceSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
