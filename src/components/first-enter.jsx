import React, { Component } from 'react';
import $ from 'jquery';

class FirstEnter extends Component {

    render() {
        localStorage.setItem('firstEnterSeen', true);
        return (
            <React.Fragment>

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

                <section className="service-details">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/assets/img/service-details-1.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Our Mission</a></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/assets/img/service-details-2.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Our Plan</a></h5>
                                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                        <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/assets/img/service-details-3.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Our Vision</a></h5>
                                        <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                        <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="/assets/img/service-details-4.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href="#">Our Care</a></h5>
                                        <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
                                        <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pricing section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Pricing</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-4 box">
                                <h3>Free</h3>
                                <h4>$0<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>

                            <div className="col-lg-4 box featured">
                                <h3>Business</h3>
                                <h4>$29<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>

                            <div className="col-lg-4 box">
                                <h3>Developer</h3>
                                <h4>$49<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
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