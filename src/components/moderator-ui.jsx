import React, { Component } from 'react'

class ModeratorUI extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Moderator Services</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Moderator Services</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/add-new-course">Add course</a></h4>
                                    <p className="description">Click here if you want to add a new course!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/update-course">Update course</a></h4>
                                    <p className="description">Click here if you want to update a course!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/delete-course">Delete a course</a></h4>
                                    <p className="description">Delete a course!</p>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/course-categories/add">Add category</a></h4>
                                    <p className="description">Click here if you want to add a category!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-5">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/course-categories/update">Update category</a></h4>
                                    <p className="description">Click here if you want to update a category!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-5">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/contact-us/show">Check contact us forms</a></h4>
                                    <p className="description">Click here if you want to check contact us forms!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ModeratorUI;