import React, { Component } from "react";
import {isAlphaNumeric, isEmailValid, isOnlyText, isValidPhone} from "../helper/validator.helper";
import axios from 'axios';

class RegisterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseUrl: process.env.REACT_APP_BASE_ENDPOINT,
      isValid: false,
      user: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        job: '',
        company: ''
      },
      error: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        job: '',
        company: ''
      }
    }
  }

  onChange = (event) => {
    const { name, value} = event.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }}));

    this.setState(prevState => ({
      error: {
        ...prevState.error,
        [name]: value
      }
    }));

    switch (name) {
      case 'fname':
        if(!isOnlyText(value) && value){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              fname: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              fname: ''
            }
          }));
        }
        break;
      case 'lname':
        if(!isOnlyText(value) && value){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              lname: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              lname: ''
            }
          }));
        }
        break;
      case 'email':
        if(!isEmailValid(value)){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              email: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              email: ''
            }
          }));
        }
        break;
      case 'phone':
        if(!isValidPhone(value)){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              phone: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              phone: ''
            }
          }));
        }
        break;
      case 'job':
        if(!isAlphaNumeric(value)){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              job: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              job: ''
            }
          }));
        }
        break;
      case 'company':
        if(!isAlphaNumeric(value)){
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              company: 'error_bar'
            }
          }));
        }else{
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              company: ''
            }
          }));
        }
        break;
      default:
        return;
    }

    if(!this.state.error.fname && !this.state.error.lname && !this.state.error.email && !this.state.error.phone && !this.state.error.job && !this.state.error.company &&
        this.state.user.fname && this.state.user.lname && this.state.user.email && this.state.user.phone && this.state.user.job && this.state.user.company){
      this.setState({isValid: true});
    }else{
      this.setState({isValid: false});
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user)
    this.save();
  };

  save = () => {
    console.log("this.state.baseUrl", this.state.baseUrl);

    axios.post(this.state.baseUrl, {
      body: {
        name: "REGISTRATION",
        reply_to: "idowu.emehinola@devops.ng",
        message: JSON.stringify(this.state.user)
      }
    }).then((res) => {
      console.log("res", res);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  render() {
    const { user, error } = this.state;

    return (
      <section className="login_area">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12"> */}
            <div className="login_wrapper">
              {/*<h2 className="f_p f_700 f_size_40 t_color3 mb_20">Login</h2>*/}
              {/* <p className="f_p f_400 f_size_15">
                  Welcome! Please confirm that your are visiting <br />
                  <a href="#">https://www.saasland.com</a>
                </p> */}
              <form action="#" className="login-form mt_60 mb_60 row" onSubmit={this.onSubmit}>
                <div className="form-group text_box col-lg-6">
                  <label className="f_p text_c f_400">First Name <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="John"
                         name="fname"
                         value={user.fname}
                         onChange={this.onChange}
                         className={ `${error.fname}`}
                  />
                </div>

                <div className="form-group text_box col-lg-6">
                  <label className="f_p text_c f_400">Last Name <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="Doe"
                         name="lname"
                         value={user.lname}
                         onChange={this.onChange}
                         className={ `${error.lname}`}
                  />
                </div>

                <div className="form-group text_box col-lg-12">
                  <label className="f_p text_c f_400">Email <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="email"
                         value={user.email}
                         onChange={this.onChange}
                         className={ `${error.email}`}
                  />
                </div>
                <div className="form-group text_box col-lg-12">
                  <label className="f_p text_c f_400">Phone Number <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="phone"
                         value={user.phone}
                         onChange={this.onChange}
                         className={ `${error.phone}`}
                  />
                </div>
                <div className="form-group text_box col-lg-12">
                  <label className="f_p text_c f_400">Job Title <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="saasland@gmail.com"
                         name="job"
                         value={user.job}
                         onChange={this.onChange}
                         className={ `${error.job}`}
                  />
                </div>
                <div className="form-group text_box col-lg-12">
                  <label className="f_p text_c f_400">Company Name <span className="required">*</span></label>
                  <input type="text"
                         // placeholder="Droitlab"
                         name="company"
                         value={user.company}
                         onChange={this.onChange}
                         className={ `${error.company}`}
                  />
                </div>

                <div>
                  <button
                      // disabled={!this.state.isValid}
                      type="submit" className="btn_three">
                    Register
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}

            {/* <div className="col-lg-4 d-flex align-items-center">
              <div className="login_img">
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
