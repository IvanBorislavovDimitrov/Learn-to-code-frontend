import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ChangeUserRole extends Component {
    state = {
        seen: false,
        username: null,
        usernameRoleChange: null,
        roles: null
    };

    render() {
        return (
            <React.Fragment>

                <div className="col-md-4 mt-4 container">
                    <div className="text-center border border-light p-5 card h-100 w-100">
                        <div id="rolesTable" className="container mt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Роля</th>
                                        <th scope="col">Добави роля</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="adminTR">
                                        <th scope="row">1</th>
                                        <td>Модератор</td>
                                        <td>
                                            <button onClick={() => this.addRole('ROLE_MODERATOR')} className="btn btn-primary">Добави роля
                                </button>
                                        </td>
                                    </tr>
                                    <tr id="moderatorTR">
                                        <th scope="row">2</th>
                                        <td>Админ</td>
                                        <td>
                                            <button onClick={() => this.addRole('ROLE_ADMIN')} className="btn btn-primary">Добави роля
                                </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-7 container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Потребителско име</label>
                                    <input
                                        onChange={this.changeInputField}
                                        name="username"
                                        type="text"
                                        className="form-control"
                                        id="usernameInputField"
                                        placeholder="Въведи потребителско име"
                                    />
                                </div>
                                {this.checkUser()}
                            </form>
                        </div>

                        <div className="col-md-7 mt-4 container">
                            <form onSubmit={this.updateRoles}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Потребителско име</label>
                                    <input
                                        onChange={this.changeInputField}
                                        name="usernameRoleChange"
                                        type="text"
                                        className="form-control"
                                        id="usernameInputField"
                                        placeholder="Въведи потребителско име"
                                    />
                                </div>
                                <div id="passwordField" className="form-group">
                                    <label htmlFor="exampleInputPassword">Роли</label>
                                    <input
                                        onChange={this.changeInputField}
                                        disabled="disabled"
                                        name="roles"
                                        type="text"
                                        className="form-control"
                                        id="roles"
                                        placeholder="Роли"
                                        value="ROLE_USER"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Промени роли</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles == null || !userRoles.includes('ROLE_MODERATOR')) {
            this.props.history.push('/not-found');
            return;
        }
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
                    Провери потребител
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
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
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

    updateRoles = (event) => {
        event.preventDefault();
        const rolesField = document.getElementById('roles');
        const currentRoles = rolesField.value.split(' ');
        const roles = currentRoles.join(',');
        let currentThis = this;

        async function update() {
            const usersResponse = await fetch(process.env.REACT_APP_URL + '/users/change-roles/' + currentThis.state.usernameRoleChange
                + '/?roles=' + roles, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            });
            return usersResponse;
        }

        update().then(async respone => {
            if (respone.status === 200) {
                const users = await respone.json();
                console.log(users);
                this.props.history.push('/');
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