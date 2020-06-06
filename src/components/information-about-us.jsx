import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <h2>Най-добрите и най-новите курсове, които можете да открите.</h2>
                            <hr />
                            <p>"Научи се да пишеш код" платформата позволява
                            да се научиш да програмираш бързо, лесно и интерактивно. Платформата предоставя най-различни
                            курсове за обучения, които са с възможно най-новото съдържание. Имаш профил, влез в него, а ако
                            нямаш, регистрацията почти не отнема време. Регистрирай се и се научи да програмираш на
                                    най-различни езици с най-различни технологии.</p>
                            <a className="btn btn-primary btn-lg" href="/contact-us">Изпратете ни съобщение!</a>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h2>Свържете се с нас</h2>
                            <hr />
                            <address>
                                <strong>Научи се да пишеш код</strong>
                                <br />България, София
                                <br />Булевар "Свети Климент Охридски" 8, 1756 Студентски Комплекс
                                <br />
                            </address>
                            <address>
                                <abbr title="Phone">Тел: </abbr>
                                +359 877 590 400
                                <br />
                                <abbr title="Email">Имейл: </abbr>
                                <a href="mailto:#">starstrucks1997@gmail.com</a>
                            </address>
                        </div>
                    </div>
                </div>

                <section className="page-section bg-dark mt-0" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-5">Още информация</h2>
                                <div className="divider light my-4">
                                    <p className="text-white-50 mb-4">
                                        Приложението е разработка на дипломна работа през 2020 година. Приложението представлява
                                     платформа за гледане на курсове, както коментиране и разучаване. Също така предоставя интеграция 
                                     с GitHub, като по този начин насърчава курсистите да започнат да използват тази платформа,
                                     за да публикуват своите проекти и решения на проблеми в нея. GitHub е една от най-използваните
                                     системи за контрол на кода. Позволява негово по-лесно менежиране и модифициране.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'} alt="" />
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'} alt="" />
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'} alt="" />
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'} alt="" />
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'} alt="" />
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                    href={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'}>
                                    <img className="img-fluid"
                                        src={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'} alt="" />
                                    <div className="portfolio-box-caption p-3">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default AboutUs;