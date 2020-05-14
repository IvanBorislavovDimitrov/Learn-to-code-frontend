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
                                            <h2 class="animated fadeInDown">Welcome to <span>Eterna</span></h2>
                                            <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Proceed to the website</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item background2">
                                    <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2 class="animated fadeInDown">Lorem <span>Ipsum Dolor</span></h2>
                                            <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Proceed to the website</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item background3">
                                    <div class="carousel-container">
                                        <div class="carousel-content">
                                            <h2 class="animated fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                                            <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <a href="/" class="btn-get-started animated fadeInUp">Proceed to the website</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>

                            <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </section>

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
                </section>

                <section id="pricing" class="pricing">
                    <div class="container">

                        <div class="row no-gutters">

                            <div class="col-lg-4 box">
                                <h3>Free</h3>
                                <h4>$0<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li class="na"><i class="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li class="na"><i class="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" class="buy-btn">Buy Now</a>
                            </div>

                            <div class="col-lg-4 box featured">
                                <h3>Business</h3>
                                <h4>$29<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="buy-btn">Buy Now</a>
                            </div>

                            <div class="col-lg-4 box">
                                <h3>Developer</h3>
                                <h4>$49<span>per month</span></h4>
                                <ul>
                                    <li><i class="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i class="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i class="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i class="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i class="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" class="buy-btn">Buy Now</a>
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