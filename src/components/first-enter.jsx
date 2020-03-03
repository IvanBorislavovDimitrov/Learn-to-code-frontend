import React, { Component } from 'react';
import $ from 'jquery';

class FirstEnter extends Component {

    render() {
        sessionStorage.setItem('firstEnterSeen', true);
        return (
            <React.Fragment>
                <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
                <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
                <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="/assets/css/style.css" rel="stylesheet" />
                <link href="/assets/img/favicon.png" rel="icon" />
                <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
                <script src="/assets/vendor/jquery/jquery.min.js"></script>
                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
                <script src="/assets/vendor/php-email-form/validate.js"></script>
                <script src="/assets/vendor/venobox/venobox.min.js"></script>
                <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
                <script src="/assets/vendor/counterup/counterup.min.js"></script>
                <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
                <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="/assets/vendor/aos/aos.js"></script>
                <script src="/assets/js/main.js"></script>

                <section id="hero" className="d-flex justify-cntent-center align-items-center">
                    <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">

                        <div id="first_item" className="carousel-item active">
                            <div className="carousel-container">
                                <h2 className="animated fadeInDown">Welcome to Learn-To-Code Platform</h2>
                                <p className="animated fadeInUp">1 Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="/" className="btn-get-started animated fadeInUp">Proceed to the Webapp</a>
                            </div>
                        </div>

                        <div id="second_item" className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                                <p className="animated fadeInUp">2 Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="/" className="btn-get-started animated fadeInUp">Proceed to the Webapp</a>
                            </div>
                        </div>

                        <div id="third_item" className="carousel-item">
                            <div className="carousel-container">
                                <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                                <p className="animated fadeInUp"> 3 Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="/" className="btn-get-started animated fadeInUp">Proceed to the Webapp</a>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#" onClick={this.moveBackwards} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#" onClick={this.moveForward} role="button" data-slide="next">
                            <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </section>
                <section class="pricing section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Pricing</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

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
                                <a href="#" class="get-started-btn">Get Started</a>
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
                                <a href="#" class="get-started-btn">Get Started</a>
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
                                <a href="#" class="get-started-btn">Get Started</a>
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