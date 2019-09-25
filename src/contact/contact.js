import React from "react";

function ContactSection() {
    return (
        <section className="contact_info_area sec_pad bg_color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 pr-0">
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Address</h6>
                            <p className="f_400 f_size_15">Lagos, Nigeria</p>
                        </div>
                        <div className="contact_info_item">
                            <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Contact Info</h6>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Phone:</span> <a
                                href="tel:3024437488">+234 816 8087 807</a></p>
                            <p className="f_400 f_size_15"><span className="f_400 t_color3">Email:</span> <a
                                href="mailto:saasland@gmail.com">info@devops.ng</a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-1">
                        <div className="contact_form">
                            <form action="https://droitthemes.com/html/saasland/contact_process.php"
                                  className="contact_form_box" method="post" id="contactForm" noValidate="novalidate">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email" id="email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="subject" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea name="message" id="message" cols="30" rows="10"
                                                      placeholder="Enter Your Message . . ."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">Send Message</button>
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

export default ContactSection;
