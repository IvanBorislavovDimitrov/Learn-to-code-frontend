import React, {Component} from "react";
import qs from 'qs'
import {Button, Modal} from "react-bootstrap";

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            hideInvalidUsernamePassword: true,
            seen: false,
            emailSent: false
        };
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container card">
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
                        <div hidden={this.state.hideInvalidUsernamePassword} class="text-danger mb-3">Invalid username
                            or password!
                        </div>
                        <button type="submit" className="btn btn-info btn-block">
                            Login
                        </button>
                    </form>
                    <div className="text-center border border-light p-5">
                        {this.showResetPassword()}
                    </div>
                </div>


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

    showResetPassword = () => {
        return (
            <React.Fragment>
                <button className="mt-3 btn btn-danger" onClick={this.show}>
                    Forgotten password
                </button>
                <Modal show={this.state.seen} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Reset your password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="panel panel-default">
                            <div className="text-center">
                                <div className="text-center">
                                    <h3><i className="fa fa-lock fa-4x"/></h3>
                                    <h2 className="text-center">Forgotten Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">

                                        <div id="register-form " className="form">

                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i
                                                        className="glyphicon glyphicon-envelope color-blue"/></span>
                                                    <input id="usernameInputFieldForRest" name="email"
                                                           placeholder="username"
                                                           className="form-control" type="email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input onClick={this.requestResetPassword} name="recover-submit"
                                                       className="btn btn-lg btn-primary btn-block"
                                                       value="Reset Password"/>
                                            </div>
                                            <h3 hidden={!this.state.emailSent} className="text-danger">Email sent!</h3>

                                            <input type="hidden" className="hide" name="token" id="token"
                                                   value=""/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success" variant="secondary" onClick={this.hidePop}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    requestResetPassword = () => {
        const username = document.getElementById('usernameInputFieldForRest').value;
        fetch(process.env.REACT_APP_URL + '/users/forgotten-password/' + username, {
            method: 'POST',
            credentials: 'include'
        }).then(async response => {
            await response.text();
            if (response.status !== 200) {
                const errorResponse = response.json();
                if (errorResponse['']) {

                }
                alert('Password reset not triggered!');
            } else {
                this.setState({
                    emailSent: true
                });
            }
        }).catch(error => {
            console.log(error);
        });
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
