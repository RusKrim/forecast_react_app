import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./navigation/history";
import { Routes } from "./navigation";
import { store } from "./init/store";
import * as moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};
