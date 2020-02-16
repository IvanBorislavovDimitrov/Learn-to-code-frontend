import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    content: ""
  };
  render() {
    let loggedUser = sessionStorage.getItem('loggedUser');
    let isLoggedIn = loggedUser !== null;

    return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <h1 className="center">User Index page</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h2>The content is: {this.state.content}</h2>
        </div>
        <div className="d-flex justify-content-center">
          <h3 hidden={!isLoggedIn}>Authorize with github: <a href="https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Authorize</a></h3>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get("http://localhost:8080")
      .then(response => {
        this.setState({ content: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Index;
