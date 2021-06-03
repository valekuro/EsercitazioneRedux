import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchComments } from "../utils/utils";
import { selectStatus } from "../reducers/CommentSlice";
import { Comments } from "../types/commentType";
export const LoadComments = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <button type="button" onClick={() => dispatch<Comments[]>(fetchComments())}>
      {status === "loading" ? "Loading todos..." : "Load todos"}
    </button>
  );
};
