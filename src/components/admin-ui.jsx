import React, { Component } from 'react'

class AdminUI extends Component {

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

                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Admin Services</h2>
                            <ol>
                                <li><a href="/">Home</a></li>
                                <li>Admin Services</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <main id="main">
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
                </main>

            </React.Fragment>
        )
    }
}

export default AdminUI;