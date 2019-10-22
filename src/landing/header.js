import React from "react";

function Header() {
  return (
    <section className="software_banner_area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="software_banner_content">
              <h2
                className="f_500 f_size_50 w_color wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <span className="f_700">DevOps Nigeria Conference</span>
              </h2>
              <p
                className="w_color f_size_18 l_height30 mt_30 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                {/*Join thousands of (Software, DevOps, Cloud and Site Reliability) Engineers and IT experts in Africa,*/}
                {/*Get updated on news and happenings in the community, get must-read articles, chat with like-minded people, get job offers and more.*/}
                We are excited to announce the first DevOps Conference in Nigeria, after all our successful meetups and based on popular
                demand from the community, we have decided to take our meetup up a notch and organize a full-scale DevOps conference that
                is going to showcase our talents to the world and where we can also get more involved in the DevOps World
              </p>
              <div
                className="action_btn d-flex align-items-center mt_40 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <a href="https://www.meetup.com/Devops-Nigeria/events/265747549" target="_blank" className="software_banner_btn">
                  {/*Join Us*/}
                  Register!
                </a>
                <a href="https://www.papercall.io/devopsconference" target="_blank" className="speak_btn">
                  {/*Join Us*/}
                  Become a Speaker
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="software_img wow fadeInRight" data-wow-delay="0.2s">
              <img src="img/home5/banner_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
