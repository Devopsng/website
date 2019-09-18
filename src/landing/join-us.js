import React from "react";

function JoinUs() {
    return (
        <section className="software_featured_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="software_featured_img wow fadeInLeft"
                            data-wow-delay="0.2s"
                        >
                            <img className="img-fluid" src="img/home5/meetup.jpeg" alt=""/>
                        </div>
                    </div>


                    <div className="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
                        <div className="get_content">
                            <h2 className="f_700 f_p f_size_40 l_height50 mb_20 wow fadeInLeft" data-wow-delay="0.3s">
                              Join Us on Slack and Telegram
                            </h2>
                            <p className="f_400 f_p mb_40 wow fadeInLeft" data-wow-delay="0.4s">
                              Whether you would like to ask a technical question, collect feedback, invite or chat about random topics, we have a Slack team chat for you.
                            </p>
                            <a href="#" className="app_btn app_btn_one Cus_getapp wow fadeInLeft" data-wow-delay="0.5s">
                              <i className="fab fa-slack-hash"></i>
                              Slack
                            </a>
                            <a target="_blank" href="https://t.me/joinchat/NhvBqVfiezvNHz56k-aBYg" className="app_btn app_btn_two wow fadeInLeft" data-wow-delay="0.6s">
                              <i className="fab fa-telegram-plane"></i>
                              Telegram
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
);
}

export default JoinUs;
