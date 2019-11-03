import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    content: "NEMA"
  };
  render() {
    return (
      <React.Fragment>
        <h1>User Index page</h1>
        <h2>The content is {this.state.content["message"]}</h2>
      </React.Fragment>
    );
  }

  componentDidMount() {
    var config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "content-type, authorization, x-requested-with"
      }
    };

    let req = axios.get("http://localhost:8080", config); 
    console.log(req);
    req.then(res => {
      const content = res.data;
      console.log(content);
      this.setState({ content });
    });
  }
}

export default Index;
