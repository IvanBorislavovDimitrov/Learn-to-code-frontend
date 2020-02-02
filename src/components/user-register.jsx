import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
      phoneNumber: null
    };
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mt-4 container">
          <form onSubmit={this.registerUser}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                onChange={this.emailInputChange}
                name="email"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">First name</label>
              <input
                onChange={this.firstNameInputChange}
                name="firstName"
                type="text"
                className="form-control"
                id="firstNameInputField"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Last name</label>
              <input
                onChange={this.lastNameInputChange}
                name="lastName"
                type="text"
                className="form-control"
                id="lastNameInputField"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                onChange={this.usernameInputChange}
                name="username"
                type="text"
                className="form-control"
                id="usernameInputField"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone number</label>
              <input
                onChange={this.phoneNumberInputChange}
                name="phoneNumber"
                type="text"
                className="form-control"
                id="phoneNumberInputField"
                placeholder="Enter your phone number"
              />
            </div>
            <div id="passwordField" className="form-group">
              <label htmlFor="exampleInputPassword">Password</label>
              <input
                onChange={this.passwordInputChange}
                name="password"
                type="text"
                className="form-control"
                id="passwordInputField"
                placeholder="Password"
              />
            </div>
            <div id="confirmPasswordField" className="form-group">
              <label htmlFor="exampleInputPassword">Confirm password</label>
              <input
                onChange={this.confirmPasswordInputChange}
                name="confirmPassword"
                type="text"
                className="form-control"
                id="confirmPasswordInputField"
                placeholder="Password"
              />
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
    let currentThis = this;
    axios
      .post(
        "http://localhost:8080/users/register",
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          phoneNumber: this.state.phoneNumber,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          email: this.state.email
        },
        {
          headers: {
            "Content-Type": "application/json;charset=ISO-8859-1",
            "Vary": "Access-Control-Request-Headers",
            "Vary": "Access-Control-Request-Method",
            "Vary": "Origin"
          }
        }
      )
      .then(response => {
        console.log(response);
        currentThis.props.history.push('/users/login');
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  createTextDangerDivElement = id => {
    let invalidFeedbackDiv = document.createElement("div");
    invalidFeedbackDiv.classList.toggle("text-danger");
    invalidFeedbackDiv.id = id;
    invalidFeedbackDiv.textContent = "Passwords do not match!";
    return invalidFeedbackDiv;
  };

  emailInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  passwordInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  firstNameInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  lastNameInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  usernameInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  phoneNumberInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  confirmPasswordInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}

export default UserRegister;
