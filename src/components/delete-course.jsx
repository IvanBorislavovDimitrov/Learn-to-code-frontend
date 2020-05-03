import React, {Component} from 'react';

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

                <div className="col-md-7 mt-4 container">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Course name</label>
                        <input
                            onChange={this.changeInputField}
                            name="courseName"
                            type="text"
                            className="form-control"
                            id="courseNameInputField"
                            placeholder="Enter a username"
                        />
                        <div hidden={this.state.valid} className="text-danger">Course not found!</div>
                    </div>
                    <button onClick={this.deleteCourse} className="btn btn-primary">Delete course</button>
                </div>
            </React.Fragment>
        )
    }

    deleteCourse = () => {
        const courseNameInputField = document.getElementById('courseNameInputField');
        courseNameInputField.setAttribute('class', 'form-control    ');
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