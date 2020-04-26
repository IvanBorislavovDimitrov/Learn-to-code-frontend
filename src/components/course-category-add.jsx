import React, {Component} from 'react';

class AddCourseCategory extends Component {
    state = {
        courseCategoryName: null,
        courseCategoryDescription: null
    };

    constructor() {
        super();
        this.thumbnailFileUpload = React.createRef();
    }

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
            let formData = new FormData();
            formData.append('thumbnail', currentThis.thumbnailFileUpload.current.files[0], currentThis.thumbnailFileUpload.current.files[0].name);
            formData.append('name', currentThis.state.courseCategoryName);
            formData.append('description', currentThis.state.courseCategoryDescription);
            return await fetch(process.env.REACT_APP_URL + '/course-categories', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: formData
            });
        }

        add().then(async respone => {
            if (respone.status === 200) {
                const responseJson = await respone.json();
                alert('Category added!');
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