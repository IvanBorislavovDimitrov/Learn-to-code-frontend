import React, { Component } from "react";

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  state = {};
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.registerUser}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.emailInputChange}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.passwordInputChange}
              name="password"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }

  registerUser = event => {
    event.preventDefault();
    
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
}

export default UserRegister;
