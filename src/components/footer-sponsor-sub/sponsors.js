import React, {Component} from "react";
import {isEmailValid} from "../../helper/validator.helper";
import axios from "axios";
import Success from "../success";


class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: process.env.REACT_APP_BASE_ENDPOINT,
      repy_to: process.env.REACT_APP_REPLY_TO_EMAIL,
      email: '',
      submitted: 1,
      errorClassName: '',
      errorMessage: ''
    };
  };

  onChange = (event) => {
    if(!isEmailValid(event.target.value)){
      this.setState({errorClassName: "error_bar"});
    }else {
      this.setState({errorClassName: ""});
    }
    this.setState({email: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    if(isEmailValid(this.state.email)){
      console.log(this.state.email);
      this.save(this.state.email);
    }
  };

  save = (email) => {
    axios({
      method: 'post',
      url: this.state.baseUrl,
      header: {'Content-Type': 'application/json'},
      data: {
        body: {
          name: "SUBSCRIPTION",
          reply_to: this.state.reply_to,
          message: email
        }
      }
    })
        .then((res) => {
          console.log("res", res);
          this.setState({success: true});
          this.setState({email: ''});

        }).catch((error) => {
      console.log(error);
    })
  };

  render() {
    return (
        <section className="partner_logo_area_two">
          <div className="container">
            <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">OUR SPONSORS</h4>
            <div className="row partner_info">
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.1s">
                <a href="#">
                  <img src="img/sponsors/aws.png" alt="" />
                </a>
              </div>
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.2s">
                <a href="#">
                  <img src="img/sponsors/microsoft.png" alt="" />
                </a>
              </div>
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.3s">
                <a href="#">
                  <img src="img/sponsors/KorapayLogo.png" alt="" />
                </a>
              </div>
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.4s">
                <a href="#">
                  <img src="img/sponsors/terragon.png" alt="" />
                </a>
              </div>
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.5s">
                <a href="#">
                  <img src="img/sponsors/seamfix-logo.png" alt="" />
                </a>
              </div>
              <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
                <a href="#">
                  <img height="70" src="img/sponsors/quidax.png" alt="" />
                </a>
              </div>

              <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
                <a href="#">
                  <img height="70" src="img/sponsors/ethnos.jpeg" alt="" />
                </a>
              </div>

              <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
                <a href="#">
                  <img height="70" src="img/sponsors/check.jpeg" alt="" />
                </a>
              </div>

              <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
                <a href="#">
                  <img height="70" src="img/sponsors/carbon.png" alt="" />
                </a>
              </div>

            </div>

            <div className="subscribe_form_info text-center">
              <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">Get notified about upcoming Meetups</h2>
              <form className="mailchimp subscribe-form" onSubmit={this.onSubmit}>
                {this.state.success ? <Success
                    text={"You have been added to the mailing list!"}/> : null}
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    className={`form-control memail ${this.state.errorClassName}`}
                    placeholder="Your email"
                    onChange={this.onChange}
                />
                <button type="submit" className="btn_hover btn_four mt_40">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
    );
  }

}

export default Sponsors;
