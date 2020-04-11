import React, { Component } from "react";

class ViewCourse extends Component {
    state = {
        courseName: null,
        teacherName: null,
        description: null,
        startDate: null,
        endDate: null,
        category: null,
        videosFullNames: [],
        currentVideoTitle: null,
        currentVideoName: null
    }
    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="blog" class="blog">
                        <div class="container">

                            <div class="row">

                                <div class="col-lg-8 entries">

                                    <article class="entry entry-single">

                                        <div class="justify-content container">
                                            <video id="video" controls>

                                            </video>

                                        </div>

                                        <h2 class="entry-title">
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
                                        <img src="assets/img/blog-author.jpg" class="rounded-circle float-left" alt="" />
                                        <h4>{this.state.teacherName}</h4>
                                        <div class="social-links">
                                            <a href="https://twitters.com/#"><i class="icofont-twitter"></i></a>
                                            <a href="https://facebook.com/#"><i class="icofont-facebook"></i></a>
                                            <a href="https://instagram.com/#"><i class="icofont-instagram"></i></a>
                                        </div>
                                        <p>
                                            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
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

                                        <div id="comment-2" class="comment clearfix">
                                            <img src="assets/img/comments-2.jpg" class="comment-img  float-left" alt="" />
                                            <h5><a href="">Aron Alvarado</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                            <p>
                                                Ipsam tempora sequi voluptatem quis sapiente non. Autem itaque eveniet saepe. Officiis illo ut beatae.
            </p>

                                            <div id="comment-reply-1" class="comment comment-reply clearfix">
                                                <img src="assets/img/comments-3.jpg" class="comment-img  float-left" alt="" />
                                                <h5><a href="">Lynda Small</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                                <time datetime="2020-01-01">01 Jan, 2020</time>
                                                <p>
                                                    Enim ipsa eum fugiat fuga repellat. Commodi quo quo dicta. Est ullam aspernatur ut vitae quia mollitia id non. Qui ad quas nostrum rerum sed necessitatibus aut est. Eum officiis sed repellat maxime vero nisi natus. Amet nesciunt nesciunt qui illum omnis est et dolor recusandae.

                                                    Recusandae sit ad aut impedit et. Ipsa labore dolor impedit et natus in porro aut. Magnam qui cum. Illo similique occaecati nihil modi eligendi. Pariatur distinctio labore omnis incidunt et illum. Expedita et dignissimos distinctio laborum minima fugiat.

                                                    Libero corporis qui. Nam illo odio beatae enim ducimus. Harum reiciendis error dolorum non autem quisquam vero rerum neque.
              </p>

                                                <div id="comment-reply-2" class="comment comment-reply clearfix">
                                                    <img src="assets/img/comments-4.jpg" class="comment-img  float-left" alt="" />
                                                    <h5><a href="">Sianna Ramsay</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                                    <time datetime="2020-01-01">01 Jan, 2020</time>
                                                    <p>
                                                        Et dignissimos impedit nulla et quo distinctio ex nemo. Omnis quia dolores cupiditate et. Ut unde qui eligendi sapiente omnis ullam. Placeat porro est commodi est officiis voluptas repellat quisquam possimus. Perferendis id consectetur necessitatibus.
                </p>

                                                </div>

                                            </div>

                                        </div>

                                        <div id="comment-3" class="comment clearfix">
                                            <img src="assets/img/comments-5.jpg" class="comment-img  float-left" alt="" />
                                            <h5><a href="">Nolan Davidson</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                            <p>
                                                Distinctio nesciunt rerum reprehenderit sed. Iste omnis eius repellendus quia nihil ut accusantium tempore. Nesciunt expedita id dolor exercitationem aspernatur aut quam ut. Voluptatem est accusamus iste at.
                                                Non aut et et esse qui sit modi neque. Exercitationem et eos aspernatur. Ea est consequuntur officia beatae ea aut eos soluta. Non qui dolorum voluptatibus et optio veniam. Quam officia sit nostrum dolorem.
            </p>

                                        </div>

                                        <div id="comment-4" class="comment clearfix">
                                            <img src="assets/img/comments-6.jpg" class="comment-img  float-left" alt="" />
                                            <h5><a href="">Kay Duggan</a> <a href="#" class="reply"><i class="icofont-reply"></i> Reply</a></h5>
                                            <time datetime="2020-01-01">01 Jan, 2020</time>
                                            <p>
                                                Dolorem atque aut. Omnis doloremque blanditiis quia eum porro quis ut velit tempore. Cumque sed quia ut maxime. Est ad aut cum. Ut exercitationem non in fugiat.
            </p>

                                        </div>

                                        <div class="reply-form">
                                            <h4>Leave a Reply</h4>
                                            <p>Your email address will not be published. Required fields are marked * </p>
                                            <form action="">
                                                <div class="row">
                                                    <div class="col-md-6 form-group">
                                                        <input name="name" type="text" class="form-control" placeholder="Your Name*" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <input name="email" type="text" class="form-control" placeholder="Your Email*" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col form-group">
                                                        <input name="website" type="text" class="form-control" placeholder="Your Website" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col form-group">
                                                        <textarea name="comment" class="form-control" placeholder="Your Comment*"></textarea>
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
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = video["videoTitle"];
                h5.appendChild(a);
                firstDiv.appendChild(h5);
                agenda.appendChild(firstDiv);
            });

            const video = document.getElementById('video');
            const source = document.createElement('source');
            source.src = "http://localhost:8080/resource/videos/" + courseModel["videosNames"][0]["videoFullName"];
            source.type = "video/mp4";
            video.appendChild(source);

            this.setState({
                courseName: courseModel["name"],
                teacherName: courseModel["teacher"]["username"],
                description: courseModel["description"],
                startDate: courseModel["startDate"]["dayOfMonth"] + "-" + courseModel["startDate"]["monthValue"] + "-" + courseModel["startDate"]["year"],
                endDate: courseModel["endDate"]["dayOfMonth"] + "-" + courseModel["endDate"]["monthValue"] + "-" + courseModel["endDate"]["year"],
                category: courseModel["category"]["name"]
            });
        });
    }
}

export default ViewCourse;