import React, { Component } from "react";
import qs from 'qs'
import { Button, Modal } from "react-bootstrap";

class ChangePassword extends Component {
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
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" onSubmit={this.changePassword}>
                        <p className="h4 mb-4">Нова парола</p>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="password"
                                type="password"
                                className="form-control"
                                id="newPasswordInputField"
                                placeholder="Нова парола"
                            />

                        </div>
                        <p className="h4 mb-4">Повтори новата парола</p>
                        <div id="passwordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="confirmNewPasswordInputField"
                                type="password"
                                className="form-control"
                                id="confirmNewPasswordInputField"
                                placeholder="Повтори новата парола"
                            />
                        </div>
                        <div hidden={this.state.hideInvalidUsernamePassword} class="text-danger mb-3">Невалидно потребителско име или парола.</div>
                        <button type="submit" className="btn btn-info btn-block">
                            Промени парола
                        </button>
                    </form>

                </div>
            </React.Fragment>
        );
    }

    changePassword = (event) => {
        event.preventDefault();
        const requestPasswordChangeToken = this.getToken();
        const password = document.getElementById('newPasswordInputField').value;
        const confirmPassword = document.getElementById('confirmNewPasswordInputField').value;
        const changePasswordBody = {
            token: requestPasswordChangeToken,
            password: password,
            confirmPassword: confirmPassword
        }
        fetch(process.env.REACT_APP_URL + '/users/change-forgotten-password', {
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify(changePasswordBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            await response.text();
            if (response.status === 200) {
                this.props.history.push('/users/login');
                window.location.reload();
                alert("Your password has been changed!");
            } else {
                alert("Password change failed!");
            }
        }).catch(error => {
            console.log(error);
        })
    }


    getToken = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    }
}

export default ChangePassword;
