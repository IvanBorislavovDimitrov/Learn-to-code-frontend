import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="mt-4 py-5 bg-dark text-light">

                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/information/about-us">About us</a></li>
                                    <li><a href="/courses">Courses</a></li>
                                    <li><a href="/information/team">Our teachers</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>External links</h4>
                                <ul>
                                    <li><a href="https://www.udemy.com/courses/design/web-design/?search-query=web+design">Web Design</a></li>
                                    <li><a href="https://www.udemy.com/courses/development/web-development/?search-query=web+development">Web Development</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=product%20management&src=sac&kw=product%20mana">Product Management</a></li>
                                    <li><a href="https://www.udemy.com/courses/marketing/digital-marketing/?search-query=digital+marketing">Marketing</a></li>
                                    <li><a href="https://www.udemy.com/courses/search/?q=graphics%20design&src=sac&kw=graphics%20de">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    Boulevard "Sveti Kliment Ohridski" 8, 1756 Studentski Kompleks, Sofia<br />
              Bulgaria <br /><br />
                                    <strong>Phone:</strong> +359 877 591 400<br />
                                    <strong>Email:</strong> starstrucks1997@gmail.com<br />
                                </p>

                            </div>

                            <div class="col-lg-3 col-md-6 footer-info">
                                <h3>About Learn To Code</h3>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;