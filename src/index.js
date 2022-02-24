import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store, persistor } from "./redux/store";
// import { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
