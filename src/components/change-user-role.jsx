import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ChangeUserRole extends Component {
    state = {
        seen: false,
        username: null
    };

    render() {
        return (
            <React.Fragment>

                <div id="rolesTable" className="container mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Role</th>
                                <th scope="col">Add Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="adminTR">
                                <th scope="row">1</th>
                                <td>Moderator</td>
                                <td><button onClick={() => this.addRole('MODERATOR')} className="btn btn-primary">Add role</button></td>
                            </tr>
                            <tr id="moderatorTR">
                                <th scope="row">2</th>
                                <td>Admin</td>
                                <td><button onClick={() => this.addRole('ADMIN')} className="btn btn-primary">Add role</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-7 container">
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

                <div className="col-md-7 mt-4 container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Enter a username"
                            />
                        </div>
                        <div id="passwordField" className="form-group">
                            <label htmlFor="exampleInputPassword">Roles</label>
                            <input
                                disabled="disabled"
                                name="roles"
                                type="text"
                                className="form-control"
                                id="roles"
                                placeholder="Roles"
                                value="USER"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update roles</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    addRole = (role) => {
        const rolesField = document.getElementById('roles');
        const currentRoles = rolesField.value.split(' ');
        if (!currentRoles.includes(role)) {
            rolesField.value = rolesField.value + " " + role;
        }
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
                        <Button variant="secondary" onClick={this.hidePop}>
                            Close
                </Button>
                        <Button variant="primary" onClick={this.hidePop}>
                            Save Changes
                </Button>
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
                usersModel.textContent = users.map(user => user['username']);
            } else {
                alert('Error while fetching users!');
            }
        });
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

}

export default ChangeUserRole;