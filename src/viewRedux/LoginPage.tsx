import { useAppDispatch, RootState } from "../store/store";
import { status, user } from "../reducers/LoginSlice";
import { useSelector } from "react-redux";

export default function LoginPage() {
  const loginBoole = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <span>
        <h1>PAGINA PROVA DI REDUX</h1>
        <h3> Ciao, {loginBoole.nickname}</h3>
        <button
          style={{ marginRight: "2em" }}
          onClick={() => {
            dispatch(status(true));
            dispatch(user("pippo"));
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            dispatch(status(false));
            dispatch(user("guest"));
          }}
        >
          logout
        </button>
      </span>
    </div>
  );
}
