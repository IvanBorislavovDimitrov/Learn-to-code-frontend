import React, { Component } from 'react';

class ChangeUserRole extends Component {

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
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Enter a username"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Check user</button>
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

}

export default ChangeUserRole;