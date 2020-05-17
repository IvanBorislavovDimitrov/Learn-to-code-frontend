import React, { Component } from "react";
import axios from "axios";

class Index extends Component {
    state = {
        content: "",
        githubUsername: null,
        courses: null,
        courseCategoriesUrls: [],
        courseCategoriesNames: [],
        courseCategoriesDescription: [],
        courseCategoriesImagesNames: [],
        lock: false
    };

    render() {

        if (!localStorage.getItem('firstEnterSeen')) {
            this.props.history.push('/first/enter');
            return null;
        }

        let loggedUser = localStorage.getItem('loggedUser');
        let isLoggedIn = loggedUser !== null;

        return (
            <React.Fragment>
                <div className="">
                    <header className="bg-gradient-info py-5 mb-5">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-12">
                                    <h1 className="display-4 text-white mt-5 mb-2">Do you want to learn to code?</h1>
                                    <p className="lead mb-5 text-white-50">Learn-To-Code platform allows you learn to
                                    code
                                    with a bunch of the best tutorials available online. Enroll to our courses and
                                    you
                                    will explore totally different experience of learning new skills, technologies
                                    and
                                        so much more.</p>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <div className="container">

                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a onClick={this.changeToNewestShownCourses} id="newest" className="nav-link active"
                                href="javascript:void(0)">Newest</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeToBestSellersShownCourses} id="best-sellers" className="nav-link"
                                href="javascript:void(0)">Best sellers</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeToTopRatedShownCourses} id="top-rated" className="nav-link"
                                href="javascript:void(0)">Most commented</a>
                        </li>
                    </ul>
                    <br />
                    <div id="courses" className="row">

                        <div id="remove1" className="col-md-4 mb-5">
                            <div className="card h-100 justify-content-center align-items-center">
                                <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div id="remove2" className="col-md-4 mb-5">
                            <div className="card h-100 justify-content-center align-items-center">
                                <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>

