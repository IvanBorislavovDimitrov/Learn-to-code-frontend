import React, { Component } from "react";
import qs from 'qs'
import { Button, Modal } from "react-bootstrap";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            description: null,
            firstName: null,
            lastName: null,
            birthDate: null,
            validFirstName: true,
            validLastName: true,
            validBirthDate: true,
            currentPassword: null,
            newPassword: null,
            confirmNewPassword: null
        };
        this.profilePictureRef = React.createRef();
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3 card">
                    <div className="row my-2">
                        <div className="col-lg-8 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="" data-target="#profile" data-toggle="tab"
                                        className="nav-link active">Профил</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.getCoursesForUser} href="" data-target="#messages"
                                        data-toggle="tab"
                                        className="nav-link">Записани курсове</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.loadCoursesThatUserTeaches} href=""
                                        data-target="#courses-that-you-teach-div"
                                        data-toggle="tab"
                                        className="nav-link">Курсове, които водиш</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Редактирай</a>
                                </li>
                                <li className="nav-item">
                                    <a href=""
                                        data-target="#delete-profile"
                                        data-toggle="tab"
                                        className="nav-link">Изтрий акаунт</a>
                                </li>
                                <li className="nav-item">
                                    <a href=""
                                        data-target="#change-password"
                                        data-toggle="tab"
                                        className="nav-link">Промени парола</a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <h2 className="mb-3">Потребителски профил</h2>
                                    <h3>Здравей, {this.state.username}!</h3>
                                    <div className="row">
                                        <div className="col-md-6"> <br/>
                                            <h5>Информация</h5>
                                            <p><h5>{this.state.description}</h5></p>
                                            <p>
                                                <h5>Пълно име: {this.state.firstName} {this.state.lastName}</h5>
                                            </p>
                                            <p>
                                                <h5>Телефонен номер: {this.state.phoneNumber}</h5>
                                            </p>
                                            <p>
                                                <h5>Имейл адрес: {this.state.email}</h5>
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <h5 className="mt-2"><span
                                                className="fa fa-clock-o ion-clock float-right" /> Последни влизания в системата
                                            </h5>
                                            <table className="table table-sm table-hover table-striped">
                                                <tbody id="recent-logins">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="messages">
                                    <table className="table table-hover table-striped"
                                        id="courses-that-you-are-enrolled-div">
                                        <tbody id="courses-body">
                                            {/*<tr>*/}
                                            {/*    <td>*/}
                                            {/*        <span className="float-right font-weight-bold">3 hrs ago</span> Here is*/}
                                            {/*        your a link to the latest summary report from the..*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane" id="courses-that-you-teach-div">
                                    <table className="table table-hover table-striped">
                                        <tbody id="courses-that-you-teach">
                                            {/*<tr>*/}
                                            {/*    <td>*/}
                                            {/*        <span className="float-right font-weight-bold">3 hrs ago</span> Here is*/}
                                            {/*        your a link to the latest summary report from the..*/}
                                            {/*    </td>*/}
                                            {/*</tr>*/}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane" id="edit">
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Първо име</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="firstNameInputField"
                                                onChange={this.changeInputField}
                                                className="form-control" type="text" name="firstName" />
                                        </div>
                                        <div hidden={this.state.validFirstName} className="ml-3 text-danger">Въведи валидно първо име</div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Фамилия</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="lastNameInputField"
                                                onChange={this.changeInputField} className="form-control"
                                                type="text" name="lastName" />
                                        </div>
                                        <div hidden={this.state.validLastName} className="ml-3 text-danger">Въведи валидна фамилия</div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            className="col-lg-3 col-form-label form-control-label">Дата на раждане</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="birthDateInputField"
                                                onChange={this.changeInputField} className="form-control"
                                                type="date" name="birthDate" />
                                        </div>
                                        <div hidden={this.state.validBirthDate} className="ml-3 text-danger">Въведи валидна дата на раждане</div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            className="col-lg-3 col-form-label form-control-label">Описание</label>
                                        <div className="col-lg-9">
                                            <textarea onChange={this.changeInputField} className="form-control"
                                                name="description" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label" />
                                        <div className="col-lg-9">
                                            <button onClick={this.updateUserBasicInformation} type="button" className="btn btn-primary"
                                                value="Save Changes" >Запази промени</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane text-center" id="delete-profile">
                                    <button onClick={this.deactivateUser} className="btn btn-danger mt-3">Изтрий акаунт</button>
                                </div>
                                <div className="tab-pane" id="change-password">
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Текуща парола</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="currentPasswordInputField"
                                                onChange={this.changeInputField}
                                                className="form-control" type="text" name="currentPassword" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Нова парола</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="newPasswordInputField"
                                                onChange={this.changeInputField}
                                                className="form-control" type="text" name="newPassword" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Потвърди нова парола</label>
                                        <div className="col-lg-9">
                                            <input
                                                id="confirmNewPasswordInputField"
                                                onChange={this.changeInputField}
                                                className="form-control" type="text" name="confirmNewPassword" />
                                        </div>
                                    </div>
                                    <label className="col-lg-3 col-form-label form-control-label" />
                                    <div className="col-lg-9">
                                        <button onClick={this.changePassword} type="button" className="btn btn-primary"
                                            value="Save Changes" >Промени парола</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 text-center">
                            <img src={this.state.profilePictureName} width="300pc" height="300pc"
                                className="mx-auto img-fluid img-circle d-block"
                                alt="avatar" />
                            <div className="justify-content container text-left">
                                <small id="fileHelp" className="form-text text-muted mt-5">Промени снимка на профила</small>
                                <input
                                    onChange={this.changeInputField}
                                    ref={this.profilePictureRef}
                                    type="file"
                                    className="custom-file"
                                    id="profilePicture"
                                    aria-describedby="fileHelp"
                                    name="profilePicture"
                                />
                                <button onClick={this.changeProfilePicture} className="btn btn-primary">Промени снимка на профила
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    componentDidMount() {
        const userRoles = localStorage.getItem('loggedUser');
        if (userRoles == null) {
            this.props.history.push('/users/login');
            return;
        }
        this.loadUser();

    };

    loadUser = () => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/users/user', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            if (response.status !== 200) {
                this.props.history.push('/users/login');
                window.location.reload();
                return;
            }
            const jsonResponse = await response.json();
            let user = JSON.parse(JSON.stringify(jsonResponse));
            this.setState({
                username: user['username'],
                description: user['description'],
                firstName: user['firstName'],
                lastName: user['lastName'],
                phoneNumber: user['phoneNumber'],
                email: user['email'],
                profilePictureName: process.env.REACT_APP_URL + '/resource/images/' + user['profilePictureName']
            });
            currentThis.loadRecentLogins(user['loginRecords']);
        }).catch(error => {
            console.log(error);
        });
    };

    loadRecentLogins = (loginRecords) => {
        const recentLogins = document.getElementById('recent-logins');
        loginRecords.forEach(loginRecord => {
            const tableRow = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = loginRecord['additionalInformation'];
            tableRow.appendChild(td);
            recentLogins.appendChild(tableRow);
        })
    }

    updateUserBasicInformation = () => {
        if (!this.checkIfUserFormIsValid()) {
            return;
        }
        let loggedUser = localStorage.getItem('loggedUser');
        const currentThis = this;
        const userUpdateForm = {
            firstName: currentThis.state.firstName,
            lastName: currentThis.state.lastName,
            birthDate: currentThis.state.birthDate,
            description: currentThis.state.description
        };
        fetch(process.env.REACT_APP_URL + '/users/update/basic/' + loggedUser, {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(userUpdateForm),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            await response.text();
            if (response.status === 200) {
                this.props.history.push('/users/profile');
                window.location.reload();
                return;
            }
        }).catch(error => {
            console.log(error);
        })
    };

    changePassword = () => {
        const passwordModel = {
            currentPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
            confirmNewPassword: this.state.confirmNewPassword
        };
        console.log(passwordModel);
        fetch(process.env.REACT_APP_URL + '/users/update/password', {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(passwordModel),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(async response => {
            if (response.status === 200) {
                alert("Password changed!");
                window.location.reload();
            } else if (response.status === 400) {
                const jsonResponse = await response.json();
                let error = JSON.parse(JSON.stringify(jsonResponse));
                if (error['type'] == 'PasswordsDoNotMatchException') {
                    alert('Невалидна нова парола или паролите не съвпадат!');
                    return;
                }
                alert('Password not updated!');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    checkIfUserFormIsValid = () => {
        let isValid = true;
        const firstNameInputField = document.getElementById('firstNameInputField');
        const lastNameInputField = document.getElementById('lastNameInputField');
        const birthDateInputField = document.getElementById('birthDateInputField');
        firstNameInputField.setAttribute('class', 'form-control');
        this.setState({
            validFirstName: true
        });
        lastNameInputField.setAttribute('class', 'form-control');
        this.setState({
            validLastName: true
        });
        birthDateInputField.setAttribute('class', 'form-control');
        this.setState({
            validBirthDate: true
        });
        if (firstNameInputField.value.length === 0) {
            this.setState({
                validFirstName: false
            });
            firstNameInputField.setAttribute('class', 'form-control is-invalid');
            isValid = false;
        }
        if (lastNameInputField.value.length === 0) {
            this.setState({
                validLastName: false
            });
            lastNameInputField.setAttribute('class', 'form-control is-invalid');
            isValid = false;
        }
        if (birthDateInputField.value.length === 0) {
            this.setState({
                validBirthDate: false
            });
            birthDateInputField.setAttribute('class', 'form-control is-invalid');
            isValid = false;
        }
        return isValid;
    };

    loadCoursesThatUserTeaches = () => {
        const coursesTable = document.getElementById('courses-that-you-teach');
        coursesTable.innerHTML = '';
        const loggedUser = localStorage.getItem('loggedUser');
        fetch(process.env.REACT_APP_URL + '/courses/user/teaches/' + loggedUser, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            const coursesForUserJsonResponse = await response.json();
            let coursesMap = JSON.parse(JSON.stringify(coursesForUserJsonResponse));
            if (coursesMap.length === 0) {
                const coursesThatYouTeach = document.getElementById('courses-that-you-teach-div');
                const noCoursesThatYouTeach = document.getElementById('no-courses-that-you-teach');
                if (noCoursesThatYouTeach !== undefined && noCoursesThatYouTeach !== null) {
                    coursesThatYouTeach.removeChild(noCoursesThatYouTeach);
                }
                const noCoursesH2 = document.createElement('h2');
                noCoursesH2.textContent = 'Не водиш никакви курсове!';
                noCoursesH2.id = 'no-courses-that-you-teach';
                coursesThatYouTeach.appendChild(noCoursesH2);
            }
            coursesMap.forEach(course => {
                const tableRowElement = document.createElement('tr');
                const tableDataCellElement = document.createElement('td');
                const categorySpanElements = document.createElement('span');
                categorySpanElements.setAttribute('class', 'float-right font-weight-bold');
                categorySpanElements.textContent = course['category']['name'];
                tableDataCellElement.appendChild(categorySpanElements);
                const nameParagraphElement = document.createElement('p');
                nameParagraphElement.textContent = 'Име на курс: ' + course['name'];
                const descriptionParagraphElement = document.createElement('p');
                descriptionParagraphElement.textContent = 'Описание: ' + course['description'];
                tableDataCellElement.appendChild(nameParagraphElement);
                tableDataCellElement.appendChild(descriptionParagraphElement);
                const courseLinkParagraphElement = document.createElement('p');
                const courseLinkAnchorTagElement = document.createElement('a');
                courseLinkAnchorTagElement.href = '/courses/view/' + course['name'];
                courseLinkAnchorTagElement.textContent = 'Отиди на курс';
                courseLinkParagraphElement.appendChild(courseLinkAnchorTagElement);
                tableDataCellElement.appendChild(courseLinkParagraphElement);
                tableRowElement.appendChild(tableDataCellElement);
                coursesTable.appendChild(tableRowElement);
            });
        });
    };

    getCoursesForUser = () => {
        const coursesTable = document.getElementById('courses-body');
        coursesTable.innerHTML = '';
        const loggedUser = localStorage.getItem('loggedUser');
        fetch(process.env.REACT_APP_URL + '/courses/user/' + loggedUser, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            const coursesForUserJsonResponse = await response.json();
            let coursesMap = JSON.parse(JSON.stringify(coursesForUserJsonResponse));

            const coursesThatYouTeach = document.getElementById('courses-that-you-are-enrolled-div');
            const noCoursesThatYouTeach = document.getElementById('no-courses-that-you-are-enrolled-for');
            if (noCoursesThatYouTeach !== undefined && noCoursesThatYouTeach !== null) {
                coursesThatYouTeach.removeChild(noCoursesThatYouTeach);
            }

            if (coursesMap.length === 0) {
                const coursesThatYourAreEnrolledFor = document.getElementById('courses-that-you-are-enrolled-div');
                const noCoursesH2 = document.createElement('h2');
                noCoursesH2.textContent = 'Не си записал за никакви курсове все още!';
                noCoursesH2.id = 'no-courses-that-you-are-enrolled-for';
                coursesThatYourAreEnrolledFor.appendChild(noCoursesH2);
            }
            coursesMap.forEach(course => {
                const tableRowElement = document.createElement('tr');
                const tableDataCellElement = document.createElement('td');
                const categorySpanElements = document.createElement('span');
                categorySpanElements.setAttribute('class', 'float-right font-weight-bold');
                categorySpanElements.textContent = course['category']['name'];
                tableDataCellElement.appendChild(categorySpanElements);
                const nameParagraphElement = document.createElement('p');
                nameParagraphElement.textContent = 'Име на курс: ' + course['name'];
                const descriptionParagraphElement = document.createElement('p');
                descriptionParagraphElement.textContent = 'Описание: ' + course['description'];
                tableDataCellElement.appendChild(nameParagraphElement);
                tableDataCellElement.appendChild(descriptionParagraphElement);
                const courseLinkParagraphElement = document.createElement('p');
                const courseLinkAnchorTagElement = document.createElement('a');
                courseLinkAnchorTagElement.href = '/courses/view/' + course['name'];
                courseLinkAnchorTagElement.textContent = 'Отиди на курс';
                courseLinkParagraphElement.appendChild(courseLinkAnchorTagElement);
                tableDataCellElement.appendChild(courseLinkParagraphElement);
                tableRowElement.appendChild(tableDataCellElement);
                coursesTable.appendChild(tableRowElement);
            });
        });
    };

    changeProfilePicture = () => {
        const registerFormData = new FormData();
        registerFormData.append('profilePicture', this.profilePictureRef.current.files[0]);
        let loggedUser = localStorage.getItem('loggedUser');
        fetch(process.env.REACT_APP_URL + '/users/change-profile-picture/' + loggedUser, {
            method: 'POST',
            body: registerFormData,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            await response.text();
            if (response.status === 200) {
                this.props.history.push('/users/profile');
                window.location.reload();
                return;
            }
            alert('Възникна проблем. Профилната Ви снимка не беше обновена!');
        });
    };

    deactivateUser = () => {
        fetch(process.env.REACT_APP_URL + '/users/update/deactivate', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            await response.text();
            if (response.status !== 200) {
                alert("Профилът НЕ беше изтрит успешно!");
                return;
            }
            alert("Профилът беше изтрит успешно!");
            localStorage.removeItem('loggedUser');
            window.location.reload();
        })
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default UserProfile;