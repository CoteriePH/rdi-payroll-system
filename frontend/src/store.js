import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth/authSlice';
import { settingsSlice } from 'features/settings/settingsSlice';
import employeeSlice from 'features/employee/employeeSlice';

export default configureStore({
  reducer: { auth: authSlice.reducer, settings: settingsSlice.reducer, employees: employeeSlice }
});
