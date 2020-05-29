import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="mt-4 py-5 bg-dark text-light">

                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Полезни препратки</h4>
                                <ul>
                                    <li><a href="/">Начало</a></li>
                                    <li><a href="/information/about-us">За нас</a></li>
                                    <li><a href="/courses">Курсове</a></li>
                                    <li><a href="/information/team">Преподаватели</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Външни препратки</h4>
                                <ul>
                                    <li><a href="https://www.udemy.com/courses/design/web-design/?search-query=web+design">Уеб дизайн</a></li>
                                    <li><a href="https://www.udemy.com/courses/development/web-development/?search-query=web+development">Уеб разработка</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=product%20management&src=sac&kw=product%20mana">Мениджмънт на продукти</a></li>
                                    <li><a href="https://www.udemy.com/courses/marketing/digital-marketing/?search-query=digital+marketing">Маркетинг</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=graphics%20design&src=sac&kw=graphics%20de">Графични курсове</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Свържете се с нас</h4>
                                <p>
                                Булевар "Свети Климент Охридски" 8, 1756 Студентски Комплекс, София, България<br />
            <br /><br />
                                    <strong>Телефон:</strong> +359 877 591 400<br />
                                    <strong>Имейл:</strong> starstrucks1997@gmail.com<br />
                                </p>

                            </div>

                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3>За "Научи се да пишеш код"</h3>
                                <p>Нова и иновативна технология за онлайн обучения.</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
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