                        <div id="remove3" className="col-md-4 mb-5">
                            <div className="card h-100 justify-content-center align-items-center">
                                <div class="spinner-border text-warning" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Explore top categories</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 align-items-stretch ">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[0])}>
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[0]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[0])}
                                        href={this.state.courseCategoriesUrls[0]}>{this.state.courseCategoriesNames[0]}</a>
                                    </h4>
                                    <p>{this.state.courseCategoriesDescription[0]}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[1])}
                                        >
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[1]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[1])}
                                        href={this.state.courseCategoriesUrls[1]}>{this.state.courseCategoriesNames[1]}</a>
                                    </h4>
                                    <p>{this.state.courseCategoriesDescription[1]}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[2])}
                                        >
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[2]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[2])}
                                        href={this.state.courseCategoriesUrls[2]}>{this.state.courseCategoriesNames[2]}</a>
                                    </h4>
                                    <p>{this.state.courseCategoriesDescription[2]}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 align-items-stretch mt-4">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[3])}
                                        >
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[3]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[3])}
                                        href={this.state.courseCategoriesUrls[3]}>{this.state.courseCategoriesNames[3]}</a>
                                    </h4>
                                    <p>{this.state.courseCategoriesDescription[3]}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 align-items-stretch mt-4">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[4])}
                                        >
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[4]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[4])}
                                        href={this.state.courseCategoriesUrls[4]}>{this.state.courseCategoriesNames[4]}</a>
                                    </h4>
                                    <p>{this.state.courseCategoriesDescription[4]}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 align-items-stretch mt-4">
                                <div className="icon-box card">
                                    <div className="mb-3">
                                        <a href="javascript:void(0)"
                                            onClick={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[5])}
                                        >
                                            <img className="card-img-top"
                                                src={this.state.courseCategoriesImagesNames[5]} />
                                        </a>
                                    </div>
                                    <h4><a
                                        onMouseEnter={() => this.categoryOnMouseEventListener(this.state.courseCategoriesNames[5])}
                                        href={this.state.courseCategoriesUrls[5]}>{this.state.courseCategoriesNames[5]}</a>
                                    </h4>
                                    <p id="courseCategoryDescriptionParagraph">{this.state.courseCategoriesDescription[5]}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="clients" className="clients">

                    <div className="container">

                        <div className="section-title">
                            <h2>Clients</h2>
                            Some of our top sponsors and regular users!
                        </div>

                        <div className="row d-flex justify-content-center mt-5 mb-5">
                            <img className="mr-5" width="20%" height="10%"
                                src={process.env.REACT_APP_URL + '/resource/images/client-1.png'} alt="" />
                            <img className="mr-5" width="20%" height="10%"
                                src={process.env.REACT_APP_URL + '/resource/images/client-2.png'} alt="" />
                            <img className="mr-5" width="20%" height="10%"
                                src={process.env.REACT_APP_URL + '/resource/images/client-3.png'} alt="" />
                            <img className="mr-5" width="20%" height="10%"
                                src={process.env.REACT_APP_URL + '/resource/images/client-4.png'} alt="" />
                        </div>

                    </div>
                </section>
            </React.Fragment>
        );
    }

    componentDidMount() {
        if (localStorage.getItem('firstEnterSeen') == 'false') {
            localStorage.setItem('firstEnterSeen', true);
            this.props.history.push('/first/enter');
            window.location.reload();
            return;
        }
        this.getData();
        this.checkUserGithubAccessAvailable();
        this.getCategoriesWithMostCourses();
        this.getCourses('/courses/latest?count=3&loadThumbnails=true');
    }

    getData() {
        axios.get(process.env.REACT_APP_URL)
            .then(response => {
                this.setState({ content: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    checkUserGithubAccessAvailable = () => {
        fetch(process.env.REACT_APP_URL + "/github/user", {
            method: 'GET',
            credentials: 'include',
        }).then(async (res) => {
            const jsonResponse = await res.json();
            this.setState({
                content: this.state.content,
                githubUsername: jsonResponse['login']
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    getCourses = async (endpoint) => {
        await fetch(process.env.REACT_APP_URL + endpoint, {
            method: 'GET',
            credentials: 'include',
        }).then(async (res) => {
            let coursesLatest = await res.json();
            let courses = JSON.parse(JSON.stringify(coursesLatest));
            let coursesDiv = document.getElementById('courses');

            const el1 = document.getElementById('remove1');
            if (el1 !== undefined && el1 !== null) {
                el1.parentNode.removeChild(el1);
            }

            const el2 = document.getElementById('remove2');
            if (el2 !== undefined && el1 !== null) {
                el2.parentNode.removeChild(el2);
            }

            const el3 = document.getElementById('remove3');
            if (el3 !== undefined && el1 !== null) {
                el3.parentNode.removeChild(el3);
            }

            courses.forEach(course => {
                let firstDiv = document.createElement("div");
                firstDiv.setAttribute('class', 'col-md-4 mb-5');

                let secondDiv = document.createElement("div");
                secondDiv.setAttribute('class', 'card h-100');

                let img = document.createElement("img");
                img.setAttribute('class', 'card-img-top');
                img.width = 300;
                img.height = 250;
                img.src = "data:image/jpeg;base64," + course["base64Thumbnail"];

                let thirdDiv = document.createElement("div");
                thirdDiv.setAttribute('class', 'card-body');

                let h4 = document.createElement("h4");
                h4.setAttribute('class', 'card-title');
                h4.textContent = course['name'];

                let p = document.createElement("p");
                p.setAttribute('class', 'card-text');
                if (course['description'].length > 20) {
                    p.textContent = course['description'].substring(0, 120) + "...";
                } else {
                    p.textContent = course['description'];
                }

                let fourthDiv = document.createElement("div");
                fourthDiv.setAttribute('class', 'card-footer');

                let a = document.createElement("a");
                a.setAttribute('class', 'ml-3 btn btn-primary');
                a.href = "/courses/view/" + course["name"];
                a.textContent = "Find out more!";

                const priceH = document.createElement('h2');
                priceH.setAttribute('class', 'ml-5 mt-2');
                priceH.textContent = '$' + course['price'];

                firstDiv.appendChild(secondDiv);
                secondDiv.appendChild(img);
                secondDiv.appendChild(thirdDiv);
                secondDiv.appendChild(fourthDiv);
                thirdDiv.appendChild(h4);
                thirdDiv.appendChild(p);

                const jumb = document.createElement('div');
                jumb.setAttribute('class', 'row');
                jumb.appendChild(a);
                jumb.appendChild(priceH);

                fourthDiv.appendChild(jumb);

                coursesDiv.appendChild(firstDiv);
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    changeToNewestShownCourses = async () => {
        if (this.state.lock) {
            return;
        }
        this.removeActiveFromAll();
        const newest = document.getElementById('newest');
        newest.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.setState({
            lock: true
        });
        await this.getCourses('/courses/latest?count=3&loadThumbnails=true');
        this.setState({
            lock: false
        });
    };

    changeToBestSellersShownCourses = async () => {
        if (this.state.lock) {
            return;
        }
        this.removeActiveFromAll();
        const bestSellers = document.getElementById('best-sellers');
        bestSellers.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.setState({
            lock: true
        });
        await this.getCourses('/courses/get?filter=BEST_SELLERS&limit=3');
        this.setState({
            lock: false
        });
    };

    changeToTopRatedShownCourses = async () => {
        if (this.state.lock) {
            return;
        }
        this.removeActiveFromAll();
        const topRated = document.getElementById('top-rated');
        topRated.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.setState({
            lock: true
        });
        await this.getCourses('/courses/get?filter=MOST_COMMENTED&limit=3');
        this.setState({
            lock: false
        });
    };

    removeActiveFromAll = () => {
        const newest = document.getElementById('newest');
        const bestSellers = document.getElementById('best-sellers');
        const topRated = document.getElementById('top-rated');
        newest.setAttribute('class', 'nav-link');
        bestSellers.setAttribute('class', 'nav-link');
        topRated.setAttribute('class', 'nav-link');
    };

    create3LoadingElements = () => {
        const courses = document.getElementById('courses');
        for (let i = 1; i <= 3; i++) {
            const firstDiv = document.createElement('div');
            firstDiv.setAttribute('class', 'col-md-4 mb-5');
            const secondDiv = document.createElement('div');
            secondDiv.setAttribute('class', 'card h-100 justify-content-center align-items-center');
            const thirdDiv = document.createElement('div');
            thirdDiv.setAttribute('class', 'spinner-border text-warning');
            thirdDiv.setAttribute('role', 'status');
            const innerSpan = document.createElement('span');
            innerSpan.setAttribute('class', 'sr-only');
            thirdDiv.appendChild(innerSpan);
            secondDiv.appendChild(thirdDiv);
            const fourthDiv = document.createElement('card-body');
            fourthDiv.setAttribute('class', 'card-body');
            secondDiv.appendChild(fourthDiv);
            firstDiv.appendChild(secondDiv);
            firstDiv.id = 'remove' + i;
            courses.appendChild(firstDiv);
        }
    }

    getCategoriesWithMostCourses = () => {
        fetch(process.env.REACT_APP_URL + '/course-categories/top?limit=6', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            let categories = JSON.parse(JSON.stringify(jsonResponse));
            let currentCourseCategoriesNames = this.state.courseCategoriesNames;
            let currentCourseCategoriesDescriptions = this.state.courseCategoriesDescription;
            let currentCourseCategoriesUrls = this.state.courseCategoriesUrls;
            let currentCourseCategoriesImagesNames = this.state.courseCategoriesImagesNames;
            categories.forEach(category => {
                currentCourseCategoriesNames.push(category['name']);
                currentCourseCategoriesDescriptions.push(category['description'].length > 60 ? category['description'].substring(0, 60) + '...' : category['description']);
                currentCourseCategoriesUrls.push('/courses?category=' + category['name']);
                currentCourseCategoriesImagesNames.push(process.env.REACT_APP_URL + '/resource/images/' + category['thumbnailName']);
            });
            this.setState({
                courseCategoriesNames: currentCourseCategoriesNames,
                courseCategoriesDescription: currentCourseCategoriesDescriptions
            });
        }).catch(error => {
            console.log(error);
        });
    }


    categoryOnMouseEventListener = (categoryName) => {
        let categoryIndex = -1;
        for (let i = 0; i < this.state.courseCategoriesNames.length; i++) {
            if (this.state.courseCategoriesNames[i] === categoryName) {
                categoryIndex = i;
            }
        }
        let currentCourseCategoriesDescriptions = this.state.courseCategoriesDescription;

        fetch(process.env.REACT_APP_URL + '/course-categories/' + categoryName, {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            let category = JSON.parse(JSON.stringify(jsonResponse));
            currentCourseCategoriesDescriptions[categoryIndex] = category['description'];
            this.setState({
                courseCategoriesDescriptions: currentCourseCategoriesDescriptions
            });
        }).catch(error => {
            console.log(error);
        });
    }

}

export default Index;