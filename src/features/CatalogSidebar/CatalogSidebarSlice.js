import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateName: "init",
  toggleSidebar: false
};

const catalogSidebarSlice = createSlice({
  name: "toggleSwitch",
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
  },
});
export const getToggleSidebar = (state) => state.toggleSidebar.value;
export const { toggle } = catalogSidebarSlice.actions;
export default catalogSidebarSlice.reducer;
