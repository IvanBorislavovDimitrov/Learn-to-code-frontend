import React, {Component} from "react";
import axios from "axios";

class Index extends Component {
    state = {
        content: "",
        githubUsername: null,
        courses: null
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

                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <h2>The world's largest selection of courses</h2>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore
                                recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde
                                debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur
                                consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum,
                                alias, adipisci nesciunt voluptate. Voluptatum.</p>
                            <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h2>Contact Us</h2>
                            <hr/>
                            <address>
                                <strong>Start Bootstrap</strong>
                                <br/>3481 Melrose Place
                                <br/>Beverly Hills, CA 90210
                                <br/>
                            </address>
                            <address>
                                <abbr title="Phone">P:</abbr>
                                (123) 456-7890
                                <br/>
                                <abbr title="Email">E:</abbr>
                                <a href="mailto:#">name@example.com</a>
                            </address>
                        </div>
                    </div>

                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a onClick={this.changeToNewestShownCourses} id="newest" className="nav-link active"
                               href="javascript:void(0)">Newest</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeToBestSellersShownCourses} id="best-sellers" className="nav-link"
                               href="javascript:void(0)">Best
                                sellers</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeToTopRatedShownCourses} id="top-rated" className="nav-link"
                               href="javascript:void(0)">Top
                                Rated</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.changeToTopSalesShownCourses} id="top-sales" className="nav-link"
                               href="javascript:void(0)">Top
                                Sales</a>
                        </li>
                    </ul>
                    <br/>
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
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                    <h4><a href="">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4><a href="">Sed ut perspiciatis</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-tachometer"></i></div>
                                    <h4><a href="">Magni Dolores</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-world"></i></div>
                                    <h4><a href="">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-slideshow"></i></div>
                                    <h4><a href="">Dele cardo</a></h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-arch"></i></div>
                                    <h4><a href="">Divera don</a></h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="d-flex justify-content-center">
                    <h1 className="center">User Index page</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <h2>Ping: {this.state.content}</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <h3 hidden={!isLoggedIn}>
                        <div hidden={this.state.githubUsername}>
                            Authorize with github: <a
                            href="https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Authorize</a>
                        </div>
                    </h3>
                </div>
                <div className="d-flex justify-content-center">
                    <h3 hidden={!isLoggedIn}>
                        <div hidden={!this.state.githubUsername}>
                            Your GitHub username is: {this.state.githubUsername}
                        </div>
                    </h3>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.getData();
        this.checkUserGithubAccessAvailable();
        this.getCourses();
    }

    getData() {
        axios
            .get(process.env.REACT_APP_URL)
            .then(response => {
                this.setState({content: response.data});
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

    getCourses = () => {
        fetch(process.env.REACT_APP_URL + "/courses/latest?count=3&loadThumbnails=true", {
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
                if (course['description'].length > 120) {
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

    changeToNewestShownCourses = () => {
        this.removeActiveFromAll();
        const newest = document.getElementById('newest');
        newest.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.getCourses();
    };


    changeToBestSellersShownCourses = () => {
        this.removeActiveFromAll();
        const bestSellers = document.getElementById('best-sellers');
        bestSellers.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.getCourses();
    };


    changeToTopRatedShownCourses = () => {
        this.removeActiveFromAll();
        const topRated = document.getElementById('top-rated');
        topRated.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.getCourses();
    };


    changeToTopSalesShownCourses = () => {
        this.removeActiveFromAll();
        const topSales = document.getElementById('top-sales');
        topSales.setAttribute('class', 'nav-link active');
        document.getElementById('courses').innerText = '';
        this.create3LoadingElements();
        this.getCourses();
    };

    removeActiveFromAll = () => {
        const newest = document.getElementById('newest');
        const bestSellers = document.getElementById('best-sellers');
        const topRated = document.getElementById('top-rated');
        const topSales = document.getElementById('top-sales');
        newest.setAttribute('class', 'nav-link');
        bestSellers.setAttribute('class', 'nav-link');
        topRated.setAttribute('class', 'nav-link');
        topSales.setAttribute('class', 'nav-link');
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

}

export default Index;