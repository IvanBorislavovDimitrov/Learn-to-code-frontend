import React, { Component } from 'react';

class UpdateCourseCategory extends Component {
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
                <div className="col-md-4 mt-4 container">
                    <div className="text-center border border-light p-5 card h-100 w-100">
                        <form onSubmit={this.updateCourseCategory}>
                            <div className="form-group">
                                <h3 htmlFor="exampleInputEmail1">Име на категорията на курса</h3>
                                <select
                                    name="courseCategoryName"
                                    className="form-control"
                                    id="courseCategoryNameSelect"
                                    placeholder="Име на категорията на курса"
                                    onChange={this.changeInputField}>

                                </select>
                                <textarea
                                    name="courseCategoryDescription"
                                    className="form-control"
                                    id="usernameInputField"
                                    placeholder="Описание на категорията на курса"
                                    rows="10"
                                    onChange={this.changeInputField}
                                    value={this.courseCategoryDescription}
                                />
                                <div className="form-group mt-3">
                                    <small id="fileHelp" className="form-text text-muted">Изображение</small>
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
                                Обнови категорията на курса
                        </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.getCourseCategories();
    }

    updateCourseCategory = event => {
        event.preventDefault();
        const currentThis = this;

        async function update() {
            let formData = new FormData();
            formData.append('thumbnail', currentThis.thumbnailFileUpload.current.files[0], currentThis.thumbnailFileUpload.current.files[0].name);
            formData.append('name', currentThis.state.courseCategoryName);
            formData.append('description', currentThis.state.courseCategoryDescription);
            return await fetch(process.env.REACT_APP_URL + '/course-categories/update', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: formData
            });
        }

        update().then(async respone => {
            if (respone.status === 200) {
                await respone.json();
                alert('Category updated!');
                this.props.history.push('/');
                window.location.reload();
            } else {
                alert("Нещо се обърка. Презареди страницата!");
            }
        });
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    getCourseCategories = () => {
        fetch(process.env.REACT_APP_URL + '/course-categories', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const courseCategoryNameSelect = document.getElementById('courseCategoryNameSelect');
            const courseCategories = JSON.parse(JSON.stringify(jsonResponse));
            let isSelected = false;
            courseCategories.forEach(courseCategory => {
                const option = document.createElement('option');
                option.textContent = courseCategory['name'];
                if (!isSelected) {
                    option.setAttribute('selected', '');
                    isSelected = true;
                    this.setState({
                        courseCategoryName: courseCategory['name'],
                        courseCategoryDescription: courseCategory['description']
                    });
                }
                courseCategoryNameSelect.appendChild(option);
            });
        }).catch(error => {
            console.log(error);
        });
    }
}


export default UpdateCourseCategory;