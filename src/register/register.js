import React, { Component } from "react";

class RegisterComponent extends Component {
  render() {
    return (
      <section class="login_area">
        <div class="container">
          <div class="row">
            {/* <div class="col-lg-12"> */}
            <div class="login_wrapper">
              {/*<h2 class="f_p f_700 f_size_40 t_color3 mb_20">Login</h2>*/}
              {/* <p class="f_p f_400 f_size_15">
                  Welcome! Please confirm that your are visiting <br />
                  <a href="#">https://www.saasland.com</a>
                </p> */}
              <form action="#" class="login-form mt_60 mb_60 row">
                <div className="form-group text_box col-lg-6">
                  <label className="f_p text_c f_400">First Name</label>
                  <input type="text"
                         // placeholder="John"
                         name="fname"
                  />
                </div>

                <div className="form-group text_box col-lg-6">
                  <label className="f_p text_c f_400">Last Name</label>
                  <input type="text"
                         // placeholder="Doe"
                         name="lname"
                  />
                </div>

                <div class="form-group text_box col-lg-12">
                  <label class="f_p text_c f_400">Email</label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="email"
                  />
                </div>
                <div class="form-group text_box col-lg-12">
                  <label class="f_p text_c f_400">Phone Number</label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="phone"
                  />
                </div>
                <div class="form-group text_box col-lg-12">
                  <label class="f_p text_c f_400">Job Title</label>
                  <input type="text"
                         // placeholder="saasland@gmail.com"
                         name="job"
                  />
                </div>
                <div class="form-group text_box col-lg-12">
                  <label class="f_p text_c f_400">Company Name</label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="company"
                  />
                </div>

                <div>
                  <button type="submit" className="btn_three">
                    Register
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}

            {/* <div class="col-lg-4 d-flex align-items-center">
              <div class="login_img">
                <img src="img/login_img2.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default RegisterComponent;
