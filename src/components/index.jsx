import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
  state = {
    content: "",
    githubUsername: null
  };
  render() {

    if (!localStorage.getItem('firstEnterSeen')) {
      this.props.history.push('/first/enter');
      return null;
    }

    let loggedUser = localStorage.getItem('loggedUser');
    let isLoggedIn = loggedUser !== null;

    return (
      <React.Fragment>
        <header className="bg-primary py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 text-white mt-5 mb-2">Do you want to learn to code?</h1>
                <p className="lead mb-5 text-white-50">Learn-To-Code platform allows you learn to code with a bunch of the best tutorials available online. Enroll to our courses and you will explore totally different experience of learning new skills, technologies and so much more.</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container">

          <div className="row">
            <div className="col-md-8 mb-5">
              <h2>What We Do</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
              <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
            </div>
            <div className="col-md-4 mb-5">
              <h2>Contact Us</h2>
              <hr />
              <address>
                <strong>Start Bootstrap</strong>
                <br />3481 Melrose Place
          <br />Beverly Hills, CA 90210
          <br />
              </address>
              <address>
                <abbr title="Phone">P:</abbr>
                (123) 456-7890
          <br />
                <abbr title="Email">E:</abbr>
                <a href="mailto:#">name@example.com</a>
              </address>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/300x200" alt="" />
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <h1 className="center">User Index page</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h2>Ping: {this.state.content}</h2>
        </div>
        <div className="d-flex justify-content-center">
          <h3 hidden={!isLoggedIn}>
            <div hidden={this.state.githubUsername}>
              Authorize with github: <a href="https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Authorize</a>
            </div>
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3 hidden={!isLoggedIn}>
            <div hidden={!this.state.githubUsername}>
              Your GitHub username is: {this.state.githubUsername}
            </div>
          </h3>
        </div>
 
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getData();
    this.checkUserGithubAccessAvailable();
    this.getVideo();
  }

  getData() {
    axios
      .get(process.env.REACT_APP_URL)
      .then(response => {
        this.setState({ content: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkUserGithubAccessAvailable = () => {
    fetch(process.env.REACT_APP_URL + "/github/user", {
      method: 'GET',
      credentials: 'include',
    }).then(async (res) => {
      const jsonResponse = await res.json();
      this.setState({
        content: this.state.content,
        githubUsername: jsonResponse['login']
      });

    }).catch((err) => {
      console.log(err);
    });
  }

  getVideo = () => {
    fetch(process.env.REACT_APP_URL + "/picture", {
      method: 'GET',
      credentials: 'include',
    }).then(async (res) => {
      let body = await res.arrayBuffer();
      console.log(body);
     console.log("EBNAAA GI");

    }).catch((err) => {
      console.log("EBAT ME GI");
      console.log(err);
    });
  }
}

export default Index;
