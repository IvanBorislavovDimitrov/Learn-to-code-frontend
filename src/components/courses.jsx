import React, { Component, useEffect } from "react";
import { Redirect } from "react-router-dom";
import qs from 'qs'

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: "Java"
        };
    }

    state = {};
    render() {
        return (
            <React.Fragment>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li>Courses</li>
                        </ol>
                        <h2>Courses</h2>
                    </div>
                </section>

                <section id="blog" className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 entries">

                                <div id="removeParent">
                                    <article id="remove" className="entry">
                                        <div className="entry-img justify-content-center align-items-center">
                                            <div className="spinner-border text-warning" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div id="courses">

                                </div>

                                <div className="blog-pagination">
                                    <ul id="paging" className="justify-content-center">
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <h3 className="sidebar-title">Search</h3>
                                    <div className="sidebar-item search-form">
                                        <form onSubmit={this.search}>
                                            <input
                                                onChange={this.changeInputField}
                                                name="courseName"
                                                type="text"
                                                id="passwordInputField"
                                                placeholder="Java"
                                            />
                                            <button type="submit"><i className="icofont-search"></i></button>
                                        </form>
                                    </div>
                                    <h3 className="sidebar-title">Categories</h3>
                                    <div className="sidebar-item categories">
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
        this.addPages();
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    search = (event) => {
        event.preventDefault();
        const coursesElement = document.getElementById('courses');
        coursesElement.innerHTML = '';
        this.removeLoading();
        this.loadLoading();
        this.loadCourses(this.state.courseName);
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
                courseCategoryHref.href = '/courses?category=' + courseCategory['name'];
                courseCategoryHref.textContent = courseCategory['name'];
                courseCategoryListItem.appendChild(courseCategoryHref);
                courseCategoriesUl.appendChild(courseCategoryListItem);
            })
            console.log(parsedCourseCategories);
        }).catch((err) => {
            console.log(err);
        });
    }

    loadCourses = (courseName, pageNumber) => {
        console.log("invoking with: " + courseName);
        let coursesResource = '/courses?';
        if (courseName !== null && courseName !== undefined) {
            coursesResource += 'name=' + courseName;
        }
        if (pageNumber !== null && pageNumber !== undefined) {
            coursesResource += 'page=' + pageNumber;
        }

        fetch(process.env.REACT_APP_URL + coursesResource, {
            method: 'GET',
            credentials: 'include'
        }).then(async res => {
            const coursesJson = await res.json();
            const parsedCourses = JSON.parse(JSON.stringify(coursesJson));

            this.removeLoading();

            if (parsedCourses.length == 0) {
                const h1 = document.createElement('h1');
                h1.textContent = "No courses found!";
                h1.setAttribute('class', 'center d-flex justify-content-center');
                const coursesDomElementd = document.getElementById('courses');
                coursesDomElementd.appendChild(h1);
            }

            parsedCourses.forEach(course => {
                const article = document.createElement('article');
                article.setAttribute('class', 'entry');

                const firstDiv = document.createElement('div');
                firstDiv.setAttribute('class', 'entry-img');

                const entryTitle = document.createElement('h2');
                entryTitle.setAttribute('class', 'entry-title');

                const title = document.createElement('a');
                title.textContent = course['name'];
                entryTitle.appendChild(title);

                const image = document.createElement("img");
                image.setAttribute('class', 'img-fluid');
                image.src = "data:image/jpeg;base64," + course["base64Thumbnail"];
                firstDiv.appendChild(image);
                article.appendChild(firstDiv);
                article.appendChild(entryTitle);

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
                authorHref.style.color = 'black';
                authorNameLi.appendChild(authorHref);

                const startTime = document.createElement('li');
                startTime.setAttribute('class', 'd-flex align-items-center');
                const startTimeIcon = document.createElement('i');
                startTimeIcon.setAttribute('class', 'icofont-wall-clock');
                const startTimeTime = document.createElement('time');
                startTimeTime.textContent = course['startDate']['dayOfMonth'] + '-' +
                    course['startDate']['monthValue'] + '-' + course['startDate']['year'];
                startTimeTime.style.color = 'black';
                startTime.appendChild(startTimeIcon);
                startTime.appendChild(startTimeTime);

                const endTime = document.createElement('li');
                endTime.setAttribute('class', 'd-flex align-items-center');
                const endTimeIcon = document.createElement('i');
                endTimeIcon.setAttribute('class', 'icofont-wall-clock');
                const endTimeTime = document.createElement('time');
                endTimeTime.textContent = course['endDate']['dayOfMonth'] + '-' +
                    course['endDate']['monthValue'] + '-' + course['endDate']['year'];
                endTimeTime.style.color = 'black';
                endTime.appendChild(endTimeIcon);
                endTime.appendChild(endTimeTime);

                ul.appendChild(authorNameLi);
                ul.appendChild(startTime);
                ul.appendChild(endTime);

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

    removeLoading = () => {
        const toRemove = document.getElementById('remove');
        if (toRemove !== null && toRemove !== undefined) {
            toRemove.parentNode.removeChild(toRemove);
        }
    }


    loadLoading = () => {
        const article = document.createElement('article');
        article.id = 'remove';
        article.setAttribute('class', 'entry');

        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'entry-img justify-content-center align-items-center');

        const secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'spinner-border text-warning');
        secondDiv.setAttribute('role', 'status');

        const span = document.createElement('span');
        span.textContent = 'Loading...';
        span.setAttribute('class', 'sr-only');

        secondDiv.appendChild(span);
        firstDiv.appendChild(secondDiv);
        article.appendChild(firstDiv);

        const removeElement = document.getElementById('removeParent');
        removeElement.appendChild(article);
    }

    addPages = () => {
        fetch(process.env.REACT_APP_URL + "/courses/pages-count", {
            method: 'GET',
            credentials: 'include',
        }).then(async (res) => {
            const pagesCountJson = await res.json();
            const pagesCount = JSON.parse(JSON.stringify(pagesCountJson));
            const paging = document.getElementById('paging');

            const leftArrow = document.createElement('li');
            leftArrow.setAttribute('class', 'disabled');
            const leftArrowI = document.createElement('i');
            leftArrowI.setAttribute('class', 'icofont-rounded-left');
            leftArrow.appendChild(leftArrowI);
            paging.appendChild(leftArrow);

            const firstPage = document.createElement('li');
            firstPage.setAttribute('class', 'active');
            const firstHref = document.createElement('a');
            firstHref.textContent = "1";
            firstPage.appendChild(firstHref);
            paging.appendChild(firstPage);

            for (let i = 1; i < Number.parseInt(pagesCount["count"]); i++) {
                const page = document.createElement('li');
                const href = document.createElement('a');
                href.textContent = i + 1;
                page.appendChild(href);
                paging.appendChild(page);
            }

            const rightArrow = document.createElement('li');
            const aHreaf = document.createElement('a');
            aHreaf.href = '#';
            const rightArrowI = document.createElement('i');
            rightArrowI.setAttribute('class', 'icofont-rounded-right');
            aHreaf.appendChild(rightArrowI);
            rightArrow.appendChild(aHreaf);
            paging.appendChild(rightArrow);

        }).catch((err) => {
            console.log(err);
        });
    }

}

export default Courses;