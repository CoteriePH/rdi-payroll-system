import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: { isOpen: false, filters: {} },
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    addFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    removeFilters: (state, action) => {
      // todo
      // state.filters = [];
    },
    resetFilters: (state, action) => {
      // reset filters
      state.filters = {};
    },
  },
});

export const { setIsOpen, addFilter, resetFilters } = settingsSlice.actions;
export const settingsSelector = (state) => state.settings;
