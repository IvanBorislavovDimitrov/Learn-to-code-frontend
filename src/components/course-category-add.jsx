import React, { Component } from 'react';

class AddCourseCategory extends Component {
    state = {
        courseCategoryName: null,
        courseCategoryDescription: null,
        isNameInvalid: false,
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
                        <form onSubmit={this.addCourseCategory}>
                            <div className="form-group">
                                <h3 htmlFor="exampleInputEmail1">Име на категорията на курса</h3>
                                <input
                                    name="courseCategoryName"
                                    type="text"
                                    className="form-control"
                                    id="categoryNameId"
                                    placeholder="Име на категорията на курса"
                                    onChange={this.changeInputField}
                                />
                                <div hidden={!this.state.isNameInvalid} class="text-danger mb-3">Въведи име!</div>
                                <textarea
                                    name="courseCategoryDescription"
                                    className="form-control"
                                    id="categoryDescId"
                                    placeholder="Описане на категорията на курса"
                                    rows="10"
                                    onChange={this.changeInputField}
                                />
                                <div hidden={!this.state.isDescInvalid} class="text-danger mb-3">Въведи описание!</div>
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
                                    <div hidden={!this.state.isImageInvalid} class="text-danger mb-3">Въведи изображение!</div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info">
                                Добавия категория за курс
                        </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    addCourseCategory = event => {
        event.preventDefault();
        const currentThis = this;

        async function add() {
            let isValid = true;
            const categoryNameId = document.getElementById('categoryNameId');
            categoryNameId.setAttribute('class', 'form-control');
            currentThis.setState({
                isNameInvalid: false
            });
            if (currentThis.state.courseCategoryName == null || currentThis.state.courseCategoryName == undefined) {
                categoryNameId.setAttribute('class', 'form-control is-invalid');
                currentThis.setState({
                    isNameInvalid: true
                });
                isValid = false;
            }

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
            return await fetch(process.env.REACT_APP_URL + '/course-categories/add', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                body: formData
            });
        }

        add().then(async response => {
            if (response == null || response == undefined) {
                return;
            }
            if (response.status === 200) {
                const responseJson = await response.json();
                alert('Category added!');
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
}


export default AddCourseCategory;