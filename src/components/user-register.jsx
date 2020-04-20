import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import qs from 'qs';

class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            firstName: null,
            lastName: null,
            username: null,
            phoneNumber: null,
            birthDate: null,
            profilePicture: null,
            description: null
        };
        this.profilePictureRef = React.createRef();
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" encType="multipart/form-data"
                          onSubmit={this.registerUser}>
                        <p class="h4 mb-4">Register</p>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="email"
                                type="text"
                                className="form-control mb-4"
                                id="inputEmailField"
                                aria-describedby="emailHelp"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="firstName"
                                type="text"
                                className="form-control mb-4"
                                id="firstNameInputField"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="lastName"
                                type="text"
                                className="form-control mb-4"
                                id="lastNameInputField"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="username"
                                type="text"
                                className="form-control mb-4"
                                id="usernameInputField"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="description"
                                type="text"
                                className="form-control mb-4"
                                id="descriptionInputField"
                                placeholder="Enter description (optional)"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="phoneNumber"
                                type="text"
                                className="form-control mb-4"
                                id="phoneNumberInputField"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="birthDate"
                                type="date"
                                className="form-control mb-4"
                                id="birthDateInputField"
                                placeholder="Enter you birth date"
                            />
                        </div>
                        <div id="passwordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="password"
                                type="text"
                                className="form-control mb-4"
                                id="passwordInputField"
                                placeholder="Password"
                            />
                        </div>
                        <div id="confirmPasswordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="confirmPassword"
                                type="text"
                                className="form-control mb-4"
                                id="confirmPasswordInputField"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="form-group">
                            <small id="fileHelp" class="form-text text-muted">Avatar</small>
                            <input
                                onChange={this.changeInputField}
                                ref={this.profilePictureRef}
                                type="file"
                                class="custom-file"
                                id="profilePicture"
                                aria-describedby="fileHelp"
                                name="profilePicture"
                            />
                        </div>
                        <button type="submit" className="btn btn-info btn-block">
                            Register
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }

    registerUser = event => {
        event.preventDefault();
        let passwordField = document.getElementById("passwordField");
        let confirmPasswordField = document.getElementById("confirmPasswordField");
        if (this.state.password !== this.state.confirmPassword) {
            passwordField.appendChild(
                this.createTextDangerDivElement("passwordFieldInvalidText")
            );
            confirmPasswordField.appendChild(
                this.createTextDangerDivElement("confirmPasswordFieldInvalidText")
            );
            return;
        }

        const currentThis = this;

        async function doRegister() {
            const registerFormData = new FormData();
            if (currentThis.state.profilePicture !== null) {
                registerFormData.append('profilePicture', currentThis.profilePictureRef.current.files[0]);
            }
            registerFormData.append('email', currentThis.state.email);
            registerFormData.append('firstName', currentThis.state.firstName);
            registerFormData.append('lastName', currentThis.state.lastName);
            registerFormData.append('username', currentThis.state.username);
            registerFormData.append('phoneNumber', currentThis.state.phoneNumber);
            registerFormData.append('birthDate', currentThis.state.birthDate);
            registerFormData.append('password', currentThis.state.password);
            registerFormData.append('confirmPassword', currentThis.state.confirmPassword);
            registerFormData.append('description', currentThis.state.description);

            const registerResponse = await fetch(process.env.REACT_APP_URL + '/users/register', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: registerFormData
            });
            return registerResponse;
        }

        doRegister().then(async response => {
            if (response.status === 200) {
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert(await response.text());
            }
        });
    };

    createTextDangerDivElement = id => {
        let invalidFeedbackDiv = document.createElement("div");
        invalidFeedbackDiv.classList.toggle("text-danger");
        invalidFeedbackDiv.id = id;
        invalidFeedbackDiv.textContent = "Passwords do not match!";
        return invalidFeedbackDiv;
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default UserRegister;
