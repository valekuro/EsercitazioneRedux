import React, { useState } from "react";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector, RootState } from "../store/store";
import { fetchComments } from "../utils/utils";
import { selectStatus, selectItems } from "../reducers/CommentSlice";
import { Comments } from "../types/commentType";
export const LoadComments = () => {
  const [state, setstate] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const data = useAppSelector(selectItems);
  const handleClick = () => {
    (dispatch as ThunkDispatch<RootState, unknown, AnyAction>)(fetchComments());
    setstate(!state);
  };
  return (
    /* dispatch non conosce il thunk quindi devo passare manualmente il thunkdispatch per farglielo conoscere */
    <div style={{ marginLeft: "3em" }}>
      <button type="button" onClick={handleClick}>
        {status}
      </button>
      {state ? (
        <ul>
          {data.map((item: Comments[], key: number) => {
            return item.map((i: Comments, k: number) => {
              console.log(i);
              return (
                <li key={k}>
                  {k} - {i.name}
                </li>
              );
            });
          })}
        </ul>
      ) : null}
    </div>
  );
};
