import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="mt-4 py-5 bg-dark text-light">

                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Полезни препратки</h4>
                                <ul>
                                    <li><a href="/">Начало</a></li>
                                    <li><a href="/information/about-us">За нас</a></li>
                                    <li><a href="/courses">Курсове</a></li>
                                    <li><a href="/information/team">Преподаватели</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Външни препратки</h4>
                                <ul>
                                    <li><a href="https://www.udemy.com/courses/design/web-design/?search-query=web+design">Уеб дизайн</a></li>
                                    <li><a href="https://www.udemy.com/courses/development/web-development/?search-query=web+development">Уеб разработка</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=product%20management&src=sac&kw=product%20mana">Мениджмънт на продукти</a></li>
                                    <li><a href="https://www.udemy.com/courses/marketing/digital-marketing/?search-query=digital+marketing">Маркетинг</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=graphics%20design&src=sac&kw=graphics%20de">Графични курсове</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Свържете се с нас</h4>
                                <p>
                                Булевард "Свети Климент Охридски" 8, 1756 Студентски Комплекс, София, България<br />
            <br /><br />
                                    <strong>Телефон:</strong> +359 877 591 400<br />
                                    <strong>Имейл:</strong> starstrucks1997@gmail.com<br />
                                </p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>За "Научи се да пишеш код"</h3>
                                <p>Нова и иновативна технология за онлайн обучения.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;