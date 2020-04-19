import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class Navbar extends Component {
    state = {
        seen: false,
    };

    render() {
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        let isAdmin = false;
        let isModerator = false;
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles !== undefined && userRoles !== null) {
            isAdmin = userRoles.includes('ADMIN');
            isModerator = userRoles.includes('MODERATOR');
        }

        return (
            <React.Fragment>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Learn To Code</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ml-auto">

                            <li className="nav-item active">
                                <a className="btn btn-info mr-3" href="/">Home</a>
                            </li>

                            <li className="nav-item active">
                                <a className="btn btn-info mr-3" href="/courses">Courses</a>
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

                            <li hidden={!isModerator} className="ml-3 nav-item active">
                                <a className="btn btn-danger" href="/moderator/index">Open Moderator UI</a>
                            </li>

                            <li hidden={!isAdmin} className="ml-3 nav-item active">
                                <a className="btn btn-danger" href="/admin/index">Open Admin UI</a>
                            </li>

                            <li className="ml-3 nav-item active">
                                {this.showShoppingCart()}
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

    showShoppingCart = () => {
        return (
            <React.Fragment>
                <button className="btn btn-primary" variant="primary" onClick={this.show}>
                    <i className="fa fa-shopping-cart fa-1x"></i> Shopping cart
                </button>
                <Modal show={this.state.seen} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Courses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="users"></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hidePop}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    show = () => {
        this.setState({
            seen: true
        });
    };

    hidePop = () => {
        this.setState({
            seen: false
        });
    };
}

export default Navbar;
