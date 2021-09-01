import * as React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { FormPage } from "./FormPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import NavigationBar from "./NavigationBar";
import { PostPage } from "./PostPage";

export function App() {
  return (
    <HashRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
