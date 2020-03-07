import React, { Component } from "react";

class Navbar extends Component {
    state = {};
    render() {
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        let isAdmin = false;
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles !== undefined && userRoles !== null) {
            isAdmin = localStorage.getItem('userRoles').includes('ADMIN');
        }

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
                                <a className="btn btn-info mr-3" href="/">Home</a>
                            </li>

                            <li hidden={isLoggedIn} className="nav-item active">
                                <a className="btn btn-info mr-3" href="/users/login">Log in</a>
                            </li>

                            <li hidden={isLoggedIn} className="nav-item active">
                                <a className="btn btn-info" href="/users/register">Register</a>
                            </li>

                            <li hidden={!isLoggedIn} className="nav-item active">
                                <button onClick={this.logout} className="btn btn-danger">Logout</button>
                            </li>

                            <li hidden={!isAdmin} className="ml-3 nav-item active">
                                <a className="btn btn-danger" href="/admin/index">Open Admin UI</a>
                            </li>

                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }

    logout = function () {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('userRoles');
        fetch(process.env.REACT_APP_URL + "/users/logout", {
            method: 'POST',
            credentials: 'include',
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        window.location.reload();
    }
}

export default Navbar;
