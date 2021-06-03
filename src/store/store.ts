import { createStore } from 'redux';
import rootReducer from '../combineReducer/Reducers'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


declare const window: any;
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>() //useDispatch non ne sa nulla del middleware
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //salva il tipo dello stato