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
        <h2>The content is {this.state.content}</h2>
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
        console.log("Data: " + response.data["message"]);
        this.setState({content: response.data["message"]});
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default Index;
