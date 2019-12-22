import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Index from "./components/index";
import UserRegister from "./components/user-register";
import UserAuthorize from "./components/user-authorize-github";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/users/authorize" component={UserAuthorize} />
        <Route exact path="/users/register" component={UserRegister} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
