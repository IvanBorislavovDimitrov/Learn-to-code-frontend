import React from 'react';
import { Component } from 'react';
import { Redirect } from "react-router-dom";
import qs from 'qs'

class AddNewCourse extends Component {
    state = {
        courseCategoryName: null
    };
    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" action="#!">
                        <p className="h4 mb-4">Add new course</p>

                        <input
                            onChange={this.changeInputField}
                            name="name"
                            type="text"
                            className="form-control mb-4"
                            id="nameId"
                            aria-describedby="emailHelp"
                            placeholder="Name"
                        />

                        <div className="form-group">
                            <input
                                onChange={this.changeInputField}
                                name="birthDate"
                                type="date"
                                className="form-control mb-4"
                                id="startDate"
                                placeholder="Choose start date"
                            />
                        </div>

                        <button className="btn btn-info btn-block" type="submit">Add course</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    addCourseCategory = event => {
        event.preventDefault();
        const currentThis = this;

        async function add() {
            const addCourseCategoryResponse = await fetch(process.env.REACT_APP_URL + '/course-categories/add', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: currentThis.state.courseCategoryName,
                })
            });
            return addCourseCategoryResponse;
        }

        add().then(async respone => {
            if (respone.status === 200) {
                const responseJson = await respone.json();
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert("Something went wrond. Check the console for error.");
            }
        });
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}



export default AddNewCourse;