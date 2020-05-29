import React, { Component } from "react";

class GithubUI extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Github услуги</h2>
                            <ol>
                                <li><a href="/">Начало</a></li>
                                <li>Github услуги</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-github"></i></div>
                                    <h4 className="title"><a href="/https://github.com/login/oauth/authorize?client_id=5b2f3c2f8bb2f09aa59d">Link GitHub Account</a></h4>
                                    <p className="description">Натисни тук, за да свържеш профила си с GitHub!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-github"></i></div>
                                    <h4 className="title"><a href="/github/check-repositories">Хранилища</a></h4>
                                    <p className="description">Натисни тук, за да отвориш своите хранилища. ВАЖНО: Първо трябва
                                    акаунтът да е свързан с GitHub!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default GithubUI;