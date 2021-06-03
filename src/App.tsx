import { store } from "./store/store";
import { Provider } from "react-redux";
import LoginPage from "./viewRedux/LoginPage";
import RegPage from "./viewRedux/RegPage";
import { LoadComments } from "./viewRedux/CommentsPage";
function App() {
  return (
    <Provider store={store}>
      <LoginPage />
      <RegPage />
      <LoadComments />
    </Provider>
  );
}

export default App;
