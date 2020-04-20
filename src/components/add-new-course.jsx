import React from 'react';
import {Component} from 'react';
import {Redirect} from "react-router-dom";
import qs from 'qs'
import {Modal, Button} from 'react-bootstrap';


class AddNewCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seen: false,
            teacherName: null,
            name: null,
            startDate: null,
            endDate: null,
            durationInWeeks: null,
            credits: null,
            description: null,
            formOfEducation: "REGULAR",
            categoryName: null,
            thumbnail: null,
            coursePartsCount: 2
        };
        this.videoFileUpload = React.createRef();
        this.thumbnailFileUpload = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <form className="text-center border border-light p-5" onSubmit={this.addCourse}
                          encType="multipart/form-data">
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
                            <select name="formOfEducation" onChange={this.changeInputField} className="form-control"
                                    id="formOfEducationInput">
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
                            <textarea onChange={this.changeInputField} name="description" className="form-control"
                                      id="descriptionTextArea" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoryInput">Category</label>
                            <select name="categoryName" onChange={this.changeInputField} className="form-control"
                                    id="categoryInput">
                            </select>
                        </div>

                        <form>
                            <label htmlFor="exampleInputEmail1">Teacher name</label>
                            <input
                                onChange={this.changeInputField}
                                name="teacherName"
                                type="text"
                                className="form-control mb-4"
                                id="teacherNameInputField"
                                placeholder="Enter a teacherName"
                            />
                            {this.checkUser()}
                        </form>

                        <div id="parts" class="row mt-4">
                            <div class="col-sm-8">
                                <input
                                    id="coursePartName1"
                                    onChange={this.changeInputField}
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Part name"
                                />
                            </div>
                            <div class="col-sm-4">
                                <input
                                    onChange={this.changeInputField}
                                    ref={this.videoFileUpload}
                                    type="file"
                                    className="custom-file"
                                    id="coursePartFile1"
                                    aria-describedby="fileHelp"
                                />
                            </div>

                        </div>
                        <button onClick={this.addCoursePart} className="btn btn-primary btn-block" type="button">Add
                            part
                        </button>
                        <button onClick={this.removeCoursePart} className="btn btn-danger btn-block"
                                type="button">Remove part
                        </button>

                        <div className="form-group mt-3">
                            <small id="fileHelp" className="form-text text-muted">Thumbnail</small>
                            <input
                                onChange={this.changeInputField}
                                ref={this.thumbnailFileUpload}
                                type="file"
                                className="custom-file"
                                id="thumbnailInput"
                                aria-describedby="fileHelp"
                                name="thumbnail"
                            />
                        </div>

                        <br/>
                        <button className="btn btn-info btn-block" type="submit">Add course</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        const categoryInputElement = document.getElementById('categoryInput');

        async function getCourseCategories() {
            const registerResponse = await fetch(process.env.REACT_APP_URL + '/course-categories', {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
            });
            return registerResponse;
        }

        getCourseCategories().then(async response => {
            if (response.status === 200) {
                const courseCategories = await response.json();
                courseCategories.forEach(category => {
                    let option = document.createElement('option');
                    option.textContent = category['name'];
                    categoryInputElement.appendChild(option);
                });
                this.setState({
                    categoryName: courseCategories[0]["name"]
                })
            }
        });
    }

    addCoursePart = () => {

        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'col-sm-8');
        firstDiv.id = 'coursePartNameDiv' + this.state.coursePartsCount

        const filePartNameInput = document.createElement('input');
        filePartNameInput.onChange = this.changeInputField;
        filePartNameInput.id = 'coursePartName' + this.state.coursePartsCount;
        filePartNameInput.type = "text";
        filePartNameInput.setAttribute('class', 'form-control mb-4');
        filePartNameInput.placeholder = 'Part name';
        firstDiv.appendChild(filePartNameInput);

        const secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'col-sm-4');
        secondDiv.id = 'coursePartFileDiv' + this.state.coursePartsCount;

        const coursePartFileInput = document.createElement('input');
        coursePartFileInput.id = 'coursePartFile' + this.state.coursePartsCount;
        coursePartFileInput.type = "file";
        coursePartFileInput.setAttribute('class', 'custom-file');
        secondDiv.appendChild(coursePartFileInput);

        const parts = document.getElementById('parts');
        parts.appendChild(firstDiv);
        parts.appendChild(secondDiv);
        this.setState({
            coursePartsCount: this.state.coursePartsCount + 1
        });
    }

    removeCoursePart = () => {
        if (this.state.coursePartsCount <= 2) {
            return;
        }
        const parts = document.getElementById('parts');
        const filePartNameInput = document.getElementById('coursePartNameDiv' + (this.state.coursePartsCount - 1));
        const coursePartFileInput = document.getElementById('coursePartFileDiv' + (this.state.coursePartsCount - 1));
        console.log(filePartNameInput);
        console.log(coursePartFileInput);
        parts.removeChild(filePartNameInput);
        parts.removeChild(coursePartFileInput);
        this.setState({
            coursePartsCount: this.state.coursePartsCount - 1
        });
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

        async function addNewCourse() {
            const registerFormData = new FormData();
            for (let i = 1; i < currentThis.state.coursePartsCount; i++) {
                const partName = document.getElementById('coursePartName' + i);
                const partFile = document.getElementById('coursePartFile' + i);
                registerFormData.append('videosNames', partName.value);
                registerFormData.append('videos', partFile.files[0]);
            }
            if (currentThis.state.thumbnail !== null) {
                registerFormData.append('thumbnail', currentThis.thumbnailFileUpload.current.files[0], currentThis.thumbnailFileUpload.current.files[0].name);
            }
            if (currentThis.state.startDate != null) {
                registerFormData.append('startDate', currentThis.state.startDate);
            }
            if (currentThis.state.endDate != null) {
                registerFormData.append('endDate', currentThis.state.endDate);
            }
            if (currentThis.state.name != null) {
                registerFormData.append('name', currentThis.state.name);
            }
            if (currentThis.state.teacherName != null) {
                registerFormData.append('teacherName', currentThis.state.teacherName);
            }
            if (currentThis.state.durationInWeeks) {
                registerFormData.append('durationInWeeks', currentThis.state.durationInWeeks);
            }
            if (currentThis.state.credits != null) {
                registerFormData.append('credits', currentThis.state.credits);
            }
            if (currentThis.state.formOfEducation != null) {
                registerFormData.append('formOfEducation', currentThis.state.formOfEducation);
            }
            if (currentThis.state.price != null) {
                registerFormData.append('price', currentThis.state.price);
            }
            if (currentThis.state.description != null) {
                registerFormData.append('description', currentThis.state.description);
            }
            if (currentThis.state.categoryName != null) {
                registerFormData.append('categoryName', currentThis.state.categoryName);
            }
            const registerResponse = await fetch(process.env.REACT_APP_URL + '/courses', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: registerFormData
            });
            return registerResponse;
        }

        addNewCourse().then(async response => {
            if (response.status === 200) {
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert(await response.text());
            }
        }).catch(err => {
            alert(err)
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
            const usersResponse = await fetch(process.env.REACT_APP_URL + '/users/filter/username?username=' + currentThis.state.teacherName, {
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
                alert('Error while  fetchingusers!');
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