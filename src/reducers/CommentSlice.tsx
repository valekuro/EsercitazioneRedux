import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchComments } from "../utils/utils";
import { Comments } from "../types/commentType";
import { RootState } from "../store/store";
//ogni slice deve definire un tipo per il suo stato iniziale => create slice riesce a impostare  il giusto tipo di stato in ogni caso del reducer
type CommentsState = {
  status: "loading" | "idle";
  error: string | null;
  list: Comments[];
};

const initialState = {
  list: [],
  error: null,
  status: "idle",
} as CommentsState;

export const selectStatus = (state: RootState) => state.commentsReducer.status;

export const commentSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {},
  /*extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.status = "loading";
      //state.error = null;
    });
    builder.addCase(fetchComments.fulfilled, (state, { payload }) => {
      state.list.push(...payload);
      state.status = "idle";
    });
    builder.addCase(fetchComments.rejected, (state, { payload }) => {
      // if (payload) state.error = payload.message;
      state.status = "idle";
    });
  }, */
  extraReducers: {
    [fetchComments.fulfilled.toString()]: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export default commentSlice.reducer;
