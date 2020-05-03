import React, {Component} from 'react';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <h2>The world's largest selection of courses</h2>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore
                                recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde
                                debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur
                                consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum,
                                alias, adipisci nesciunt voluptate. Voluptatum.</p>
                            <a className="btn btn-primary btn-lg" href="#">Send a message to us!</a>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h2>Contact Us</h2>
                            <hr/>
                            <address>
                                <strong>Start Bootstrap</strong>
                                <br/>3481 Melrose Place
                                <br/>Beverly Hills, CA 90210
                                <br/>
                            </address>
                            <address>
                                <abbr title="Phone">P:</abbr>
                                (123) 456-7890
                                <br/>
                                <abbr title="Email">E:</abbr>
                                <a href="mailto:#">name@example.com</a>
                            </address>
                        </div>
                    </div>
                </div>

                <section className="page-section bg-dark mt-0" id="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-5">More Information</h2>
                                <div className="divider light my-4">
                                    <p className="text-white-50 mb-4">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It
                                        has survived not
                                        only five centuries, but also the leap into electronic typesetting, remaining
                                        essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker
                                        including versions of Lorem
                                        Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-1.jpg'} alt=""/>
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-2.jpg'} alt=""/>
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-3.jpg'} alt=""/>
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-4.jpg'} alt=""/>
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-5.jpg'} alt=""/>
                                    <div className="portfolio-box-caption">
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box"
                                   href={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'}>
                                    <img className="img-fluid"
                                         src={process.env.REACT_APP_URL + '/resource/images/about-6.jpg'} alt=""/>
                                    <div className="portfolio-box-caption p-3">
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