import React from "react";
import { Switch, Route } from "react-router-dom";
// Routes
import { book } from "./book";

// Layouts
import * as Views from "../views";

// Domains
import { Forecast } from "../bus/forecast";

export const Routes = () => (
  <>
    <Switch>
      <Route exact path={book.forecast}>
        <Views.Home>
          <Forecast />
        </Views.Home>
      </Route>
    </Switch>
  </>
);
