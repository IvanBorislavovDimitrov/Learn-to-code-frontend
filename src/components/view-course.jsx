import React, {Component} from "react";

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
        price: 0,
        isUserEnrolledForCourse: false,
        doesUserHaveCourseInCart: false
    }

    render() {
        return (
            <React.Fragment>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <h2>You're currently watching: {this.state.currentVideoTitle}</h2>
                    </div>
                </section>
                <main id="main">
                    <section id="blog" className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 entries">
                                    <article className="entry entry-single">
                                        <div id="video" className="justify-content container">
                                        </div>
                                        <h2 className="entry-title mt-3">
                                            <a>{this.state.courseName}</a>
                                        </h2>
                                        <div className="entry-meta">
                                            <ul>
                                                <li className="d-flex align-items-center"><i className="icofont-user"/>
                                                    <a href="#">{this.state.teacherName}</a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-wall-clock"/> <a href="#">
                                                    <time>{this.state.startDate}</time>
                                                </a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-wall-clock"/> <a href="#">
                                                    <time>{this.state.endDate}</time>
                                                </a></li>
                                                <li className="d-flex align-items-center"><i
                                                    className="icofont-comment"/> <a
                                                    href="#">{this.state.commentsCount} Comments</a></li>
                                            </ul>
                                        </div>
                                        <div className="jumbotron-fluid">
                                            <button onClick={this.enrolledLoggedUserForCourse}
                                                    hidden={this.state.isUserEnrolledForCourse} type="button"
                                                    className="btn btn-warning mr-3">Enroll for course to reveal the
                                                content
                                            </button>
                                            <button onClick={this.addToCourseToCart}
                                                    hidden={this.state.isUserEnrolledForCourse || this.state.doesUserHaveCourseInCart}
                                                    type="button"
                                                    className="btn btn-success mr-3">Add to cart
                                                content
                                            </button>
                                            <div hidden={this.state.isUserEnrolledForCourse} className="entry-content">
                                                <h3>Price - ${this.state.price}</h3>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <h3>Description</h3>
                                            <p>{this.state.description}</p>
                                        </div>

                                        <div className="entry-footer clearfix">
                                            <div className="float-left">
                                                <i className="icofont-folder"/>
                                                <ul className="cats ml-2">
                                                    <li><a href="#">{this.state.category}</a></li>
                                                </ul>
                                            </div>
                                            <div className="float-right share">
                                                <a href="#" title="Share on Twitter"><i
                                                    className="icofont-twitter"/></a>
                                                <a href="#" title="Share on Facebook"><i
                                                    className="icofont-facebook"/></a>
                                                <a href="#" title="Share on Instagram"><i
                                                    className="icofont-instagram"/></a>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="blog-author clearfix">
                                        <img src={this.state.teacherProfilePictureName}
                                             className="rounded-circle float-left" alt=""/>
                                        <h4>{this.state.teacherName}</h4>
                                        <div className="social-links">
                                            <a href="https://twitters.com/#"><i className="icofont-twitter"/></a>
                                            <a href="https://facebook.com/#"><i className="icofont-facebook"/></a>
                                            <a href="https://instagram.com/#"><i className="icofont-instagram"/></a>
                                        </div>
                                        <p>{this.state.teacherDescription}</p>
                                    </div>
                                    <div className="blog-comments">
                                        <h4 className="comments-count">Comments</h4>
                                        <div id="comments-section">

                                        </div>

                                        <div className="reply-form">
                                            <h4>Leave a Comment</h4>
                                            <form onSubmit={this.addComment}>
                                                <div className="row">
                                                    <div className="col form-group">
                                                        <textarea id="commentContent" name="comment" rows="5"
                                                                  className="form-control" placeholder="Your Comment"/>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Post Comment</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar">
                                        <h3 className="sidebar-title">Agenda</h3>
                                        <div id="agenda" className="sidebar-item h6">
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
        const courseName = this.getCourseName();
        this.setCourseByName(courseName);
        this.loadComments(courseName);
        this.checkIsUserEnrolledForCourse();
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

        console.log('putki', commentRequest);

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
                alert("Comment was not uploaded");
            }
        });
    }

    getCourseName = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    }

    setCourseByName = (courseName) => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + "/courses/" + courseName, {
            method: 'GET',
            credentials: 'include',
        }).then(async (response) => {
            const coursesResponseJson = await response.json();
            let courseModel = JSON.parse(JSON.stringify(coursesResponseJson));
            const agenda = document.getElementById('agenda');

            courseModel["videosNames"].forEach(video => {
                const firstDiv = document.createElement('div');
                firstDiv.setAttribute('class', 'post-item clearfix');
                const h5 = document.createElement('h5');
                const button = document.createElement('button');
                button.textContent = video["videoTitle"];
                button.setAttribute('class', 'btn btn-link');
                button.onclick = () => {
                    const videoOuter = document.getElementById('video');
                    videoOuter.innerHTML = '';
                    const videoElement = document.createElement('video');
                    videoElement.setAttribute('class', 'embed-responsive embed-responsive-16by9');
                    videoElement.setAttribute('controls', '');
                    const source = document.createElement('source');
                    source.src = process.env.REACT_APP_URL + "/resource/videos/" + video["videoFullName"];
                    source.type = "video/mp4";
                    videoElement.appendChild(source);
                    videoOuter.appendChild(videoElement);
                    this.setState({
                        currentVideoTitle: video["videoTitle"]
                    });
                };
                h5.appendChild(button);
                firstDiv.appendChild(h5);
                agenda.appendChild(firstDiv);
            });

            const videoOuter = document.getElementById('video');
            const video = document.createElement('video');
            video.setAttribute('controls', '');
            video.setAttribute('class', 'embed-responsive embed-responsive-16by9')
            const source = document.createElement('source');
            source.src = process.env.REACT_APP_URL + "/resource/videos/" + courseModel["videosNames"][0]["videoFullName"];
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
                    commentOuterDiv.setAttribute('class', 'blog-author');
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
                    commentsSection.appendChild(commentOuterDiv);
                });
                this.setState({
                    commentsCount: comments.length
                });
            } else {
                alert('Comments cannot be fetched!');
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

    checkIsUserEnrolledForCourse = () => {
        const currentThis = this;
        const courseName = this.getCourseName();
        fetch(process.env.REACT_APP_URL + '/courses/is-enrolled/' + courseName, {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 200) {
                const jsonResponse = await response.json();
                const isUserEnrolled = JSON.parse(JSON.stringify(jsonResponse))['userEnrolledForCourse'];
                currentThis.setState({
                    isUserEnrolledForCourse: isUserEnrolled
                });
                console.log(isUserEnrolled);
            } else {
                console.log(response.status, response);
            }
        }).catch(error => {
            console.log(error);
        });
    }

    enrolledLoggedUserForCourse = () => {

        // TODO: Add payments, verifications, paypal...

        const courseName = this.getCourseName();

        async function enrollUserForCourse() {
            return await fetch(process.env.REACT_APP_URL + '/courses/enroll/' + courseName, {
                method: 'POST',
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        enrollUserForCourse().then(async response => {
            if (response.status === 200) {
                window.location.reload();
            } else {
                alert('Enrollment failed!');
            }
        });
    }

    addToCourseToCart = () => {

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
                alert('Add to cart failed!');
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