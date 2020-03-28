import React from 'react';
import { Component } from 'react';
import { Redirect } from "react-router-dom";
import qs from 'qs'
import { Modal, Button } from 'react-bootstrap';


class AddNewCourse extends Component {
    state = {
        seen: false,
        username: null,
        name: null,
        startDate: null,
        endDate: null,
        durationInWeeks: null,
        credits: null,
        description: null,
        formOfEducation: null,
        video: null

    };
    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" onSubmit={this.addCourse}>
                        <p className="h4 mb-4">Add new course</p>

                        <div className="form-group">
                            <label htmlFor="nameInput">Name</label>
                            <input
                                onChange={this.changeInputField}
                                name="name"
                                type="text"
                                className="form-control mb-4"
                                id="nameInput"
                                placeholder="Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDateDate">Start date</label>
                            <input
                                onChange={this.changeInputField}
                                name="startDate"
                                type="date"
                                className="form-control mb-4"
                                id="startDateDate"
                                placeholder="Choose start date"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDateDate">End date</label>
                            <input
                                id="endDateDate"
                                onChange={this.changeInputField}
                                name="endDate"
                                type="date"
                                className="form-control mb-4"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="durationInWeeksInput">Duration in weeks</label>
                            <input
                                onChange={this.changeInputField}
                                name="durationInWeeks"
                                type="text"
                                className="form-control mb-4"
                                id="durationInWeeksInput"
                                placeholder="Duration in weeks"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="creditsInput">Credits</label>
                            <input
                                id="creditsInput"
                                onChange={this.changeInputField}
                                name="credits"
                                type="text"
                                className="form-control mb-4"
                                placeholder="Credits"
                            />

                        </div>

                        <div className="form-group">
                            <label htmlFor="formOfEducationInput">Form of education</label>
                            <select name="formOfEducation" onChange={this.changeInputField} className="form-control" id="formOfEducationInput">
                                <option>REGULAR</option>
                                <option>ONLINE</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="priceOfCourseInput">Price of course</label>
                            <input
                                id="priceOfCourseInput"
                                onChange={this.changeInputField}
                                name="price"
                                type="number"
                                className="form-control mb-4"
                                placeholder="Price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="descriptionTextArea">Description</label>
                            <textarea onChange={this.changeInputField} name="description" className="form-control" id="descriptionTextArea" rows="3"></textarea>
                        </div>


                        <form>
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input
                                onChange={this.changeInputField}
                                name="username"
                                type="text"
                                className="form-control mb-4"
                                id="usernameInputField"
                                placeholder="Enter a username"
                            />
                            {this.checkUser()}
                        </form>

                        <div className="form-group">
                            <small id="fileHelp" className="form-text text-muted">Video</small>
                            <input
                                onChange={this.changeInputField}
                                ref={this.fileInput}
                                type="file"
                                className="custom-file"
                                id="profilePicture"
                                aria-describedby="fileHelp"
                                name="profilePicture"
                            />
                        </div>

                        <br />
                        <button className="btn btn-info btn-block" type="submit">Add course</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }


    checkUser = () => {
        return (
            <React.Fragment>
                <Button variant="btn btn-info" onClick={this.showPopAndFetchUsers}>
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

    addCourse = event => {
        event.preventDefault();
        const currentThis = this;

        async function AddNewCourse() {
            const registerFormData = new FormData();
            if (currentThis.state.video !== null) {
                registerFormData.append('video', new Blob([currentThis.state.video]), currentThis.fileInput.current.files[0].name);
            }
            registerFormData.append('startDate', currentThis.state.startDate);
            registerFormData.append('endDate', currentThis.state.endDate);
            registerFormData.append('name', currentThis.state.name);
            registerFormData.append('username', currentThis.state.username);
            registerFormData.append('durationInWeeks', currentThis.state.durationInWeeks);
            registerFormData.append('credits', currentThis.state.credits);
            registerFormData.append('formOfEducation', currentThis.state.formOfEducation);
            registerFormData.append('price', currentThis.state.price);
            registerFormData.append('description', currentThis.state.description);

            const registerResponse = await fetch(process.env.REACT_APP_URL + '/courses/add', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: registerFormData
            });
            return registerResponse;
        }

        AddNewCourse().then(async respone => {
            if (respone.status === 200) {
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert("Register failed!");
            }
        });
    };

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

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}



export default AddNewCourse;