import React, { Component } from "react";

class ViewCourse extends Component {
    state = {
        courseName: null,
        teacherName: null,
        description: null,
        startDate: null,
        endDate: null,
        category: null,
        videosTitles: [],
        videosFullNames: [],
        currentVideoTitle: null,
        currentVideoName: null,
        teacherDescription: null,
        teacherProfilePictureName: null,
        commentsCount: 0,
        price: -1,
        isUserEnrolledForCourse: false,
        doesUserHaveCourseInCart: false
    }

    render() {
        return (
            <React.Fragment>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <h2>В момента гледате: {this.state.currentVideoTitle}</h2>
                    </div>
                </section>
                <main id="main">
                    <section id="blog" className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <article className="entry entry-single card">
                                        <div id="video" className="justify-content container">
                                        </div>
                                        <h2 className="entry-title mt-3">
                                            <a>{this.state.courseName}</a>
                                        </h2>
                                        <div className="entry-meta">
                                            <ul>
                                                <li className="d-flex align-items-center"><i className="icofont-user" />
                                                    <a href={'/users/' + this.state.teacherName + '/profile'}>{this.state.teacherName}</a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-wall-clock" /> <a href="#">
                                                        <time>{this.state.startDate}</time>
                                                    </a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-wall-clock" /> <a href="#">
                                                        <time>{this.state.endDate}</time>
                                                    </a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-comment" /> <a
                                                        href="#">{this.state.commentsCount} Коментара</a></li>
                                            </ul>
                                        </div>
                                        <div className="jumbotron-fluid">
                                            <button onClick={this.enrolledLoggedUserForCourse}
                                                hidden={this.state.isUserEnrolledForCourse} type="button"
                                                className="btn btn-warning mr-3">Запиши се за курса, за да разкриеш цялото съдържание
                                            </button>
                                            <button onClick={this.addToCourseToCart}
                                                hidden={this.state.isUserEnrolledForCourse || this.state.doesUserHaveCourseInCart}
                                                type="button"
                                                className="btn btn-success mr-3">Добави в количка
                                            </button>
                                            <div hidden={this.state.isUserEnrolledForCourse} className="entry-content">
                                                <h3>Price - ${this.state.price}</h3>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <h3>Категория</h3>
                                            <p>{this.state.category}</p>
                                        </div>
                                        <div className="entry-content">
                                            <h3>Описание</h3>
                                            <p>{this.state.description}</p>
                                        </div>

                                        <div className="entry-footer clearfix">
                                            <div className="float-left">
                                                <i className="icofont-folder" />
                                                <ul className="cats ml-2">
                                                    <li><a href="#">{this.state.category}</a></li>
                                                </ul>
                                            </div>
                                            <div className="float-right share">
                                                <a href="#" title="Share on Twitter"><i
                                                    className="icofont-twitter" /></a>
                                                <a href="#" title="Share on Facebook"><i
                                                    className="icofont-facebook" /></a>
                                                <a href="#" title="Share on Instagram"><i
                                                    className="icofont-instagram" /></a>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="blog-author clearfix custom-white">
                                        <img src={this.state.teacherProfilePictureName}
                                            className="rounded-circle float-left" alt="" />
                                        <h4><a href={'/users/' + this.state.teacherName + '/profile'}>{this.state.teacherName}</a></h4>
                                        <div className="social-links">
                                            <a href="https://twitters.com/#"><i className="icofont-twitter" /></a>
                                            <a href="https://facebook.com/#"><i className="icofont-facebook" /></a>
                                            <a href="https://instagram.com/#"><i className="icofont-instagram" /></a>
                                        </div>
                                        <p>{this.state.teacherDescription}</p>
                                    </div>
                                    <div className="blog-comments">
                                        <h4 className="comments-count">Коментари</h4>
                                        <div id="comments-section">

                                        </div>

                                        <div className="reply-form card">
                                            <h4>Напиши коментар</h4>
                                            <form onSubmit={this.addComment}>
                                                <div className="row">
                                                    <div className="col form-group">
                                                        <textarea id="commentContent" name="comment" rows="5"
                                                            className="form-control" placeholder="Вашият коментар" />
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Напиши коментар</button>
                                            </form>
                                        </div>
                                        {/* 
                                        <div className="reply-form card">
                                            <h4>Rate this course</h4>
                                            <select class="browser-default custom-select">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <button type="submit" className="btn btn-primary mt-3">Rate</button>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar card">
                                        <h3 className="sidebar-title">Съдържание</h3>
                                        <div id="agenda" className="sidebar-item h6 ">
                                            <table class="table table-hover table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Име на лекцията</th>
                                                        <th scope="col">Гледай</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="table-body">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.checkIsUserEnrolledForCourse();
        const courseName = this.getCourseName();
        this.setCourseByName(courseName);
        this.loadComments(courseName);
        this.checkIfUserHasCourseInCart();
    }

    addComment = event => {
        event.preventDefault();
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        if (!isLoggedIn) {
            this.props.history.push('/users/login');
            window.location.reload();
        }

        const commentContent = document.getElementById('commentContent').value;
        const courseName = this.getCourseName();
        let commentRequest = {
            content: commentContent,
            courseName: courseName
        };

        async function sendComment() {
            return await fetch(process.env.REACT_APP_URL + '/comments/add', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentRequest)
            });
        }

        sendComment().then(async respone => {
            if (respone.status === 200) {
                window.location.reload();
            } else {
                alert("Коментарът не беше публикуван. Опитай отново!");
            }
        });
    }

    getCourseName = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    }

    setCourseByName = async (courseName) => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + "/courses/" + courseName, {
            method: 'GET',
            credentials: 'include',
        }).then(async (response) => {
            const coursesResponseJson = await response.json();
            let courseModel = JSON.parse(JSON.stringify(coursesResponseJson));
            const agenda = document.getElementById('agenda');
            let count = 1;
            courseModel["videosNames"].forEach(async video => {
                const firstDiv = document.createElement('div');
                firstDiv.setAttribute('class', 'post-item clearfix');
                const h5 = document.createElement('h5');

                const button = document.createElement('button');
                button.textContent = 'Отвори';
                button.setAttribute('class', 'btn btn-warning btn-sm');

                const tableBodyAgenda = document.getElementById('table-body');
                const tableRow = document.createElement('tr');
                const thRowElementd = document.createElement('th');
                thRowElementd.setAttribute('scope', 'row');
                thRowElementd.textContent = count;
                const tdName = document.createElement('td');
                tdName.textContent = video['videoTitle'];
                const tdLink = document.createElement('td');
                const isEnrolled = await currentThis.checkIsUserEnrolledForCourse();
                console.log('pishkii ', isEnrolled);
                if (count === 1) {
                    tdLink.appendChild(button);
                } else if (isEnrolled) {
                    tdLink.appendChild(button);
                } else {
                    const locked = document.createElement('button');
                    locked.textContent = 'Locked';
                    locked.setAttribute('class', 'btn btn-danger btn-sm');
                    tdLink.appendChild(locked);
                }
                tableRow.appendChild(thRowElementd);
                tableRow.appendChild(tdName);
                tableRow.appendChild(tdLink);
                tableBodyAgenda.appendChild(tableRow);

                count++;
                button.onclick = () => {
                    const videoOuter = document.getElementById('video');
                    videoOuter.innerHTML = '';
                    const videoElement = document.createElement('video');
                    videoElement.setAttribute('class', 'embed-responsive embed-responsive-16by9');
                    videoElement.setAttribute('controls', '');
                    const source = document.createElement('source');
                    source.src = process.env.REACT_APP_URL + "/resource/videos/" + courseModel["name"] + "/" + video["videoFullName"];
                    source.type = "video/mp4";
                    videoElement.appendChild(source);
                    videoOuter.appendChild(videoElement);
                    this.setState({
                        currentVideoTitle: video["videoTitle"]
                    });
                };
                firstDiv.appendChild(h5);
                agenda.appendChild(firstDiv);
            });

            const videoOuter = document.getElementById('video');
            const video = document.createElement('video');
            video.setAttribute('controls', '');
            video.setAttribute('class', 'embed-responsive embed-responsive-16by9')
            const source = document.createElement('source');
            source.src = process.env.REACT_APP_URL + "/resource/videos/" + courseModel["name"] + "/" + courseModel["videosNames"][0]["videoFullName"];
            source.type = "video/mp4";
            video.appendChild(source);
            videoOuter.appendChild(video);

            this.setState({
                courseName: courseModel["name"],
                teacherName: courseModel["teacher"]["username"],
                description: currentThis.splitText(courseModel["description"], 100),
                startDate: courseModel["startDate"]["dayOfMonth"] + "-" + courseModel["startDate"]["monthValue"] + "-" + courseModel["startDate"]["year"],
                endDate: courseModel["endDate"]["dayOfMonth"] + "-" + courseModel["endDate"]["monthValue"] + "-" + courseModel["endDate"]["year"],
                category: courseModel["category"]["name"],
                currentVideoTitle: courseModel["videosNames"][0]["videoTitle"],
                currentVideoName: courseModel["videosNames"][0]["videoFullName"],
                teacherDescription: courseModel["teacher"]["description"],
                teacherProfilePictureName: process.env.REACT_APP_URL + "/resource/images/" + courseModel["teacher"]["profilePictureName"],
                price: courseModel["price"]
            });
        });
    }

    loadComments = courseName => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + "/comments/all?courseName=" + courseName, {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                const jsonResponse = await response.json();
                const comments = JSON.parse(JSON.stringify(jsonResponse));
                comments.forEach(comment => {
                    const commentsSection = document.getElementById('comments-section');
                    const commentOuterDiv = document.createElement('div');
                    commentOuterDiv.setAttribute('class', 'blog-author custom-white');
                    const usernameH5 = document.createElement('h5');
                    const usernameA = document.createElement('a');
                    usernameA.href = '#';
                    usernameA.textContent = comment['author']['username'];
                    usernameH5.appendChild(usernameA);
                    const time = document.createElement('time');
                    time.textContent = comment['date']['dayOfMonth'] + ' ' + comment['date']['month'] + ', ' + comment['date']['year'];
                    const contentParagraph = document.createElement('p');
                    contentParagraph.textContent = currentThis.splitText(comment['content'], 50);
                    commentOuterDiv.appendChild(usernameH5);
                    commentOuterDiv.appendChild(time);
                    commentOuterDiv.appendChild(contentParagraph);
                    let loggedUser = localStorage.getItem('loggedUser');
                    if (loggedUser !== null && loggedUser !== undefined) {
                        if (loggedUser === comment['author']['username']) {
                            const edit = document.createElement('a');
                            edit.setAttribute('class', 'btn btn-warning');
                            edit.href = '/comments/edit/' + comment['id'];
                            edit.textContent = 'Редактирай';
                            commentOuterDiv.appendChild(edit);
                        }
                        const roles = localStorage.getItem('userRoles');
                        const rolesArray = roles.split(",");
                        const isAdminOrModerator = rolesArray.includes('ROLE_ADMIN') || rolesArray.includes('ROLE_MODERATOR');
                        if (loggedUser === comment['author']['username'] || isAdminOrModerator) {
                            const deleteComment = document.createElement('a');
                            deleteComment.setAttribute('class', 'btn btn-danger ml-1');
                            deleteComment.href = '/comments/delete/' + comment['id'];
                            deleteComment.textContent = 'Изтрий';
                            commentOuterDiv.appendChild(deleteComment);
                        }
                    }
                    commentsSection.appendChild(commentOuterDiv);
                });
                this.setState({
                    commentsCount: comments.length
                });
            } else {
                alert('Коментарът не беше изтрит. Опитай отново!');
            }
        }).catch(error => {
            console.log(error.message);
        });
    }

    splitText = (text, count) => {
        if (text.length < count) {
            return text;
        }
        let str = '';
        let start = 0;
        for (let i = 0; i < text.length; i++) {
            if (i % count === 0) {
                str += text.slice(start, i) + "\n";
                start = i;
            }
        }
        return str;
    }

    checkIsUserEnrolledForCourse = async () => {
        const currentThis = this;
        const courseName = this.getCourseName();
        let value = false;
        await fetch(process.env.REACT_APP_URL + '/courses/is-enrolled/' + courseName, {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                const jsonResponse = await response.json();
                const isUserEnrolled = JSON.parse(JSON.stringify(jsonResponse))['userEnrolledForCourse'];
                value = isUserEnrolled;
                console.log('kiras', value);
                currentThis.setState({
                    isUserEnrolledForCourse: isUserEnrolled
                });
            } else {
                value = false;
                console.log(response.status, response);
            }
        }).catch(error => {
            console.log(error);
        });
        console.log('kra', value);
        return value;
    }

    enrolledLoggedUserForCourse = () => {
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        if (!isLoggedIn) {
            this.props.history.push('/users/login');
            window.location.reload();
        }
        // TODO: Add payments, verifications, paypal...
        var courseName = this.getCourseName();
        if (courseName.endsWith('#')) {
            courseName = courseName.substring(0, courseName.length - 2);
        }
        console.log('courssdsdsds', courseName);
        fetch(process.env.REACT_APP_URL + '/courses/enroll/' + courseName, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(async response => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('Enrollment failed!');
            }
        });
    }

    addToCourseToCart = () => {
        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;
        if (!isLoggedIn) {
            this.props.history.push('/users/login');
            window.location.reload();
        }
        const courseName = this.getCourseName();

        async function addToCart() {
            return await fetch(process.env.REACT_APP_URL + '/courses/cart/add/' + courseName, {
                method: 'POST',
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        addToCart().then(async response => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('Добавянето към количката не беше успешно. Опитай отново!');
            }
        });
    }

    checkIfUserHasCourseInCart = () => {
        const currentCourse = this.getCourseName();
        fetch(process.env.REACT_APP_URL + '/courses/cart/all', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            const coursesInCart = JSON.parse(JSON.stringify(jsonResponse));
            coursesInCart.forEach(course => {
                if (course['name'] == currentCourse) {
                    this.setState({
                        doesUserHaveCourseInCart: true
                    });
                    return;
                }
            });
        }).catch(error => {
            console.log(error);
        });
    }


}

export default ViewCourse;