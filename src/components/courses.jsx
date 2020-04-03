import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import qs from 'qs'

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    state = {};
    render() {
        return (
            <React.Fragment>
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Courses</li>
                        </ol>
                        <h2>Courses</h2>
                    </div>
                </section>

                <section id="blog" class="blog">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 entries">

                                <article id="remove" class="entry">
                                    <div class="entry-img justify-content-center align-items-center">
                                        <div class="spinner-border text-warning" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </article>


                                <div id="courses">

                                </div>

                                <div class="blog-pagination">
                                    <ul class="justify-content-center">
                                        <li class="disabled"><i class="icofont-rounded-left"></i></li>
                                        <li><a href="#">1</a></li>
                                        <li class="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="sidebar">
                                    <h3 class="sidebar-title">Search</h3>
                                    <div class="sidebar-item search-form">
                                        <form action="">
                                            <input type="text" />
                                            <button type="submit"><i class="icofont-search"></i></button>
                                        </form>
                                    </div>
                                    <h3 class="sidebar-title">Categories</h3>
                                    <div class="sidebar-item categories">
                                        <ul id="course-categories-ul">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.loadCategories();
        this.loadCourses();
    }

    loadCategories = () => {
        fetch(process.env.REACT_APP_URL + "/course-categories", {
            method: 'GET',
            credentials: 'include',
        }).then(async (res) => {
            const courseCategoriesjson = await res.json();
            const courseCategoriesUl = document.getElementById('course-categories-ul');
            const parsedCourseCategories = JSON.parse(JSON.stringify(courseCategoriesjson));
            parsedCourseCategories.forEach(courseCategory => {
                const courseCategoryListItem = document.createElement('li');
                const courseCategoryHref = document.createElement('a');
                courseCategoryHref.href = '#';
                courseCategoryHref.textContent = courseCategory['name'];
                courseCategoryListItem.appendChild(courseCategoryHref);
                courseCategoriesUl.appendChild(courseCategoryListItem);
            })
            console.log(parsedCourseCategories);
        }).catch((err) => {
            console.log(err);
        });
    }

    loadCourses = () => {
        fetch(process.env.REACT_APP_URL + "/courses", {
            method: 'GET',
            credentials: 'include'
        }).then(async res => {
            const coursesJson = await res.json();
            const parsedCourses = JSON.parse(JSON.stringify(coursesJson));

            const toRemove = document.getElementById('remove');
            toRemove.parentNode.removeChild(toRemove);

            parsedCourses.forEach(course => {
                const article = document.createElement('article');
                article.setAttribute('class', 'entry');

                const firstDiv = document.createElement('div');
                firstDiv.setAttribute('class', 'entry-img');

                const image = document.createElement("img");
                image.setAttribute('class', 'img-fluid');
                image.src = "data:image/jpeg;base64," + course["base64Thumbnail"];
                firstDiv.appendChild(image);
                article.appendChild(firstDiv);

                const h2 = document.createElement('h2');
                h2.setAttribute('class', 'entry-title');

                const a = document.createElement('a');
                a.href = '/courses/' + course['name'];
                h2.appendChild(a);
                article.appendChild(h2);

                const secondDiv = document.createElement('div');
                secondDiv.setAttribute('class', 'entry-meta');

                const ul = document.createElement('ul');
                const authorNameLi = document.createElement('li');
                authorNameLi.setAttribute('class', 'd-flex align-items-center');

                const authorIcon = document.createElement('i');
                authorIcon.setAttribute('class', 'icofont-user');
                authorNameLi.appendChild(authorIcon);

                const authorHref = document.createElement('a');
                authorHref.href = '#';
                authorHref.textContent = course['teacher']['username'];
                authorNameLi.appendChild(authorHref);

                ul.appendChild(authorNameLi);
                secondDiv.appendChild(ul);
                article.appendChild(secondDiv);

                const thirdDiv = document.createElement('div');
                thirdDiv.setAttribute('class', 'entry-content');

                const p = document.createElement('p');
                p.textContent = course['description'];
                thirdDiv.appendChild(p);

                const fourthDiv = document.createElement('div');
                fourthDiv.setAttribute('class', 'read-more');

                const a2 = document.createElement('a');
                a2.textContent = 'Read more';
                fourthDiv.appendChild(a2);
                thirdDiv.appendChild(fourthDiv);

                article.appendChild(thirdDiv);

                const coursesDomElementd = document.getElementById('courses');
                coursesDomElementd.appendChild(article);
            });

        }).catch(err => {
            console.log(err);
        });
    }

}

export default Courses;


{/* <article class="entry">
<div class="entry-img">
    <img src="assets/img/blog-4.jpg" alt="" class="img-fluid" />
</div>
<h2 class="entry-title">
    <a href="blog-single.html">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</a>
</h2>
<div class="entry-meta">
    <ul>
        <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
        <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
    </ul>
</div>
<div class="entry-content">
    <p>
        Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
        Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.</p>
    <div class="read-more">
        <a href="blog-single.html">Read More</a>
    </div>
</div>
</article> */}