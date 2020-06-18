import React, { Component } from 'react'

class ModeratorUI extends Component {

    render() {
        return (
            <React.Fragment>

                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Модератор услуги</h2>
                            <ol>
                                <li><a href="/">Начало</a></li>
                                <li>Модератор услуги</li>
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
                                    <h4 className="title"><a href="/courses/add-new-course">Добави курс</a></h4>
                                    <p className="description">Натисни тук, ако искаш да добавиш нов курс!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/update-course">Редактирай курс</a></h4>
                                    <p className="description">Натисни тук, ако искаш да редактираш курс!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/delete-course">Изтрий курс</a></h4>
                                    <p className="description">Натисни тук, за да изтриеш курс!</p>
                                </div>
                            </div>


                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/course-categories/add">Добави категория за курс</a></h4>
                                    <p className="description">Натисни тук, ако искаш да добавиш нова катоерия за курсове!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-5">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/course-categories/update">Редактирай категория за курсове</a></h4>
                                    <p className="description">Натисни тук, ако искаш да редактираш категория за курсове!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-5">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/contact-us/show">Провери получени съобщения от "Свържете се с нас"</a></h4>
                                    <p className="description">Натисни тук, ако искаш да видиш всички съобщения получени от "Свържете се с нас"!</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-5">
                                <div className="icon-box icon-box-pink card h-100 w-100">
                                    <div className="icon"><i className="bx bxl-css3"></i></div>
                                    <h4 className="title"><a href="/courses/confirm-payment">Потврди, че курсист е платил за курс</a></h4>
                                    <p className="description">Натисни тук, ако искаш да потвърдиш, че курсист е запилатил даден курс"!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

    componentDidMount() {
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles == null || !userRoles.includes('ROLE_MODERATOR')) {
            this.props.history.push('/not-found');
            return;
        }
    }
}

export default ModeratorUI;