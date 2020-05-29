import React, {Component} from 'react'

class AdminUI extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Админ услуги</h2>
                            <ol>
                                <li><a href="/">Начало</a></li>
                                <li>Админ услуги</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="services">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-redbubble"></i></div>
                                    <h4 className="title"><a href="/admin/change-user-role">Промени роля на потребител</a></h4>
                                    <p className="description">Натисни тук, за да промениш роля на потребител.
                                    Възможните роли са Админ или Модератор!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-cyan card h-100 w-100">
                                    <div className="icon"><i className="bx bx-file"></i></div>
                                    <h4 className="title"><a href="/admin/delete-user">Изтрий потребител</a></h4>
                                    <p className="description">Изтрий потребителски профил. Бъди внимателен, когато изтриваш потребителски
                                    профил!</p>
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