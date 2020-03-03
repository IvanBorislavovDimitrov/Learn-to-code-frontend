import React, { Component } from 'react';

class FirstEnter extends Component {

    render() {
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
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet" />
                <script src="assets/vendor/jquery/jquery.min.js"></script>
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

                <header id="header" class="fixed-top header-transparent">
                    <div class="container">

                        <div class="logo float-left">
                            <h1 class="text-light"><a href="index.html"><span>Moderna</span></a></h1>
                        </div>

                        <nav class="nav-menu float-right d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li class="drop-down"><a href="">Drop Down</a>
                                    <ul>
                                        <li><a href="#">Drop Down 1</a></li>
                                        <li class="drop-down"><a href="#">Drop Down 2</a>
                                            <ul>
                                                <li><a href="#">Deep Drop Down 1</a></li>
                                                <li><a href="#">Deep Drop Down 2</a></li>
                                                <li><a href="#">Deep Drop Down 3</a></li>
                                                <li><a href="#">Deep Drop Down 4</a></li>
                                                <li><a href="#">Deep Drop Down 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Drop Down 3</a></li>
                                        <li><a href="#">Drop Down 4</a></li>
                                        <li><a href="#">Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </nav>

                    </div>
                </header>

                <section id="hero" class="d-flex justify-cntent-center align-items-center">
                    <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">

                        <div class="carousel-item active">
                            <div class="carousel-container">
                                <h2 class="animated fadeInDown">Welcome to <span>Moderna</span></h2>
                                <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="" class="btn-get-started animated fadeInUp">Read More</a>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-container">
                                <h2 class="animated fadeInDown">Lorem Ipsum Dolor</h2>
                                <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="" class="btn-get-started animated fadeInUp">Read More</a>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="carousel-container">
                                <h2 class="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                                <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="" class="btn-get-started animated fadeInUp">Read More</a>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>

                        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>
                </section>

                <main id="main">

                    <section class="services">
                        <div class="container">

                            <div class="row">
                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                                    <div class="icon-box icon-box-pink">
                                        <div class="icon"><i class="bx bxl-dribbble"></i></div>
                                        <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                    <div class="icon-box icon-box-cyan">
                                        <div class="icon"><i class="bx bx-file"></i></div>
                                        <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                                        <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div class="icon-box icon-box-green">
                                        <div class="icon"><i class="bx bx-tachometer"></i></div>
                                        <h4 class="title"><a href="">Magni Dolores</a></h4>
                                        <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                    <div class="icon-box icon-box-blue">
                                        <div class="icon"><i class="bx bx-world"></i></div>
                                        <h4 class="title"><a href="">Nemo Enim</a></h4>
                                        <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
                        <div class="container">

                            <div class="row">
                                <div class="col-lg-6 video-box">
                                    <img src="assets/img/why-us.jpg" class="img-fluid" alt="" />
                                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                                </div>

                                <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-fingerprint"></i></div>
                                        <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>

                                    <div class="icon-box">
                                        <div class="icon"><i class="bx bx-gift"></i></div>
                                        <h4 class="title"><a href="">Nemo Enim</a></h4>
                                        <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }

}

export default FirstEnter;