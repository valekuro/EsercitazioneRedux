import initialState from "../initialStates/InitialState";
import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    status: (state, action) => {
      state.isLogged = action.payload;
    },
    user: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { status, user } = loginSlice.actions;
export default loginSlice.reducer;
