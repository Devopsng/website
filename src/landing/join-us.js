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
              <img className="img-fluid" src="img/home5/meetup.jpeg" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
            <div className="software_featured_content">
              <h2
                className="f_700 f_size30 l_height_40 w_color f_p mb-30 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                Join our private team on Slack and Telegram
              </h2>
              <p
                className="w_color f_400 mb_50 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                Whether you would like to ask a technical question, collect
                feedback, invite or chat about random topics, we have a Slack
                team chat for you.
              </p>
              <div
                className="action_btn d-flex align-items-center mt_40 wow"
                data-wow-delay="0.6s" border="2px solid red"
              >
                <a
                  href="#"
                  className="btn_hover btn_four wow fadeInRight"
                //   data-wow-delay="0.6s"
                >
                  Slack
                </a>
                <a
                  href="#"
                  className="btn_hover btn_four wow fadeInLeft"
                //   data-wow-delay="0.6s"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
