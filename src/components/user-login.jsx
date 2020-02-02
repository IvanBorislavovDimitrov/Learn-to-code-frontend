import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import qs from 'qs'

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 mt-4 container">
          <form onSubmit={this.loginUser}>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }

  loginUser = event => {
    event.preventDefault();

    const httpLoginRequest = new XMLHttpRequest();
    const loginUrl = "http://localhost:8080/users/login";
    httpLoginRequest.open("POST", loginUrl);
    httpLoginRequest.withCredentials = true;
    httpLoginRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let currentThis = this;
    httpLoginRequest.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        console.log("Status: ", this.status);
        if (this.status === 200) {
          sessionStorage.setItem('loggedUser', currentThis.state.username);
          currentThis.props.history.push('/');
          window.location.reload();
        } else {
          alert("Invalid username and/or password");
        }
      }
    }
    httpLoginRequest.send(qs.stringify({
      username: this.state.username,
      password: this.state.password
    }));

  };

  usernameInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  passwordInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

}

export default UserLogin;
