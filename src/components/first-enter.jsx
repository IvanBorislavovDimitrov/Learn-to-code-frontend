import React, { Component } from 'react';
import $ from 'jquery';

class FirstEnter extends Component {

    render() {
        localStorage.setItem('firstEnterSeen', true);
        return (
            <React.Fragment>

                <section id="hero" className="mb-5">
                    <div class="hero-container">
                        <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                            <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                            <div class="carousel-inner" role="listbox">

                                <div class="carousel-item active background1">
                                    <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2 class="animated fadeInDown">Добре дошли в <span>Научи се да пишеш код</span></h2>
                                            <p class="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item background2">
                                    <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2 class="animated fadeInDown">Най-добрите курсове <span>на световно ниво</span></h2>
                                            <p class="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item background3">
                                    <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2 class="animated fadeInDown">Най-добрите проподаватели <span>на световно ниво</span></h2>
                                            <p class="animated fadeInUp">Нов, иновативен и интерактивен начин да учиш.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Продължете към платформата</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                                <span class="sr-only">Предишен</span>
                            </a>

                            <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                                <span class="sr-only">Следващ</span>
                            </a>

                        </div>
                    </div>
                </section>
                {/* 
                <section id="featured" class="featured">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon-box">
                                    <i class="icofont-computer"></i>
                                    <h3><a href="">Lorem Ipsum</a></h3>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="icon-box">
                                    <i class="icofont-image"></i>
                                    <h3><a href="">Dolor Sitema</a></h3>
                                    <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                            </div>
                            <div class="col-lg-4 mt-4 mt-lg-0">
                                <div class="icon-box">
                                    <i class="icofont-tasks-alt"></i>
                                    <h3><a href="">Sed ut perspiciatis</a></h3>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}

                <section id="pricing" class="pricing">
                    <div class="container">

                        <div class="row no-gutters">

                            <div class="col-lg-4 box">
                                <h3>Безплатни</h3>
                                <h4>Започва от $0<span>за курс</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i>Достъп до всички безплатни уроци.</li>
                                </ul>
                            </div>

                            <div class="col-lg-4 box featured">
                                <h3>Любителски</h3>
                                <h4>Започва от $5<span>за курс</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i>Достъп до всички любителски видеа, които са верифицирани!</li>
                                </ul>
                            </div>

                            <div class="col-lg-4 box">
                                <h3>Професионални</h3>
                                <h4>Започва от $15<span>за курс</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i>Курсове изготвени от световно известни програмисти.</li>
                                    <li><i class="bx bx-check"></i>Най-доброто съдържание, което може да бъде намерено на пазара.</li>
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