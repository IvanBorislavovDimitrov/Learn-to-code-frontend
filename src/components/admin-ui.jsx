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

                <section class="services">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div class="icon-box icon-box-pink">
                                    <div class="icon"><i class="bx bxl-redbubble"></i></div>
                                    <h4 class="title"><a href="/admin/change-user-role">Change User's Role</a></h4>
                                    <p class="description">Click here if you want to change user's role. You can promote a user to Moderator or Admin!</p>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div class="icon-box icon-box-cyan">
                                    <div class="icon"><i class="bx bx-file"></i></div>
                                    <h4 class="title"><a href="/admin/delete-user">Delete User</a></h4>
                                    <p class="description">Be careful when deleting a user's profile. It could not be backed up!</p>
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