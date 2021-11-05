import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth/authSlice';
import { settingsSlice } from 'features/settings/settingsSlice';
import employeeSlice from 'features/employee/employeeSlice';
import departmentSlice from 'features/department/departmentSlice';
import positionSlice from 'features/position/positionSlice';
import companySlice from 'features/company/companySlice';
import requestSlice from 'features/request/requestSlice';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    settings: settingsSlice.reducer,
    employees: employeeSlice,
    departments: departmentSlice,
    positions: positionSlice,
    companies: companySlice,
    requests: requestSlice
  }
});
