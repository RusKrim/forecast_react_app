import React from "react";
import { Switch, Route } from "react-router-dom";
// Routes
import { book } from "./book";

// Layouts
// Domains
import { Main } from "../views/Main";

export const Routes = () => (
  <>
    <Switch>
      <Route exact path={book.forecast}>
        <Main />
      </Route>
    </Switch>
  </>
);
