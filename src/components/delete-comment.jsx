import React, { Component } from 'react';

class DeleteComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: null,
            valid: true,
            courseName: null
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4 container card">
                    <div className="col-md-7 mt-4 container text-center">
                        <div className="form-group ">
                            <label htmlFor="exampleInputEmail1">Изтриване на коментар</label>
                            <textarea
                                disabled="disabled"
                                onChange={this.changeInputField}
                                name="content"
                                className="form-control"
                                id="contentInputField"
                            />
                            <div hidden={this.state.valid} className="text-danger">Моля влез в профила си!</div>
                        </div>
                        <button onClick={this.deleteComment} className="btn btn-danger mb-5">Изтрий коментар</button>
                    </div>
                </div>
            </React.Fragment>
        )
    };

    componentDidMount() {
        const userRoles = localStorage.getItem('loggedUser');
        if (userRoles == null) {
            this.props.history.push('/users/login');
            return;
        }
        this.loadComment();
    }

    loadComment = () => {
        const currentThis = this;
        const commentId = this.getCommentId();
        fetch(process.env.REACT_APP_URL + '/comments/' + commentId, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            const jsonResponse = await response.json();
            let commentMap = JSON.parse(JSON.stringify(jsonResponse));
            const contentInputField = document.getElementById('contentInputField');
            contentInputField.value = commentMap['content'];
            currentThis.setState({
                content: commentMap['content'],
                courseName: commentMap['course']['name']
            });
        }).catch(error => {
            console.log(error);
        })
    }

    deleteComment = () => {
        this.setState({
            valid: true
        });
        const commentId = this.getCommentId();

        fetch(process.env.REACT_APP_URL + '/comments/delete/' + commentId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            await response.json();
            if (response.status === 200) {
                this.props.history.push('/courses/view/' + this.state.courseName);
                window.location.reload();
            } else if (response.status === 401 || response.status) {
                this.setState({
                    valid: false
                });
            } else {
                alert('Коментарът не беше изтрит. Пробвай пак!');
            }
        })
    };

    getCommentId = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    };

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
}

export default DeleteComment;