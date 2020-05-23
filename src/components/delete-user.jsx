import React, { Component } from 'react';

class DeleteUser extends Component {

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
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default DeleteUser;