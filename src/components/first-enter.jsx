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