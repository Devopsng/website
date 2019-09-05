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
                <span className="f_700">DevOps Nigeria</span>
              </h2>
              <p
                className="w_color f_size_18 l_height30 mt_30 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent rhoncus efficitur interdum. Cras nec mauris ac lectus
                iaculis laoreet. Maecenas finibus vel metus at tincidunt.
              </p>
              <div
                className="action_btn d-flex align-items-center mt_40 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <a href="#" className="software_banner_btn">
                  Get Started
                </a>
                <a
                  href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
                  className="video_btn popup-youtube"
                >
                  <div className="icon">
                    <i className="ti-control-play"></i>
                  </div>
                  <span>Watch Video</span>
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
