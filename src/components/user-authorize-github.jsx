import React, {Component} from "react";
import axios from "axios";
import queryString from 'query-string'

class UserAuthorize extends Component {
    state = {
        content: ""
    };

    render() {
        return (
            <React.Fragment>
                <h1>Access token added</h1>
            </React.Fragment>
        );
    }

    componentDidMount() {
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        if (isLoggedIn) {
            this.authorizeUser();
        }
    }

    authorizeUser() {
        let currentThis = this;
        const values = queryString.parse(this.props.location.search);
        const authorizeGithubUserRequst = new XMLHttpRequest();
        const authorizeGithubUser = process.env.REACT_APP_URL + "/github/authorize?code=" + values.code;
        authorizeGithubUserRequst.open("POST", authorizeGithubUser);
        authorizeGithubUserRequst.withCredentials = true;
        authorizeGithubUserRequst.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                currentThis.props.history.push('/');
                window.location.reload();
            }
        }
        authorizeGithubUserRequst.send();
    }
}

export default UserAuthorize;
