import * as React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { FormPage } from "./FormPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
