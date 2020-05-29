import React, { Component } from 'react';

class DeleteCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseName: null,
            valid: true
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container">
                    <div className="text-center border border-light p-5 card h-100 w-100">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Име на курс</label>
                            <input
                                onChange={this.changeInputField}
                                name="courseName"
                                type="text"
                                className="form-control"
                                id="courseNameInputField"
                                placeholder="Въведи име на курс"
                            />
                            <div hidden={this.state.valid} className="text-danger">Курсът не беше открит!</div>
                        </div>
                        <button onClick={this.deleteCourse} className="btn btn-primary">Изтрий курс</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    deleteCourse = () => {
        const courseNameInputField = document.getElementById('courseNameInputField');
        courseNameInputField.setAttribute('class', 'form-control');
        this.setState({
            valid: true
        });
        fetch(process.env.REACT_APP_URL + '/courses/delete/' + this.state.courseName, {
            method: 'DELETE',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            let responseMap = JSON.parse(JSON.stringify(jsonResponse));
            if (response.status === 200) {
                this.props.history.push('/users/login');
                window.location.reload();
            } else if (response.status === 400) {
                if (responseMap['type'] === 'NotFoundException') {
                    const courseNameInputField = document.getElementById('courseNameInputField');
                    courseNameInputField.setAttribute('class', 'form-control is-invalid');
                    this.setState({
                        valid: false
                    });
                }
            } else {
                alert(await response.text());
            }
        }).catch(error => {
            console.log(error);
        })
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}


export default DeleteCourse;