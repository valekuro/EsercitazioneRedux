import React, { useRef } from "react";
import { useAppDispatch, RootState } from "../store/store";
import { addElement } from "../reducers/TodoReducer";
import { useSelector } from "react-redux";

export default function TodoPage() {
  const todoSelector = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <span>
        <input type="text" placeholder="Inserisci la nota" ref={inputRef} />
      </span>
      <span>
        <button onClick={() => dispatch(addElement(inputRef.current?.value))}>save note</button>
      </span>
      <div>{todoSelector.addElement}</div>
      {/*  <ul>
        {{todoSelector.addElement.map((element: string, key: number) => {
          <li key={key}>{element}</li>;
        })}}
      </ul> */}
    </div>
  );
}
