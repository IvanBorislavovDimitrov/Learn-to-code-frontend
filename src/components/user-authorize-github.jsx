import React, { Component } from "react";
import axios from "axios";
import queryString from 'query-string'

class UserAuthorize extends Component {
  state = {
    content: ""
  };
  render() {
    return (
      <React.Fragment>
        <h1>GOTOVO MAINA</h1>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.authorizeUser();
  }

  authorizeUser() {
    const values = queryString.parse(this.props.location.search)
    axios
      .post("http://localhost:8080/github/users/authorize", null, { params: {
        code: values.code,
      }})
      .then(response => {
        console.log("Token: " + response);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default UserAuthorize;
