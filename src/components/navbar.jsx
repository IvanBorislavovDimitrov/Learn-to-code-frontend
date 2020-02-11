import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    render() {
        let loggedUser = sessionStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        let isAdmin = true;

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Learn To Code</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>

                            <li hidden={isLoggedIn} className="nav-item active">
                                <a className="nav-link" href="/users/login">Log in</a>
                            </li>

                            <li hidden={isLoggedIn} className="nav-item active">
                                <a className="nav-link" href="/users/register">Register</a>
                            </li>

                            <li hidden={!isLoggedIn} className="nav-item active">
                                <button onClick={this.logout} className="btn btn-link nav-link">Logout</button>
                            </li>

                        </ul>
                    </div>
                </nav>
                <nav hidden={!isAdmin} className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="/">Admin Panel</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="/course-categories/add">Add Course Category</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="/courses/add">Add Course</a>
                            </li>

                            <li className="nav-item active">
                                <a className="nav-link" href="/homeworks/add">Add homework</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

    logout = function () {
        sessionStorage.removeItem("loggedUser");
        fetch("http://localhost:8080/users/logout", {
            method: 'POST',
            credentials: 'include',
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        window.location.reload();
    }
}

export default Navbar;
