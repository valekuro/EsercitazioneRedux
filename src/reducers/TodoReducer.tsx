import initialState from "../initialStates/TodoInitialState";
import { createSlice } from "@reduxjs/toolkit";
export const TodoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    removeElement: (state, action) => {
      console.log("Hai eliminato l'elemento  ", action.payload, "  con indice  ", state.elements.indexOf(action.payload));
      const index = state.elements.indexOf(action.payload);
      state.elements.splice(index, 1);
    },
    editElement: (state, action) => {
      const index = state.elements.indexOf(action.payload.previous);
      state.elements.splice(index, 1);
      state.elements.push(action.payload.now);
    },
  },
});

export const { addElement, removeElement, editElement } = TodoSlice.actions;
export default TodoSlice.reducer;
