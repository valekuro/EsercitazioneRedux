import initialState from "../initialStates/TodoInitialState";
import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.addElement.push(action.payload);
    },
  },
});

export const { addElement } = TodoSlice.actions;
export default TodoSlice.reducer;
