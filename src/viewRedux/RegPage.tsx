import { useAppDispatch, RootState } from "../store/store";
import { add } from "../reducers/RegSlice";
import { useSelector } from "react-redux";

export default function RegPage() {
  const reg = useSelector((state: RootState) => state.registerReducer);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2em",
        flexFlow: "column nowrap",
      }}
    >
      <span>
        <button onClick={() => dispatch(add("pluto taken!"))}>take a pluto</button>
      </span>
      <h3>{reg.addUser}</h3>
    </div>
  );
}
