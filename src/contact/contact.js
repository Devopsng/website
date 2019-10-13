import React, {Component} from "react";
import {isEmailValid, isOnlyText} from "../helper/validator.helper"

class ContactSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      isvalid: false,
      contact: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      errorClassName: ''
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.contact)
  };

  onChange = (event) => {
    const { name, value} = event.target;
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        [name]: value
      }}))
  };


  render() {
    const { contact } = this.state;
    return (
        <section className="contact_info_area sec_pad bg_color">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 pr-0">
                <div className="contact_info_item">
                  <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                  <p className="f_400 f_size_15">
                    <span className="f_400 t_color3">Phone:</span> <a href="tel:+2348168087807">(+234) 816 8087 807</a>
                  </p>
                  <p className="f_400 f_size_15">
                    <span className="f_400 t_color3">Email:</span> <a href="mailto:info@devops.ng">info@devops.ng</a>
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
                      action="https://droitthemes.com/html/saasland/contact_process.php"
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
                                 // className={`${isOnlyText() ? "error_bar" : ""}`}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group text_box">
                          <input type="text" name="email"
                                 id="email" placeholder="Your Email"
                                 value={contact.email}
                                 onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group text_box">
                          <input type="text" id="subject" name="subject"
                                 placeholder="Subject"
                                 value={contact.subject}
                                 onChange={this.onChange}
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
                        >
                          {contact.message}
                        </textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn_three">
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
