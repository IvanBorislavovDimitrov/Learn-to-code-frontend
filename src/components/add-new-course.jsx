import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


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
            coursePartsCount: 2,
            nameInputFieldNotEntered: false,
            startDateInputFieldNotEntered: false,
            endDateInputFieldNotEntered: false,
            durationOfWeeksInputFieldNotEntered: false,
            creditsInputFieldNotEntered: false,
            formOfEducationInputFieldNotEntered: false,
            priceOfCourseInputFieldNotEntered: false,
            descriptionOfCourseFieldNotEntered: false,
            teacherNameInputFieldNotEntered: false,
            partInputFieldNotEntered: false,
            thumbnailInputFieldNotEntered: false,
            courseNameTaken: false,
            endDateIsBeforeStartDate: false,
            loading: false
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
                                className="form-control"
                                id="nameInputField"
                                placeholder="Name"
                            />
                            <div hidden={!this.state.nameInputFieldNotEntered} class="text-danger mb-3">Enter a name!</div>
                            <div hidden={!this.state.courseNameTaken} class="text-danger mb-3">Name is take!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDateDate">Start date</label>
                            <input
                                onChange={this.changeInputField}
                                name="startDate"
                                type="date"
                                className="form-control"
                                id="startDateInputField"
                                placeholder="Choose start date"
                            />
                            <div hidden={!this.state.startDateInputFieldNotEntered} class="text-danger mb-3">Enter a start date!</div>
                            <div hidden={!this.state.endDateIsBeforeStartDate} class="text-danger mb-3">Start date should be before end date!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDateDate">End date</label>
                            <input
                                id="endDateInputField"
                                onChange={this.changeInputField}
                                name="endDate"
                                type="date"
                                className="form-control"
                            />
                            <div hidden={!this.state.endDateInputFieldNotEntered} class="text-danger mb-3">Enter an end date!</div>
                            <div hidden={!this.state.endDateIsBeforeStartDate} class="text-danger mb-3">End date should be after start date!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="durationInWeeksInput">Duration in weeks</label>
                            <input
                                onChange={this.changeInputField}
                                name="durationInWeeks"
                                type="text"
                                className="form-control"
                                id="durationInWeeksInputField"
                                placeholder="Duration in weeks"
                            />
                            <div hidden={!this.state.durationOfWeeksInputFieldNotEntered} class="text-danger mb-3">Enter a duration in weeks!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="creditsInput">Credits</label>
                            <input
                                id="creditsInputField"
                                onChange={this.changeInputField}
                                name="credits"
                                type="text"
                                className="form-control"
                                placeholder="Credits"
                            />
                            <div hidden={!this.state.creditsInputFieldNotEntered} class="text-danger mb-3">Enter credits!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="formOfEducationInput">Form of education</label>
                            <select name="formOfEducation" onChange={this.changeInputField} className="form-control"
                                id="formOfEducationInputField">
                                <option>REGULAR</option>
                                <option>ONLINE</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="priceOfCourseInput">Price of course</label>
                            <input
                                id="priceOfCourseInputField"
                                onChange={this.changeInputField}
                                name="price"
                                type="number"
                                className="form-control"
                                placeholder="Price"
                            />
                            <div hidden={!this.state.priceOfCourseInputFieldNotEntered} class="text-danger mb-3">Enter a price of course!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="descriptionTextArea">Description</label>
                            <textarea onChange={this.changeInputField} name="description" className="form-control"
                                id="descriptionTextAreaField" rows="3"></textarea>
                            <div hidden={!this.state.descriptionOfCourseFieldNotEntered} class="text-danger mb-3">Enter a descirption!</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoryInput">Category</label>
                            <select name="categoryName" onChange={this.changeInputField} className="form-control"
                                id="categoryInputField">
                            </select>
                        </div>

                        <form>
                            <label htmlFor="exampleInputEmail1">Teacher name</label>
                            <input
                                onChange={this.changeInputField}
                                name="teacherName"
                                type="text"
                                className="form-control"
                                id="teacherNameInputField"
                                placeholder="Enter a teacherName"
                            />
                            <div hidden={!this.state.teacherNameInputFieldNotEntered} class="text-danger mb-3">Enter a teacher name!</div>
                            {this.checkUser()}
                        </form>

                        <div id="parts" class="row mt-4">
                            <div class="col-sm-8">
                                <input
                                    id="coursePartName1"
                                    onChange={this.changeInputField}
                                    type="text"
                                    className="form-control"
                                    placeholder="Part name"
                                />
                                <div hidden={!this.state.partInputFieldNotEntered} class="text-danger mb-3">Enter at least one part (Intro)!</div>
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
                                id="thumbnailInputField"
                                aria-describedby="fileHelp"
                                name="thumbnail"
                            />
                            <div hidden={!this.state.thumbnailInputFieldNotEntered} class="text-danger mb-3">Enter a thumbnail!</div>
                        </div>
                        <br />
                        <div hidden={!this.state.loading} id="loading">
                            <div id="remove1" className="mb-3">
                                <div class="spinner-border text-warning" role="status">
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info btn-block" type="submit">Add course</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        const categoryInputElement = document.getElementById('categoryInputField');

        async function getCourseCategories() {
            return await fetch(process.env.REACT_APP_URL + '/course-categories', {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
            });
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
        filePartNameInput.setAttribute('class', 'form-control');
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
                <Button variant="btn btn-info mt-3" onClick={this.showPopAndFetchUsers}>
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

    showLoading = () => {
        this.setState({
            loading: true
        });
    }

    hideLoading = () => {
        this.setState({
            loading: false
        });
    }

    addCourse = event => {
        event.preventDefault();

        this.showLoading();

        if (!this.checkIfCourseIsValid()) {
            this.hideLoading();
            return;
        }

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
                currentThis.hideLoading();
                this.props.history.push('/');
                window.location.reload();
            } else if (response.status === 400) {
                const jsonResponse = await response.json();
                currentThis.hideLoading();
                let responseMap = JSON.parse(JSON.stringify(jsonResponse));
                if (responseMap['type'] === 'CourseNameTakenException') {
                    const nameInputField = document.getElementById('nameInputField');
                    nameInputField.setAttribute('class', 'form-control');
                    this.setState({
                        nameNotEntered: false,
                        courseNameTaken: true
                    });
                } else if (responseMap['type'] === 'InvalidDatesException') {
                    this.setState({
                        endDateIsBeforeStartDate: true,
                    });
                }
            } else {
                currentThis.hideLoading();
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
            return await fetch(process.env.REACT_APP_URL + '/users/filter/username?username=' + currentThis.state.teacherName, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
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

    checkIfCourseIsValid = () => {
        let isValid = true;
        const nameInputField = document.getElementById('nameInputField');
        nameInputField.setAttribute('class', 'form-control');
        this.setState({
            endDateIsBeforeStartDate: false,
            nameInputFieldNotEntered: false,
            courseNameTaken: false
        });
        if (this.state.name === null) {
            nameInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                nameInputFieldNotEntered: true
            });
            isValid = false;
        }
        const startDateInputField = document.getElementById('startDateInputField');
        startDateInputField.setAttribute('class', 'form-control');
        this.setState({
            startDateInputFieldNotEntered: false
        });
        if (this.state.startDate === null) {
            startDateInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                startDateInputFieldNotEntered: true
            });
            isValid = false;
        }
        const endDateInputField = document.getElementById('endDateInputField');
        endDateInputField.setAttribute('class', 'form-control');
        this.setState({
            endDateInputFieldNotEntered: false
        });
        if (this.state.endDate === null) {
            endDateInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                endDateInputFieldNotEntered: true
            });
            isValid = false;
        }
        const durationInWeeksInputField = document.getElementById('durationInWeeksInputField');
        durationInWeeksInputField.setAttribute('class', 'form-control');
        this.setState({
            durationOfWeeksInputFieldNotEntered: false
        });
        if (this.state.endDate === null) {
            durationInWeeksInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                durationOfWeeksInputFieldNotEntered: true
            });
            isValid = false;
        }
        const creditsInputField = document.getElementById('creditsInputField');
        creditsInputField.setAttribute('class', 'form-control');
        this.setState({
            creditsInputFieldNotEntered: false
        });
        if (this.state.credits === null) {
            creditsInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                creditsInputFieldNotEntered: true
            });
            isValid = false;
        }
        const priceOfCourseInputField = document.getElementById('priceOfCourseInputField');
        priceOfCourseInputField.setAttribute('class', 'form-control');
        this.setState({
            priceOfCourseInputFieldNotEntered: false
        });
        if (this.state.price === null) {
            priceOfCourseInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                priceOfCourseInputFieldNotEntered: true
            });
            isValid = false;
        }
        const descriptionTextAreaField = document.getElementById('descriptionTextAreaField');
        descriptionTextAreaField.setAttribute('class', 'form-control');
        this.setState({
            descriptionOfCourseFieldNotEntered: false
        });
        if (this.state.description === null) {
            descriptionTextAreaField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                descriptionOfCourseFieldNotEntered: true
            });
            isValid = false;
        }
        const teacherNameInputField = document.getElementById('teacherNameInputField');
        teacherNameInputField.setAttribute('class', 'form-control');
        this.setState({
            teacherNameInputFieldNotEntered: false
        });
        if (this.state.teacherName === null) {
            teacherNameInputField.setAttribute('class', 'form-control is-invalid');
            this.setState({
                teacherNameInputFieldNotEntered: true
            });
            isValid = false;
        }
        const coursePartFile1 = document.getElementById('coursePartFile1');
        coursePartFile1.setAttribute('class', 'form-control');
        this.setState({
            partInputFieldNotEntered: false
        });
        if (document.getElementById('coursePartName1').value == null || document.getElementById('coursePartName1').value == '') {
            coursePartFile1.setAttribute('class', 'form-control is-invalid');
            this.setState({
                partInputFieldNotEntered: true
            });
            isValid = false;
        }
        const thumbnailInputField = document.getElementById('thumbnailInputField');
        thumbnailInputField.setAttribute('class', 'form-control');
        this.setState({
            thumbnailInputFieldNotEntered: false
        });
        if (this.state.thumbnail === null) {
            thumbnailInputField.setAttribute('class', 'is-invalid');
            this.setState({
                thumbnailInputFieldNotEntered: true
            });
            isValid = false;
        }
        return isValid;
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}


export default AddNewCourse;