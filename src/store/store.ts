import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/LoginSlice";
import registerReducer from "../reducers/RegSlice";
import commentsReducer from "../reducers/CommentSlice";
import todoReducer from '../reducers/TodoReducer';

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//declare const window: any;
export const store = configureStore({
  reducer: {
    loginReducer,
    registerReducer,
    commentsReducer,
    todoReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); //useDispatch non ne sa nulla del middleware
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //salva il tipo dello stato
