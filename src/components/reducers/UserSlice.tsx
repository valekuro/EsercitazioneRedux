import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../utils/utils";

export const userSlice = createSlice({
  name: "user",
  initialState: { entities: [], loading: "idle" },
  reducers: {},
  /*  extraReducers: {
    [fetchUsers.fulfilled]<React.AsyncThunkFulfilledActionCreator<Response, void>>: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
  }, */
});

export default userSlice.reducer;
