import React, {Component} from "react";
import qs from 'qs'
import {Button, Modal} from "react-bootstrap";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            description: null,
            firstName: null,
            lastName: null,
            phoneNumber: null,
            email: null,
            profilePictureName: null,
        };
        this.profilePictureRef = React.createRef();
    }

    state = {};

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row my-2">
                        <div className="col-lg-8 order-lg-2">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="" data-target="#profile" data-toggle="tab"
                                       className="nav-link active">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={this.getCoursesForUser} href="" data-target="#messages"
                                       data-toggle="tab"
                                       className="nav-link">Enrolled courses</a>
                                </li>
                                <li className="nav-item">
                                    <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                                </li>
                            </ul>
                            <div className="tab-content py-4">
                                <div className="tab-pane active" id="profile">
                                    <h2 className="mb-3">User Profile</h2>
                                    <h3>Hello, {this.state.username}</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>About</h5>
                                            <p><h5>{this.state.description}</h5></p>
                                            <p>
                                                <h5>Full name: {this.state.firstName} {this.state.lastName}</h5>
                                            </p>
                                            <p>
                                                <h5>Phone Number: {this.state.phoneNumber}</h5>
                                            </p>
                                            <p>
                                                <h5>Email address: {this.state.email}</h5>
                                            </p>
                                        </div>
                                        <div className="col-md-12">
                                            <h5 className="mt-2"><span
                                                className="fa fa-clock-o ion-clock float-right"></span> Recent Activity
                                            </h5>
                                            <table className="table table-sm table-hover table-striped">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <strong>Abby</strong> joined ACME Project Team
                                                        in <strong>`Collaboration`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Gary</strong> deleted My Board1
                                                        in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Kensington</strong> deleted MyBoard3
                                                        in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>John</strong> deleted My Board1
                                                        in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <strong>Skell</strong> deleted his post Look at Why this is..
                                                        in <strong>`Discussions`</strong>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="messages">
                                    <table className="table table-hover table-striped">
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
                                <div className="tab-pane" id="edit">
                                    <form role="form">
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">First
                                                name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="Jane"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Last
                                                name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="Bishop"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="email" value="email@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-3 col-form-label form-control-label">Company</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value=""/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-3 col-form-label form-control-label">Website</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="url" value=""/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-3 col-form-label form-control-label">Address</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value=""
                                                       placeholder="Street"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label"></label>
                                            <div className="col-lg-6">
                                                <input className="form-control" type="text" value=""
                                                       placeholder="City"/>
                                            </div>
                                            <div className="col-lg-3">
                                                <input className="form-control" type="text" value=""
                                                       placeholder="State"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Time
                                                Zone</label>
                                            <div className="col-lg-9">
                                                <select id="user_time_zone" className="form-control" size="0">
                                                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                                    <option value="Alaska">(GMT-09:00) Alaska</option>
                                                    <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Arizona">(GMT-07:00) Arizona</option>
                                                    <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Central Time (US &amp; Canada)"
                                                            selected="selected">(GMT-06:00) Central Time
                                                        (US &amp; Canada)
                                                    </option>
                                                    <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern
                                                        Time (US &amp; Canada)
                                                    </option>
                                                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-3 col-form-label form-control-label">Username</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" value="janeuser"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label
                                                className="col-lg-3 col-form-label form-control-label">Password</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Confirm
                                                password</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label"></label>
                                            <div className="col-lg-9">
                                                <input type="reset" className="btn btn-secondary" value="Cancel"/>
                                                <input type="button" className="btn btn-primary"
                                                       value="Save Changes"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 text-center">
                            <img src={this.state.profilePictureName} width="300pc" height="300pc"
                                 className="mx-auto img-fluid img-circle d-block"
                                 alt="avatar"/>
                            <div className="justify-content container text-left">
                                <small id="fileHelp" className="form-text text-muted mt-5">Upload profile
                                    picture</small>
                                <input
                                    onChange={this.changeInputField}
                                    ref={this.profilePictureRef}
                                    type="file"
                                    className="custom-file"
                                    id="profilePicture"
                                    aria-describedby="fileHelp"
                                    name="profilePicture"
                                />
                                <button onClick={this.changeProfilePicture} className="btn btn-primary">Change profile
                                    picture
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_URL + '/users/user', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status !== 200) {
                this.props.history.push('/users/login');
                window.location.reload();
                return;
            }
            const jsonResponse = await response.json();
            let user = JSON.parse(JSON.stringify(jsonResponse));
            console.log('nasdasd', user['profilePictureName']);
            this.setState({
                username: user['username'],
                description: user['description'],
                firstName: user['firstName'],
                lastName: user['lastName'],
                phoneNumber: user['phoneNumber'],
                email: user['email'],
                profilePictureName: process.env.REACT_APP_URL + '/resource/images/' + user['profilePictureName']
            });
        }).catch(error => {
            console.log(error);
        });
    };

    getCoursesForUser = () => {
        const coursesTable = document.getElementById('courses-body');
        coursesTable.innerHTML = '';
        const loggedUser = localStorage.getItem('loggedUser');
        fetch(process.env.REACT_APP_URL + '/courses/user/' + loggedUser, {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const coursesForUserJsonResponse = await response.json();
            let coursesMap = JSON.parse(JSON.stringify(coursesForUserJsonResponse));
            coursesMap.forEach(course => {
                const tableRowElement = document.createElement('tr');
                const tableDataCellElement = document.createElement('td');
                const categorySpanElements = document.createElement('span');
                categorySpanElements.setAttribute('class', 'float-right font-weight-bold');
                categorySpanElements.textContent = course['category']['name'];
                tableDataCellElement.appendChild(categorySpanElements);
                const nameParagraphElement = document.createElement('p');
                nameParagraphElement.textContent = 'Course name: ' + course['name'];
                const descriptionParagraphElement = document.createElement('p');
                descriptionParagraphElement.textContent = 'Description: ' + course['description'];
                tableDataCellElement.appendChild(nameParagraphElement);
                tableDataCellElement.appendChild(descriptionParagraphElement);
                const courseLinkParagraphElement = document.createElement('p');
                const courseLinkAnchorTagElement = document.createElement('a');
                courseLinkAnchorTagElement.href = '/courses/view/' + course['name'];
                courseLinkAnchorTagElement.textContent = 'Go to the course page.';
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
            credentials: 'include',
            body: registerFormData
        }).then(async response => {
            await response.text();
            if (response.status === 200) {
                this.props.history.push('/users/profile');
                window.location.reload();
                return;
            }
            alert('Profile picture has not been updated!');
        });
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default UserProfile;