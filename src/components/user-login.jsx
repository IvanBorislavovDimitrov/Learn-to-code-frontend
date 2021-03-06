import React, { Component } from "react";
import qs from 'qs'
import { Button, Modal } from "react-bootstrap";
import JwtDecoder from './jwt/jwt-decoder'

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
                        <p className="h4 mb-4">Вход</p>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Потребителско име"
                            />

                        </div>
                        <div id="passwordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="password"
                                type="password"
                                className="form-control"
                                id="passwordInputField"
                                placeholder="Парола"
                            />
                        </div>
                        <div hidden={this.state.hideInvalidUsernamePassword} className="text-danger mb-3">Невалидно потребителско име или парола
                        </div>
                        <button type="submit" className="btn btn-info btn-block">
                            Вход
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
                    Забравена парола
                </button>
                <Modal show={this.state.seen} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Възстанови забравена парола</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="panel panel-default">
                            <div className="text-center">
                                <div className="text-center">
                                    <h3><i className="fa fa-lock fa-4x" /></h3>
                                    <h2 className="text-center">Забравена парола?</h2>
                                    <p>Можеш да промениеш паролата си тук.</p>
                                    <div className="panel-body">

                                        <div id="register-form " className="form">

                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i
                                                        className="glyphicon glyphicon-envelope color-blue" /></span>
                                                    <input id="usernameInputFieldForRest" name="email"
                                                        placeholder="Потребителско име"
                                                        className="form-control" type="email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <input onClick={this.requestResetPassword} name="recover-submit"
                                                    className="btn btn-lg btn-primary btn-block"
                                                    value="Нулирай парола" />
                                            </div>
                                            <h3 hidden={!this.state.emailSent} className="text-danger">Имелй ви бе изпратен!</h3>

                                            <input type="hidden" className="hide" name="token" id="token"
                                                value="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-success" variant="secondary" onClick={this.hidePop}>Затвори</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    requestResetPassword = () => {
        const username = document.getElementById('usernameInputFieldForRest').value;
        fetch(process.env.REACT_APP_URL + '/users/forgotten-password/' + username, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            await response.text();
            if (response.status !== 200) {
                const errorResponse = response.json();
                if (errorResponse['']) {

                }
                alert('Проманята на паролата не бе задействана. Моля опитайте отново!');
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
            return await fetch(process.env.REACT_APP_URL + '/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: currentThis.state.username,
                    password: currentThis.state.password
                })
            });
        }

        doLogin().then(async response => {
            if (response.status === 200) {
                localStorage.setItem('loggedUser', this.state.username);
                const loginResponseBody = await response.json();
                const token = loginResponseBody['token'];
                const jwtDecoder = new JwtDecoder();
                const decodedToken = jwtDecoder.decodeToken(token);
                const roles = decodedToken['roles'];
                localStorage.setItem('token', token);
                localStorage.setItem('userRoles', roles);
                window.location.href = '/';
            } else if (response.status === 401) {
                const usernameInputField = document.getElementById('usernameInputField');
                usernameInputField.setAttribute('class', 'form-control is-invalid');
                const passwordInputField = document.getElementById('passwordInputField');
                passwordInputField.setAttribute('class', 'form-control is-invalid');
                this.setState({
                    hideInvalidUsernamePassword: false
                });
            } else {
                alert("Входът се провали. Моля опитайте отново!");
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
