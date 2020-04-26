import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route, Switch, Link, Redirect} from "react-router-dom";
import Index from "./components/index";
import UserRegister from "./components/user-register";
import UserAuthorize from "./components/user-authorize-github";
import UserLogin from "./components/user-login";
import Navbar from "./components/navbar";
import AddCourseCategory from "./components/course-category-add";
import Footer from "./components/footer";
import AdminUI from './components/admin-ui'
import FirstEnter from './components/first-enter'
import ChangeUserRole from "./components/change-user-role";
import DeleteUser from './components/delete-user'
import ModeratorUI from './components/moderator-ui';
import AddNewCourse from './components/add-new-course';
import Courses from './components/courses';
import ViewCourse from './components/view-course';
import FinishCartPurchase from "./components/finish-cart-purchase";
import UpdateCourseCategory from "./components/course-category-update";

function App() {
    setTimeout(function () {
        localStorage.clear();
    }, (24 * 60 * 60 * 1000));
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/users/authorize" component={UserAuthorize}/>
                <Route exact path="/users/login" component={UserLogin}/>
                <Route exact path="/users/register" component={UserRegister}/>
                <Route exact path="/course-categories/add" component={AddCourseCategory}/>
                <Route exact path="/admin/index" component={AdminUI}/>
                <Route exact path="/first/enter" component={FirstEnter}/>
                <Route exact path="/admin/change-user-role" component={ChangeUserRole}/>
                <Route exact path="/admin/delete-user" component={DeleteUser}/>
                <Route exact path="/moderator/index" component={ModeratorUI}/>
                <Route exact path="/courses/add-new-course" component={AddNewCourse}/>
                <Route exact path="/courses" component={Courses}/>
                <Route path="/courses/view" component={ViewCourse}/>
                <Route exact path="/courses/cart/finish-cart-purchase" component={FinishCartPurchase}/>
                <Route exact path="/course-categories/update" component={UpdateCourseCategory}/>

            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
