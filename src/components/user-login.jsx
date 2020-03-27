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
          <form className="text-center border border-light p-5" onSubmit={this.loginUser}>
          <p class="h4 mb-4">Login</p>
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
                type="text"
                className="form-control"
                id="passwordInputField"
                placeholder="Password"
              />
            </div>
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
      const logginResponse = await fetch(process.env.REACT_APP_URL + '/users/login', {
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
      return logginResponse;
    }

    doLogin().then(async respone => {
      if (respone.status === 200) {
        localStorage.setItem('loggedUser', this.state.username);
        const loginResponseBody = await respone.json();
        localStorage.setItem('userRoles', loginResponseBody['roles']);
        this.props.history.push('/');
        window.location.reload();
      } else {
        alert("Invalid username and/or password");
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
