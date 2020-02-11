import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Index from "./components/index";
import UserRegister from "./components/user-register";
import UserAuthorize from "./components/user-authorize-github";
import UserLogin from "./components/user-login";
import Navbar from "./components/navbar";
import AddCourseCategory from "./components/course-category-add";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/users/authorize" component={UserAuthorize} />
        <Route exact path="/users/login" component={UserLogin} />
        <Route exact path="/users/register" component={UserRegister} />
        <Route exact path="/course-categories/add" component={AddCourseCategory} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
