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
        teacherDescrption: null,
        teacherProfilePictureName: null
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
                    <section id="blog" class="blog">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 entries">
                                    <article class="entry entry-single">
                                        <div id="video" class="justify-content container">
                                        </div>
                                        <h2 class="entry-title mt-3">
                                            <a>{this.state.courseName}</a>
                                        </h2>
                                        <div class="entry-meta">
                                            <ul>
                                                <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="#">{this.state.teacherName}</a></li>
                                                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="#"><time >{this.state.startDate}</time></a></li>
                                                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="#"><time >{this.state.endDate}</time></a></li>
                                                <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="#">12 Comments</a></li>
                                            </ul>
                                        </div>
                                        <div class="entry-content">
                                            <h3>Descirption</h3>
                                            <p>{this.state.description}</p>
                                        </div>
                                        <div class="entry-footer clearfix">
                                            <div class="float-left">
                                                <i class="icofont-folder"></i>
                                                <ul class="cats ml-2">
                                                    <li><a href="#">{this.state.category}</a></li>
                                                </ul>
                                            </div>
                                            <div class="float-right share">
                                                <a href="" title="Share on Twitter"><i class="icofont-twitter"></i></a>
                                                <a href="" title="Share on Facebook"><i class="icofont-facebook"></i></a>
                                                <a href="" title="Share on Instagram"><i class="icofont-instagram"></i></a>
                                            </div>
                                        </div>
                                    </article>
                                    <div class="blog-author clearfix">
                                        <img src={this.state.teacherProfilePictureName} class="rounded-circle float-left" alt="" />
                                        <h4>{this.state.teacherName}</h4>
                                        <div class="social-links">
                                            <a href="https://twitters.com/#"><i class="icofont-twitter"></i></a>
                                            <a href="https://facebook.com/#"><i class="icofont-facebook"></i></a>
                                            <a href="https://instagram.com/#"><i class="icofont-instagram"></i></a>
                                        </div>
                                        <p>{this.state.teacherDescrption}</p>
                                    </div>
                                    <div class="blog-comments">
                                        <h4 class="comments-count">8 Comments</h4>
                                        <div id="comment-1" class="comment clearfix">
                                            <img src="assets/img/comments-1.jpg" class="comment-img  float-left" alt="" />
                                            <h5><a href="">Georgia Reader</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                            <p>
                                                Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                                Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
            </p>
                                        </div>
                                        <div class="reply-form">
                                            <h4>Leave a Comment</h4>
                                            <form onSubmit={this.addComment}>
                                                <div class="row">
                                                    <div class="col form-group">
                                                        <textarea id="commentContent" name="comment" rows="5" class="form-control" placeholder="Your Comment"></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Post Comment</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="sidebar">
                                        <h3 class="sidebar-title">Agenda</h3>
                                        <div id="agenda" class="sidebar-item h6">
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
            const logginResponse = await fetch(process.env.REACT_APP_URL + '/comments', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentRequest)
            });
            return logginResponse;
        }

        sendComment().then(async respone => {
            if (respone.status === 200) {
                console.log("SUCCESS");
            } else {
                alert("Comment was not uploaded");
            }
        });
    }

    getCourseName = () => {
        const splitUrl = window.location.href.split('/');
        return splitUrl[splitUrl.length - 1];
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
                description: courseModel["description"],
                startDate: courseModel["startDate"]["dayOfMonth"] + "-" + courseModel["startDate"]["monthValue"] + "-" + courseModel["startDate"]["year"],
                endDate: courseModel["endDate"]["dayOfMonth"] + "-" + courseModel["endDate"]["monthValue"] + "-" + courseModel["endDate"]["year"],
                category: courseModel["category"]["name"],
                currentVideoTitle: courseModel["videosNames"][0]["videoTitle"],
                currentVideoName: courseModel["videosNames"][0]["videoFullName"],
                teacherDescrption: courseModel["teacher"]["description"],
                teacherProfilePictureName: process.env.REACT_APP_URL + "/resource/images/" + courseModel["teacher"]["profilePictureName"]
            });
        });
    }
}

export default ViewCourse;