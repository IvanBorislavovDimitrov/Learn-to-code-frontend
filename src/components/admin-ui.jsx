import React, { Component } from 'react'

class AdminUI extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Admin Services</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Admin Services</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink">
                                    <div className="icon"><i className="bx bxl-redbubble"></i></div>
                                    <h4 className="title"><a href="/admin/change-user-role">Change User's Role</a></h4>
                                    <p className="description">Click here if you want to change user's role. You can promote a user to Moderator or Admin!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-cyan">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="/admin/delete-user">Delete User</a></h4>
                                    <p className="description">Be careful when deleting a user's profile. It could not be backed up!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-cyan">
                                    <div className="icon"><i className="bx bx-command"></i></div>
                                    <h4 className="title"><a href="/course-categories/add">Add Category</a></h4>
                                    <p className="description">Add new course category!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default AdminUI;