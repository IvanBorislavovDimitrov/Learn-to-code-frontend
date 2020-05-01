import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

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
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Learn To Code</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ml-auto">

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle mr-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
  </button>
                                <div id="categories" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                </div>
                            </div>

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
                                <a className="btn btn-info mr-3" href="/github/check-repositories">Repositories</a>
                            </li>

                            <li hidden={!isLoggedIn} className="nav-item active">
                                <a className="btn btn-info mr-3" href="https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Link GitHub Account</a>
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
                        <Modal.Title>Shopping cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="users">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="table">

                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success" variant="secondary" onClick={this.hidePop}>Close</Button>
                        <a className="btn btn-warning" variant="secondary" href="/courses/cart/finish-cart-purchase">Finish
                            purchase</a>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.isStillLogged();
        this.loadCategories();
    }

    show = () => {
        this.getCoursesInCart();
        this.setState({
            seen: true
        });
    };

    hidePop = () => {
        this.setState({
            seen: false
        });
    };

    getCoursesInCart = () => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/courses/cart/all', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            const coursesInCart = JSON.parse(JSON.stringify(jsonResponse));
            coursesInCart.forEach(course => {
                const table = document.getElementById('table');
                const tr = document.createElement('tr');
                const courseName = document.createElement('td');
                courseName.textContent = course['name'];
                const coursePrice = document.createElement('td');
                coursePrice.textContent = '$' + course['price'];
                const actions = document.createElement('td');
                const removeButton = document.createElement('button');
                removeButton.setAttribute('class', 'btn btn-danger btn-sm');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => {
                    async function removeFromCart() {
                        return await fetch(process.env.REACT_APP_URL + '/courses/cart/remove/' + course['name'], {
                            method: 'POST',
                            credentials: 'include',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }

                    removeFromCart().then(async response => {
                        if (response.status === 200) {
                            table.innerText = '';
                            currentThis.getCoursesInCart();
                        } else {
                            alert('Add to cart failed!');
                        }
                    });
                };
                actions.appendChild(removeButton);
                tr.appendChild(courseName);
                tr.appendChild(coursePrice);
                tr.appendChild(actions);
                table.appendChild(tr);
            });
        }).catch(error => {
            console.log(error);
        });
    }

    isStillLogged = () => {
        let loggedUser = localStorage.getItem('loggedUser');
        fetch(process.env.REACT_APP_URL + '/users/session', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                const jsonResponse = await response.json();
                const userMap = JSON.parse(JSON.stringify(jsonResponse));
                console.log(userMap['username']);
                if (loggedUser !== userMap['username']) {
                    localStorage.removeItem('loggedUser');
                    localStorage.removeItem('userRoles');
                    if (loggedUser != undefined && loggedUser != null) {
                        window.location.reload();
                    }
                }
            }
        }).catch(error => {
            console.log(error);
        });
    }

    loadCategories = () => {
        fetch(process.env.REACT_APP_URL + '/course-categories', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            let categories = JSON.parse(JSON.stringify(jsonResponse));
            const categoriesField = document.getElementById('categories');
            categories.forEach(category => {
                const a = document.createElement('a');
                a.setAttribute('class', 'dropdown-item');
                a.href = '/courses?category=' + category['name'];
                a.textContent = category['name'];
                categoriesField.appendChild(a);
            })
        }).catch(error => {
            console.log(error);
        })
    }

}

export default Navbar;
