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
                <h1>Token за GitHub беше добавен. Може да отворите вашите хранилища!</h1>
            </React.Fragment>
        );
    }

    componentDidMount() {
        const userRoles = localStorage.getItem('loggedUser');
        if (userRoles == null) {
            this.props.history.push('/users/login');
            return;
        }
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
        console.log(authorizeGithubUser);
        console.log(this.props.location.search);
        authorizeGithubUserRequst.open("POST", authorizeGithubUser);
        authorizeGithubUserRequst.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
        authorizeGithubUserRequst.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                //currentThis.props.history.push('/');
                //window.location.reload();
            }
        }
        authorizeGithubUserRequst.send();
    }
}

export default UserAuthorize;
