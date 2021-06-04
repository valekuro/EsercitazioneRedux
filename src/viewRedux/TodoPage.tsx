import { useRef, useState } from "react";
import { useAppDispatch, RootState } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { addElement, editElement, removeElement } from "../reducers/TodoReducer";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function TodoPage() {
  const todoSelector = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previous, setPrevious] = useState<string>("");
  const [enableButtonEdit, setEnableButtonEdit] = useState<string>("none");
  const [enableButtonSave, setEnableButtonSave] = useState<string>("block");

  const handleEditClick = (item: string) => {
    inputRef.current !== null ? (inputRef.current.value = item) : console.log("ciao");
    setPrevious(item);
    setEnableButtonEdit("block");
    setEnableButtonSave("none");
  };
  const handleSaveNewDataClick = () => {
    dispatch(editElement({ previous: previous, now: inputRef.current?.value }));
    setEnableButtonEdit("none");
    setEnableButtonSave("block");
  };
  const handleSaveClick = () => {
    inputRef.current?.value.length !== 0 ? dispatch(addElement(inputRef.current?.value)) : console.log("inserisci una nota!");
    inputRef.current !== null ? (inputRef.current.value = "") : console.log("sono null!");
  };
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <div style={{ display: "inline-flex", flexFlow: "row nowrap", marginLeft: "3em" }}>
        <span>
          <input type="text" placeholder="Inserisci la nota" ref={inputRef} />
        </span>
        <button style={{ display: `${enableButtonSave}` }} onClick={() => handleSaveClick()}>
          save note
        </button>
        <button style={{ display: `${enableButtonEdit}` }} onClick={() => handleSaveNewDataClick()}>
          edit note
        </button>
      </div>
      <ul style={{ marginLeft: "3em", display: "flex", flexFlow: "column wrap" }}>
        {todoSelector.elements.map((item: string, key: number) => {
          return (
            <li key={key} style={{ display: "flex", flexFlow: "row nowrap", border: "1px solid #e7e", alignContent: "space-around", width: "50%" }}>
              <span style={{ flexGrow: 1, width: "50%" }}>{item}</span>
              <span style={{ flexGrow: 1, width: "50%" }}>
                <ButtonOptions onClick={() => dispatch(removeElement(item))}>X</ButtonOptions>
                <ButtonOptions onClick={() => handleEditClick(item)}>
                  <FontAwesomeIcon icon={faEdit} />
                </ButtonOptions>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export const ButtonOptions = styled.button`
  font-weight: 800;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 2em;
  margin-left: 1em;
  color: red;
`;
