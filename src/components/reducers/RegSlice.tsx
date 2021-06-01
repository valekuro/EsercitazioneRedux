import initialState from "../initialStates/RegInitialState";
import { createSlice } from "@reduxjs/toolkit";
export const regSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    add: (state, action) => {
      state.addUser = action.payload;
    },
  },
});

export const { add } = regSlice.actions;
export default regSlice.reducer;
