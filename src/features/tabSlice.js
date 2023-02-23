import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  control: {
    add: { show: false, data: null },
    edit: { show: false, data: null },
  },
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
    resetTab: (state) => {
      state.control = {
        add: { show: false, data: null },
        edit: { show: false, data: null },
      };
    },
  },
});

export const { showAdd, showEdit, resetTab } = tabSlice.actions;
export const selectTab = (state) => state.tabcontrollerstore.control;

export default tabSlice.reducer;
