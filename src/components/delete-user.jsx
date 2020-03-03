import React, { Component } from 'react';

class DeleteUser extends Component {

    render() {
        return (
            <React.Fragment>
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
                        <button type="submit" className="btn btn-primary">Delete user</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }


}

export default DeleteUser;