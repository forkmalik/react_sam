import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";

let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} store={store}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//33 was
