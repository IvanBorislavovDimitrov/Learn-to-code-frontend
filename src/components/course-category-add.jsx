import React, {Component} from 'react';

class AddCourseCategory extends Component {
    state = {
        courseCategoryName: null,
        courseCategoryDescription: null
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <form onSubmit={this.addCourseCategory}>
                        <div className="form-group">
                            <h3 htmlFor="exampleInputEmail1">Course Category Name</h3>
                            <input
                                name="courseCategoryName"
                                type="text"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Course Category Name"
                                onChange={this.changeInputField}
                            />
                            <textarea
                                name="courseCategoryDescription"
                                className="form-control"
                                id="usernameInputField"
                                placeholder="Course Category Description"
                                rows="10"
                                onChange={this.changeInputField}
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

    addCourseCategory = event => {
        event.preventDefault();
        const currentThis = this;

        async function add() {
            return await fetch(process.env.REACT_APP_URL + '/course-categories', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: currentThis.state.courseCategoryName,
                    description: currentThis.state.courseCategoryDescription
                })
            });
        }

        add().then(async respone => {
            if (respone.status === 200) {
                const responseJson = await respone.json();
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert("Something went wrong. Check the console for error.");
            }
        });
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}


export default AddCourseCategory;