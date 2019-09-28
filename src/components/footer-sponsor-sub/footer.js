import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="footer_area footer_area_five pt_150 f_bg">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget">
                <Link to="/" className="f-logo">
                  <img
                    src="devops-footer.png"
                    // srcset="img/logo2x.png 2x"
                    alt="logo"
                    height="50px"
                  />
                </Link>
                <div className="widget-wrap">
                  <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>Email:</span>{" "}
                    <a href="mailto:info@devops.ng" className="f_400">
                      info@devops.ng
                    </a>
                  </p>
                  <p className="f_400 f_p f_size_15 mb-0 l_height34">
                    <span>Phone:</span>{" "}
                    <a href="tel:+2348168087807" className="f_400">
                      +234 816 8087 807
                    </a>
                  </p>
                </div>
                {/*<form*/}
                {/*  action="#"*/}
                {/*  className="f_subscribe mailchimp_two"*/}
                {/*  method="post"*/}
                {/*>*/}
                {/*  <input*/}
                {/*    type="text"*/}
                {/*    name="EMAIL"*/}
                {/*    className="form-control memail"*/}
                {/*    placeholder="Email"*/}
                {/*  />*/}
                {/*  <button className="btn btn-submit" type="submit">*/}
                {/*    <i className="ti-arrow-right"></i>*/}
                {/*  </button>*/}
                  {/* <p className="mchimp-errmessage" style="display: none;"></p> */}
                  {/* <p className="mchimp-sucmessage" style="display: none;"></p> */}
                {/*</form>*/}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_40">
                {/* <h3 className="f-title f_600 t_color f_size_18 mb_40">
                  About Us
                </h3> */}
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="https://www.meetup.com/Devops-Nigeria/" target="_blank">Join Us</a>
                  </li>
                  <li>
                    <Link to="/community" >About</Link>
                  </li>
                  <li>
                    <Link to="#">Sponsors</Link>
                  </li>
                  {/* <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Wavelength</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget">
                {/* <h3 className="f-title f_600 t_color f_size_18 mb_40">
                  Workflow Solutions
                </h3> */}
                <ul className="list-unstyled f_list">
                  {/*<li>*/}
                  {/*    <a href="#">Job Board</a>*/}
                  {/*</li>*/}
                  <li>
                    <a href="https://medium.com/devopsng" target="_blank">Blog</a>
                  </li>
                  <li>
                    <Link to="/meetup">Meetups</Link>
                  </li>
                  {/* <li>
                    <a href="#">Reporting</a>
                  </li>
                  <li>
                    <a href="#">Work Tracking</a>
                  </li>
                  <li>
                    <a href="#">See All Uses</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget">
                {/* <h3 className="f-title f_600 t_color f_size_18 mb_40">
                  Team Solutions
                </h3> */}
                <ul className="list-unstyled f_list">
                  {/*<li>*/}
                  {/*  <a href="#">Privacy</a>*/}
                  {/*</li>*/}
                  {/*<li>*/}
                  {/*  <a href="#">Terms</a>*/}
                  {/*</li>*/}

                  {/* <li>
                    <a href="#">Sales</a>
                  </li>
                  <li>
                    <a href="#">Developers</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">See All Teams</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6">
              <p className="mb-0 f_400">
                Copyright © 2019
                {/* Desing by <a href="#">DroitThemes</a> */}
              </p>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="f_social_icon_two text-center">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
