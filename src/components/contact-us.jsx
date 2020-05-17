import React, { Component } from 'react'

class ContactUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            subject: null,
            message: null,
        };
    }

    render() {
        return (
            <React.Fragment>
                <main id="main">

                    <section id="breadcrumbs" class="breadcrumbs">
                        <div class="container">

                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Contact</li>
                            </ol>
                            <h2>Contact</h2>

                        </div>
                    </section>

                    <section id="contact" class="contact">
                        <div class="container">

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="info-box mb-4 card">
                                        <i class="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>Boulevard "Sveti Kliment Ohridski" 8, 1756 Studentski Kompleks, Sofia
Bulgaria</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <div class="info-box  mb-4 card">
                                        <i class="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>starstrucks1997@gmail.com</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <div class="info-box  mb-4 card">
                                        <i class="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+359 877 591 400</p>
                                    </div>
                                </div>

                            </div>

                            <div class="row">

                                <div class="col-lg-6 ">
                                    <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11736.81381371685!2d23.3553787!3d42.6570438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c3a3691d990d279!2sTechnical%20University!5e0!3m2!1sen!2sbg!4v1589736491164!5m2!1sen!2sbg" width="540em" height="400em" frameborder="0" allowfullscreen></iframe>
                                </div>

                                <div class="col-lg-6">
                                    <div class="php-email-form card">
                                        <div class="form-row">
                                            <div class="col form-group">
                                                <input onChange={this.changeInputField} type="text" name="username" class="form-control" id="username" placeholder="Your Name" />
                                                <div class="validate"></div>
                                            </div>
                                            <div class="col form-group">
                                                <input onChange={this.changeInputField} type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                <div class="validate"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input onChange={this.changeInputField} type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div class="validate"></div>
                                        </div>
                                        <div class="form-group">
                                            <textarea onChange={this.changeInputField} id="message" class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                            <div class="validate"></div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center"><button type="submit" onClick={this.sendContactUsForm}>Send Message</button></div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                </main>
            </React.Fragment>
        )

    }

    sendContactUsForm = () => {
        console.log('username', this.state.username);
        console.log('email', this.state.email);
        console.log('subject', this.state.subject);
        console.log('message', this.state.message);
        const currentThis = this;
        const contactUsForm = {
            username: currentThis.state.username,
            email: currentThis.state.email,
            subject: currentThis.state.subject,
            message: currentThis.state.message
        }

        fetch(process.env.REACT_APP_URL + '/contact-us', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(contactUsForm),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            await response.json();
            if (response.status === 200) {
                alert('Message sent!');
                window.location.reload();
            } else {
                alert('Message was not sent! All field are mandatory!!!');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    changeInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

}

export default ContactUs;