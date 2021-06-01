import { store } from "./store/store";
import { Provider } from "react-redux";
import LoginPage from "./components/viewRedux/LoginPage";
import RegPage from "./components/viewRedux/RegPage";
function App() {
  return (
    <Provider store={store}>
      <LoginPage />
      <RegPage />
    </Provider>
  );
}

export default App;
