import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  control: {
    add: { show: false, data: null },
    edit: { show: false, data: null },
  },
  isSubmitted: false,
};

export const tabSlice = createSlice({
  name: "tabcontrollerstore",
  initialState,
  reducers: {
    showAdd: (state, action) => {
      state.control = {
        add: { show: true, data: null },
        edit: { show: false, data: null },
      };
    },

    showEdit: (state, action) => {
      state.control = {
        add: { show: false, data: null },
        edit: { show: true, data: action.payload },
      };
    },
    showIsSubmitted: (state, action) => {
      state.isSubmitted = !state.isSubmitted;
    },
    resetTab: (state) => {
      state.control = {
        add: { show: false, data: null },
        edit: { show: false, data: null },
      };
    },
  },
});

export const { showAdd, showEdit, resetTab, showIsSubmitted } =
  tabSlice.actions;
export const selectTab = (state) => state.tabcontrollerstore.control;
export const selectIsSubmitted = (state) =>
  state.tabcontrollerstore.isSubmitted;
export default tabSlice.reducer;
