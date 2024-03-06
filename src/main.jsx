import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./feature/userslice";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UserProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </UserProvider> */}
  </React.StrictMode>
);
