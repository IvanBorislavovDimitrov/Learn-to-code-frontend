import React, { Component } from "react";
import qs from 'qs'

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            hideInvalidUsernamePassword: true
        };
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" onSubmit={this.loginUser}>
                        <p className="h4 mb-4">Login</p>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Username"
                            />

                        </div>
                        <div id="passwordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="password"
                                type="password"
                                className="form-control"
                                id="passwordInputField"
                                placeholder="Password"
                            />
                        </div>
                        <div hidden={this.state.hideInvalidUsernamePassword} class="text-danger mb-3">Invalid username or passowrd!</div>
                        <button type="submit" className="btn btn-info btn-block">
                            Login
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }

    loginUser = event => {
        event.preventDefault();

        const currentThis = this;

        async function doLogin() {
            return await fetch(process.env.REACT_APP_URL + '/users/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: qs.stringify({
                    username: currentThis.state.username,
                    password: currentThis.state.password
                })
            });
        }

        doLogin().then(async response => {
            if (response.status === 200) {
                localStorage.setItem('loggedUser', this.state.username);
                const loginResponseBody = await response.json();
                localStorage.setItem('userRoles', loginResponseBody['roles']);
                this.props.history.push('/');
                window.location.reload();
            } else if (response.status === 401) {
                const usernameInputField = document.getElementById('usernameInputField');
                usernameInputField.setAttribute('class', 'form-control is-invalid');
                const passowrdInputField = document.getElementById('passwordInputField');
                passowrdInputField.setAttribute('class', 'form-control is-invalid');
                this.setState({
                    hideInvalidUsernamePassword: false
                });
            } else {
                alert("Login failed. Please check the console for further errors and find a support!");
            }

        });
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

}

export default UserLogin;
