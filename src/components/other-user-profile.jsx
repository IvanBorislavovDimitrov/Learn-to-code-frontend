import React, { Component } from "react";
import qs from 'qs'
import { Button, Modal } from "react-bootstrap";

class OtherUserProfile extends Component {
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
            validBirthDate: true
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
                                        className="nav-link active">Профил на друг потребител</a>
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
                                        className="nav-link">Курсове, които преподава</a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <h2 className="mb-3">Потребителски профил</h2>
                                    <h3>Това е, {this.state.username}</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Описание на потребител</h5>
                                            <p><h5>{this.state.description}</h5></p>
                                            <p>
                                                <h5>Пълно име: {this.state.firstName} {this.state.lastName}</h5>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="messages">
                                    <table className="table table-hover table-striped"
                                        id="courses-that-you-are-enrolled-div">
                                        <tbody id="courses-body">

                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane" id="courses-that-you-teach-div">
                                    <table className="table table-hover table-striped">
                                        <tbody id="courses-that-you-teach">

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 text-center">
                            <img src={this.state.profilePictureName} width="300pc" height="300pc"
                                className="mx-auto img-fluid img-circle d-block"
                                alt="avatar" />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    componentDidMount() {
        this.loadUser();
    };

    loadUser = () => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/users/' + currentThis.getUsername(), {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status !== 200) {
                console.log('pishki', response.status)
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

    loadCoursesThatUserTeaches = () => {
        const coursesTable = document.getElementById('courses-that-you-teach');
        coursesTable.innerHTML = '';
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/courses/user/teaches/' + currentThis.getUsername(), {
            method: 'GET',
            credentials: 'include'
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
                noCoursesH2.textContent = 'You do not teach any courses!';
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
        fetch(process.env.REACT_APP_URL + '/courses/user/' + this.getUsername(), {
            method: 'GET',
            credentials: 'include'
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
                noCoursesH2.textContent = 'You have not enrolled for any courses!';
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

    getUsername = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 2]);
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default OtherUserProfile;