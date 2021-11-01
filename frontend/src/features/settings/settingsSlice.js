import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: { isOpen: false },
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { setIsOpen } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
