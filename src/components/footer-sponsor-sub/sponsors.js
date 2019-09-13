import React from "react";

function Sponsors() {
  return (
    <section className="partner_logo_area_two">
      <div className="container">
        <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">
          OUR SPONSORS
        </h4>
        <div className="row partner_info">
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.1s">
            <a href="#">
              <img src="img/home3/logo_01.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.2s">
            <a href="#">
              <img src="img/home3/logo_02.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.3s">
            <a href="#">
              <img src="img/home3/logo_03.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.4s">
            <a href="#">
              <img src="img/home3/logo_04.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.5s">
            <a href="#">
              <img src="img/home3/logo_05.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
            <a href="#">
              <img src="img/home3/logo_03.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.7s">
            <a href="#">
              <img src="img/home3/logo_04.png" alt="" />
            </a>
          </div>
          <div className="logo_item wow fadeInLeft" data-wow-delay="0.8s">
            <a href="#">
              <img src="img/home3/logo_05.png" alt="" />
            </a>
          </div>
        </div>

        <div className="subscribe_form_info text-center">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">
            Subscribe to get exclusive Updates & offers
          </h2>
          <form className="mailchimp subscribe-form" method="post">
            <input
              type="text"
              name="EMAIL"
              className="form-control memail"
              placeholder="Your email"
            />
            <button type="submit" className="btn_hover btn_four mt_40">
              Subscribe
            </button>
            {/* <p className="mchimp-errmessage" style="display: none;"></p> */}
            {/* <p className="mchimp-sucmessage" style="display: none;"></p> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
