import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
            description: null,
            emailNotEntered: false,
            emailExists: false,
            firstNameNotEntered: false,
            lastNameNotEntered: false,
            usernameNotEntered: false,
            usernameTaken: false,
            phoneNumberNotEntered: false,
            phoneNumberTaken: false,
            birthDateNotEntered: false,
            passwordNotEntered: false,
            confirmPasswordNotEntered: false
        };
        this.profilePictureRef = React.createRef();
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container card">
                    <form className="text-center border border-light p-5" encType="multipart/form-data" 
                        onSubmit={this.registerUser}>
                        <p className="h4 mb-4">Регистрация</p>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="email"
                                type="text"
                                className="form-control"
                                id="emailInputField"
                                aria-describedby="emailHelp"
                                placeholder="Имейл"
                            />
                            <div hidden={!this.state.emailNotEntered} className="text-danger mb-3">Въведи имейл!</div>
                            <div hidden={!this.state.emailExists} className="text-danger mb-3">Имейлът е в употреба избери друг!</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="firstName"
                                type="text"
                                className="form-control"
                                id="firstNameInputField"
                                placeholder="Въведи първо име"
                            />
                            <div hidden={!this.state.firstNameNotEntered} className="text-danger mb-3">Въведи първо име!</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="lastName"
                                type="text"
                                className="form-control"
                                id="lastNameInputField"
                                placeholder="Въведи фамилия"
                            />
                            <div hidden={!this.state.lastNameNotEntered} className="text-danger mb-3">Въведи фамилия!</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Въведи потребителско име"
                            />
                            <div hidden={!this.state.usernameNotEntered} className="text-danger mb-3">Въведи потребителско име!</div>
                            <div hidden={!this.state.usernameTaken} className="text-danger mb-3">Потребителското име е заето, избери друго!</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="description"
                                type="text"
                                className="form-control"
                                id="descriptionInputField"
                                placeholder="Въведи описание"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="phoneNumber"
                                type="text"
                                className="form-control"
                                id="phoneNumberInputField"
                                placeholder="Въведи телефонен номер"
                            />
                            <div hidden={!this.state.phoneNumberNotEntered} className="text-danger mb-3">Въведи телефонен номер!</div>
                            <div hidden={!this.state.phoneNumberTaken} className="text-danger mb-3">Телефонният номер е зает!</div>
                        </div>
                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="birthDate"
                                type="date"
                                className="form-control"
                                id="birthDateInputField"
                                placeholder="Дата на раждане"
                            />
                            <div hidden={!this.state.birthDateNotEntered} className="text-danger mb-3">Въведи дата на раждане!</div>
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
                            <div hidden={!this.state.passwordNotEntered} className="text-danger mb-3">Въведи парола!</div>
                        </div>
                        <div id="confirmPasswordField" className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="confirmPassword"
                                type="password"
                                className="form-control"
                                id="confirmPasswordInputField"
                                placeholder="Потвърди въведената парола"
                            />
                            <div hidden={!this.state.confirmPasswordNotEntered} className="text-danger mb-3">Въведи паролата за потвърждение!</div>
                        </div>
                        <div className="form-group">
                            <small id="fileHelp" className="form-text text-muted">Профилна снимка</small>
                            <input
                                onChange={this.changeInputField}
                                ref={this.profilePictureRef}
                                type="file"
                                className="custom-file"
                                id="profilePicture"
                                aria-describedby="fileHelp"
                                name="profilePicture"
                            />
                        </div>
                        <button type="submit" className="btn btn-info btn-block">
                            Регистрация
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

        if (!this.checkIsValidateFormIsValid()) {
            return;
        }


        const currentThis = this;

        async function doRegister() {
            const registerFormData = new FormData();
            if (currentThis.state.profilePicture != null) {
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
                body: registerFormData
            });
            return registerResponse;
        }

        doRegister().then(async response => {
            if (response.status === 200) {
                this.props.history.push('/');
                window.location.reload();
            } else if (response.status === 400) {
                const jsonResponse = await response.json();
                let responseMap = JSON.parse(JSON.stringify(jsonResponse));
                if (responseMap['type'] === "EmailTakenException") {
                    const emailInputField = document.getElementById('emailInputField');
                    emailInputField.setAttribute('class', 'form-control');
                    this.setState({
                        emailNotEntered: false,
                        emailExists: true
                    });
                    emailInputField.setAttribute('class', 'form-control is-invalid');
                } else if (responseMap['type'] === "UsernameTakenException") {
                    const usernameInputField = document.getElementById('usernameInputField');
                    usernameInputField.setAttribute('class', 'form-control');
                    this.setState({
                        usernameNotEntered: false,
                        usernameTaken: true
                    });
                    usernameInputField.setAttribute('class', 'form-control is-invalid');
                } else if (responseMap['type'] === "PhoneNumberTakenException") {
                    const phoneNumberInputField = document.getElementById('phoneNumberInputField');
                    phoneNumberInputField.setAttribute('class', 'form-control');
                    this.setState({
                        phoneNumberNotEntered: false,
                        phoneNumberTaken: true
                    });
                    phoneNumberInputField.setAttribute('class', 'form-control is-invalid');
                }
            } else {
                alert(await response.text());
            }
        });
    };

    createTextDangerDivElement = id => {
        let invalidFeedbackDiv = document.createElement("div");
        invalidFeedbackDiv.classList.toggle("text-danger");
        invalidFeedbackDiv.id = id;
        invalidFeedbackDiv.textContent = "Паролите на съвпадат!";
        return invalidFeedbackDiv;
    };

    checkIsValidateFormIsValid = () => {
        let isValid = true;
        const emailInputField = document.getElementById('emailInputField');
        emailInputField.setAttribute('class', 'form-control');
        this.setState({
            emailNotEntered: false,
            emailExists: false
        });
        if (this.state.email === null) {
            emailInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                emailNotEntered: true,
                emailExists: false
            });
            isValid = false;
        }
        const firstNameInputField = document.getElementById('firstNameInputField');
        firstNameInputField.setAttribute('class', 'form-control');
        this.setState({
            firstNameNotEntered: false
        });
        if (this.state.firstName === null) {
            firstNameInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                firstNameNotEntered: true
            });
            isValid = false;
        }
        const lastNameInputField = document.getElementById('lastNameInputField');
        lastNameInputField.setAttribute('class', 'form-control');
        this.setState({
            lastNameNotEntered: false
        });
        if (this.state.lastName === null) {
            lastNameInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                lastNameNotEntered: true
            });
            isValid = false
        }
        const usernameInputField = document.getElementById('usernameInputField');
        usernameInputField.setAttribute('class', 'form-control');
        this.setState({
            usernameNotEntered: false,
            usernameTaken: false
        });
        if (this.state.username === null) {
            usernameInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                usernameNotEntered: true,
                usernameTaken: false
            });
            isValid = false;
        }
        const phoneNumberInputField = document.getElementById('phoneNumberInputField');
        phoneNumberInputField.setAttribute('class', 'form-control');
        this.setState({
            phoneNumberNotEntered: false,
            phoneNumberTaken: false
        });
        if (this.state.phoneNumber === null) {
            phoneNumberInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                phoneNumberNotEntered: true,
                phoneNumberTaken: false
            });
            isValid = false;
        }
        const birthDateInputField = document.getElementById('birthDateInputField');
        birthDateInputField.setAttribute('class', 'form-control');
        this.setState({
            birthDateNotEntered: false
        });
        if (this.state.birthDate === null || this.state.birthDate === '') {
            birthDateInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                birthDateNotEntered: true
            });
            isValid = false;
        }
        const passwordInputField = document.getElementById('passwordInputField');
        passwordInputField.setAttribute('class', 'form-control');
        this.setState({
            passwordNotEntered: false
        });
        if (this.state.password === null) {
            passwordInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                passwordNotEntered: true
            });
            isValid = false;
        }
        const confirmPasswordInputField = document.getElementById('confirmPasswordInputField');
        confirmPasswordInputField.setAttribute('class', 'form-control');
        this.setState({
            confirmPasswordNotEntered: false
        });
        if (this.state.password === null) {
            confirmPasswordInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                confirmPasswordNotEntered: true
            });
            isValid = false;
        }
        return isValid;
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default UserRegister;
