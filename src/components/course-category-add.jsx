import React from 'react';
import { Component } from 'react';

class AddCourseCategory extends Component {
    state = {
        courseCategoryName: null
    };
    render() {
        return (
            <React.Fragment>
                <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <form onSubmit={this.loginUser}>
                        <div className="form-group">
                            <h3 htmlFor="exampleInputEmail1">Course Category Name</h3>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Course Category Name"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Add course category
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default AddCourseCategory;