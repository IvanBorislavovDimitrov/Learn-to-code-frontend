import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class DeleteUser extends Component {
    state = {
        seen: false,
        username: null,
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <div className="text-center border border-light p-5 card h-100 w-100">
                        <div className="col-md-7 mt-4 container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input
                                        onChange={this.changeInputField}
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        id="usernameInputField"
                                        placeholder="Enter a username"
                                    />
                                </div>
                                {this.checkUser()}
                            </form>
                        </div>
                        <button onClick={this.deactivateUser} className="btn btn-danger mt-3">Delete user</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    checkUser = () => {
        return (
            <React.Fragment>
                <Button variant="primary" onClick={this.showPopAndFetchUsers}>
                    Check user
                </Button>
                <Modal show={this.state.seen} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Users</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="users"></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hidePop}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

    showPopAndFetchUsers = () => {
        this.setState({
            seen: true
        });
        this.getUsersByUsernameInput();
    };

    hidePop = () => {
        this.setState({
            seen: false
        });
    };


    getUsersByUsernameInput = () => {
        let currentThis = this;

        async function getUsersByUsername() {
            const usersResponse = await fetch(process.env.REACT_APP_URL + '/users/filter/username?username=' + currentThis.state.username, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return usersResponse;
        }

        getUsersByUsername().then(async respone => {
            if (respone.status === 200) {
                const users = await respone.json();
                const usersModel = document.getElementById('users');
                const usernames = users.map(user => user['username']);
                if (usernames == '') {
                    usersModel.textContent = "No results!";
                } else {
                    usersModel.textContent = usernames;
                }
            } else {
                alert('Error while fetching users!');
            }
        });
    }

    deactivateUser = () => {
        fetch(process.env.REACT_APP_URL + '/users/update/deactivate/' + this.state.username, {
            method: 'POST',
            credentials: 'include'
        }).then(async response => {
            await response.text();
            if (response.status !== 200) {
                alert("User was not deleted!");
                return;
            }
            alert("User was deleted!");
            window.location.reload();
        })
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

}

export default DeleteUser;