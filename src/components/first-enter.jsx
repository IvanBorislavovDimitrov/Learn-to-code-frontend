import React, { Component } from 'react';
import $ from 'jquery';

class FirstEnter extends Component {

    render() {
        localStorage.setItem('firstEnterSeen', true);
        return (
            <React.Fragment>

                <section id="hero" className="mb-5">
                    <div className="hero-container">
                        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item active background1">
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Добре дошли в <span>Научи се да пишеш код</span></h2>
                                            <p className="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" className="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item background2">
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Най-добрите курсове <span>на световно ниво</span></h2>
                                            <p className="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" className="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item background3">
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Най-добрите прeподаватели <span>на световно ниво</span></h2>
                                            <p className="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" className="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                                <span className="sr-only">Предишен</span>
                            </a>

                            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                                <span className="sr-only">Следващ</span>
                            </a>

                        </div>
                    </div>
                </section>
                <section id="pricing" className="pricing">
                    <div className="container">

                        <div className="row no-gutters">

                            <div className="col-lg-4 box">
                                <h3>Безплатни</h3>
                                <h4>Започва от $0<span>за курс</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i>Достъп до всички безплатни уроци.</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 box featured">
                                <h3>Любителски</h3>
                                <h4>Започва от $5<span>за курс</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i>Достъп до всички любителски видеа, които са верифицирани!</li>
                                </ul>
                            </div>

                            <div className="col-lg-4 box">
                                <h3>Професионални</h3>
                                <h4>Започва от $15<span>за курс</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i>Курсове изготвени от световно известни програмисти.</li>
                                    <li><i className="bx bx-check"></i>Най-доброто съдържание, което може да бъде намерено на пазара.</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </section>

            </React.Fragment>
        )
    }

    moveForward = () => {
        let firstItem = document.getElementById('first_item');
        let secondItem = document.getElementById('second_item');
        let thirdItem = document.getElementById('third_item');
        let elements = [firstItem, secondItem, thirdItem];
        for (let i = 0; i < elements.length; i++) {
            if ($(elements[i]).hasClass('active')) {
                if (i == elements.length - 1) {
                    $(elements[i]).removeClass('active');
                    $(elements[0]).addClass('active');
                } else {
                    $(elements[i]).removeClass('active');
                    $(elements[i + 1]).addClass('active');
                }
                return;
            }
        }
    }

    moveBackwards = () => {
        let firstItem = document.getElementById('first_item');
        let secondItem = document.getElementById('second_item');
        let thirdItem = document.getElementById('third_item');
        let elements = [firstItem, secondItem, thirdItem];
        for (let i = elements.length - 1; i >= 0; i--) {
            if ($(elements[i]).hasClass('active')) {
                if (i == 0) {
                    $(elements[0]).removeClass('active');
                    $(elements[elements.length - 1]).addClass('active');
                } else {
                    $(elements[i]).removeClass('active');
                    $(elements[i - 1]).addClass('active');
                }
                return;
            }
        }
    }

}

export default FirstEnter;