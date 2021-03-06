import React, { Component } from 'react';

class UpdateCourseCategory extends Component {
    state = {
        courseCategoryName: null,
        courseCategoryDescription: null,
        isDescInvalid: false,
        isImageInvalid: false
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
                                    id="categoryDescId"
                                    placeholder="Описание на категорията на курса"
                                    rows="10"
                                    onChange={this.changeInputField}
                                    value={this.courseCategoryDescription}
                                />
                                <div hidden={!this.state.isDescInvalid} className="text-danger mb-3">Въведи описание!</div>
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
                                    <div hidden={!this.state.isImageInvalid} className="text-danger mb-3">Въведи описание!</div>
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
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles == null || !userRoles.includes('ROLE_MODERATOR')) {
            this.props.history.push('/not-found');
            return;
        }
        this.getCourseCategories();
    }

    updateCourseCategory = event => {
        event.preventDefault();
        const currentThis = this;

        async function update() {
            let isValid = true;
            const categoryDescId = document.getElementById('categoryDescId');
            categoryDescId.setAttribute('class', 'form-control');
            currentThis.setState({
                isDescInvalid: false
            });
            if (currentThis.state.courseCategoryDescription == null || currentThis.state.courseCategoryDescription == undefined) {
                categoryDescId.setAttribute('class', 'form-control is-invalid');
                currentThis.setState({
                    isDescInvalid: true
                });
                isValid = false;
            }

            const thumbnailInput = document.getElementById('thumbnailInput');
            thumbnailInput.setAttribute('class', 'form-control');
            currentThis.setState({
                isImageInvalid: false
            });
            if (currentThis.state.thumbnail == null || currentThis.state.thumbnail == undefined) {
                console.log()
                thumbnailInput.setAttribute('class', 'is-invalid');
                currentThis.setState({
                    isImageInvalid: true
                });
                isValid = false;
            }

            if (!isValid) {
                return;
            }

            let formData = new FormData();
            formData.append('thumbnail', currentThis.thumbnailFileUpload.current.files[0], currentThis.thumbnailFileUpload.current.files[0].name);
            formData.append('name', currentThis.state.courseCategoryName);
            formData.append('description', currentThis.state.courseCategoryDescription);
            return await fetch(process.env.REACT_APP_URL + '/course-categories/update', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: formData
            });
        }

        update().then(async respone => {
            if (respone == null || respone == undefined) {
                return;
            }
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
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
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