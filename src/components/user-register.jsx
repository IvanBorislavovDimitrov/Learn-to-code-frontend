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
      profilePicture: null
    };
    this.fileInput = React.createRef();
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mt-4 container">
          <form encType="multipart/form-data" onSubmit={this.registerUser}>
            <div className="form-group">
              <label htmlFor="inputEmailField">Email address</label>
              <input
                onChange={this.changeInputField}
                name="email"
                type="text"
                className="form-control"
                id="inputEmailField"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstNameInputField">First name</label>
              <input
                onChange={this.changeInputField}
                name="firstName"
                type="text"
                className="form-control"
                id="firstNameInputField"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastNameInputField">Last name</label>
              <input
                onChange={this.changeInputField}
                name="lastName"
                type="text"
                className="form-control"
                id="lastNameInputField"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="usernameInputField">Username</label>
              <input
                onChange={this.changeInputField}
                name="username"
                type="text"
                className="form-control"
                id="usernameInputField"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumberInputField">Phone number</label>
              <input
                onChange={this.changeInputField}
                name="phoneNumber"
                type="text"
                className="form-control"
                id="phoneNumberInputField"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthDateInputField">Date of birth</label>
              <input
                onChange={this.changeInputField}
                name="birthDate"
                type="date"
                className="form-control"
                id="birthDateInputField"
                placeholder="Enter you birth date"
              />
            </div>
            <div id="passwordField" className="form-group">
              <label htmlFor="passwordInputField">Password</label>
              <input
                onChange={this.changeInputField}
                name="password"
                type="text"
                className="form-control"
                id="passwordInputField"
                placeholder="Password"
              />
            </div>
            <div id="confirmPasswordField" className="form-group">
              <label htmlFor="confirmPasswordInputField">Confirm password</label>
              <input
                onChange={this.changeInputField}
                name="confirmPassword"
                type="text"
                className="form-control"
                id="confirmPasswordInputField"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label for="profilePicture">Profile Picture</label>
              <input
                onChange={this.changeInputField}
                ref={this.fileInput}
                type="file"
                class="form-control-file"
                id="profilePicture"
                aria-describedby="fileHelp"
                name="profilePicture"
              />
              <small id="fileHelp" class="form-text text-muted">Avatar</small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
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
        registerFormData.append('profilePicture', new Blob([currentThis.state.profilePicture]), currentThis.fileInput.current.files[0].name);
      }
      registerFormData.append('email', currentThis.state.email);
      registerFormData.append('firstName', currentThis.state.firstName);
      registerFormData.append('lastName', currentThis.state.lastName);
      registerFormData.append('username', currentThis.state.username);
      registerFormData.append('phoneNumber', currentThis.state.phoneNumber);
      registerFormData.append('birthDate', currentThis.state.birthDate);
      registerFormData.append('password', currentThis.state.password);
      registerFormData.append('confirmPassword', currentThis.state.confirmPassword);

      const registerResponse = await fetch(process.env.REACT_APP_URL + '/users/register', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        body: registerFormData
      });
      return registerResponse;
    }

    doRegister().then(async respone => {
      if (respone.status === 200) {
        this.props.history.push('/');
        window.location.reload();
      } else {
        alert("Register failed!");
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
