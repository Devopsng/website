import React, {Component} from "react";
import {isEmailValid, isOnlyText, isAlphaNumeric} from "../helper/validator.helper"
import axios from "axios";

class ContactSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            baseUrl: process.env.REACT_APP_BASE_ENDPOINT,
          repy_to: process.env.REACT_APP_REPLY_TO_EMAIL,
            contact: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            error: {
                name: '',
                email: '',
                subject: '',
                message: '',
            }
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.contact);
        this.save(this.state.contact);
    };

    save = (contact) => {
        axios({
            method: 'post',
            url: this.state.baseUrl,
            header: {'Content-Type': 'application/json'},
            data: {
                body: {
                    name: "CONTACT",
                    reply_to: this.state.reply_to,
                    message: contact
                }
            }
        })
            .then((res) => {
                console.log("res", res);
            }).catch((error) => {
            console.log(error);
        })
    };


    onChange = (event) => {
        const {name, value} = event.target;
        this.setState(prevState => ({
            contact: {
                ...prevState.contact,
                [name]: value
            }
        }));

        this.setState(prevState => ({
            error: {
                ...prevState.error,
                [name]: value
            }
        }));

        switch (name) {
            case 'name':
                if (!isOnlyText(value) && value) {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            name: 'error_bar'
                        }
                    }));
                } else {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            name: ''
                        }
                    }));
                }
                break;
            case 'email':
                if (!isEmailValid(value)) {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            email: 'error_bar'
                        }
                    }));
                } else {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            email: ''
                        }
                    }));
                }
                break;
            case 'subject':
                if (!isAlphaNumeric(value)) {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            subject: 'error_bar'
                        }
                    }));
                } else {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            subject: ''
                        }
                    }));
                }
                break;
            case 'message':
                if (!isAlphaNumeric(value)) {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            message: 'error_bar'
                        }
                    }));
                } else {
                    this.setState(prevState => ({
                        error: {
                            ...prevState.error,
                            message: ''
                        }
                    }));
                }
                break;
            default:
                return;
        }

        if (!this.state.error.name && !this.state.error.email && !this.state.error.subject && !this.state.error.message &&
            this.state.contact.name && this.state.contact.email && this.state.contact.subject && this.state.contact.message) {
            this.setState({isValid: true});
        } else {
            this.setState({isValid: false});
        }
    };


    render() {
        const {contact, error} = this.state;

        return (
            <section className="contact_info_area sec_pad bg_color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 pr-0">
                            <div className="contact_info_item">
                                <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                                <p className="f_400 f_size_15">
                                    <span className="f_400 t_color3">Phone:</span> <a href="tel:+2348168087807">(+234)
                                    816 8087 807</a>
                                </p>
                                <p className="f_400 f_size_15">
                                    <span className="f_400 t_color3">Email:</span> <a
                                    href="mailto:info@devops.ng">info@devops.ng</a>
                                </p>
                                <div className="f_social_icon">
                                    <a href="#">
                                        <i className="ti-linkedin"></i>
                                    </a>
                                    <a href="https://twitter.com/devopsng">
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="contact_form">
                                <form
                                    className="contact_form_box"
                                    method="post"
                                    id="contactForm"
                                    noValidate="novalidate"
                                    onSubmit={this.onSubmit}
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group text_box">
                                                <input type="text"
                                                       id="name" name="name"
                                                       placeholder="Your Name"
                                                       value={contact.name}
                                                       onChange={this.onChange}
                                                       className={`${error.name}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group text_box">
                                                <input type="text" name="email"
                                                       id="email" placeholder="Your Email"
                                                       value={contact.email}
                                                       onChange={this.onChange}
                                                       className={`${error.email}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group text_box">
                                                <input type="text" id="subject" name="subject"
                                                       placeholder="Subject"
                                                       value={contact.subject}
                                                       onChange={this.onChange}
                                                       className={`${error.subject}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group text_box">
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Enter Your Message . . ."
                            onChange={this.onChange}
                            className={`${error.message}`}
                            value={contact.message}
                        >
                        </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        disabled={!this.state.isValid}
                                        type="submit" className="btn_three contact_btn">
                                        Send Message
                                    </button>
                                </form>
                                <div id="success">Your message succesfully sent!</div>
                                <div id="error">Opps! There is something wrong. Please try again</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
