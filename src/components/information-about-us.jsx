import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>

                <section class="page-section bg-dark mt-0" id="about">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h2 class="text-white mt-2">About Us</h2>
                                <div class="divider light my-4">
                                    <p class="text-white-50 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="portfolio">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'} alt="" />
                                    <div class="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'} alt="" />
                                    <div class="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'} alt="" />
                                    <div class="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'} alt="" />
                                    <div class="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'} alt="" />
                                    <div class="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'}>
                                    <img class="img-fluid" src={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'} alt="" />
                                    <div class="portfolio-box-caption p-3">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default AboutUs;