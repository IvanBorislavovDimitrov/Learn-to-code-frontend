import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    content: ""
  };
  render() {
    return (
      <React.Fragment>
        <h1>User Index page</h1>
        <h2>The content is: {this.state.content}</h2>
        <h3>Authorize with github: <a href="https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Authorize</a></h3>
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
