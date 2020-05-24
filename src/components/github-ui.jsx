import React, { Component } from "react";

class GithubUI extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Github Services</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Github Services</li>
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
                                    <p className="description">Click here to link your profile to github!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-github"></i></div>
                                    <h4 className="title"><a href="/github/check-repositories">Repositories</a></h4>
                                    <p className="description">Click here if you want to check you Repositories
                                    , your profile has to be linked to GitHub first!</p>
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