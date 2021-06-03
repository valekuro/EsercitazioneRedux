import { Comments } from "../types/commentType";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchComments = createAsyncThunk("comments/fetchAllComments", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  /*   const response = await fetch("https://jsonplaceholder.typicode.com/posts/${id}/comments");
   */ return (await response.json()) as Comments[];
});
