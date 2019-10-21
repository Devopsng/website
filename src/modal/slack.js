import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from 'axios';
import SemiPreloader from "../preloader/semi-preloader";
import {isEmailValid} from "../helper/validator.helper"

function JoinSlack() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button onClick={() => setModalShow(true)} className="app_btn app_btn_one Cus_getapp wow fadeInLeft"
                    data-wow-delay="0.5s">
                <i className="fab fa-slack-hash"></i>
                Slack
            </Button>


            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

class MyVerticallyCenteredModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            console.log("onSubmit function inside isEmailValid");
            this.setState({submitted: 2});
            this.sendSlackInvite(this.state.email)
        }
    };

    sendSlackInvite = (email) => {
        let SLACK_TOKEN = process.env.REACT_APP_SLACK_TOKEN;
        let SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';

        let QUERY_PARAMS = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
        axios.get(`${SLACK_INVITE_ENDPOINT}?${QUERY_PARAMS}`)
            .then((res) => {
                console.log(res);
                console.log("success");
                if(res.data.ok){
                    console.log("OK!!!")
                    this.setState({submitted: 3});
                }else{
                    console.log(res.data.error)
                    this.setState({errorMessage: (res.data.error).split("_").join(" ")});
                    this.setState({submitted: 1});
                }

            })
            .catch((error) => {
                this.setState({submitted: 4});
                console.log(error);
            })
    };

    displayError = () => {
        if(this.state.errorMessage){
            return(
                <div className="alert alert-danger" role="alert">
                    {this.state.errorMessage}
                </div>
            );
        }
    };

    display = () => {
        switch (this.state.submitted) {
            case 1:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            <div className="subscribe_form_info text-center correct_subscribe_form_info">
                                <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">
                                    Join DevOpsNG on Slack
                                </h2>
                                <form className="mailchimp subscribe-form" onSubmit={this.onSubmit}>
                                    {this.displayError()}
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
                                        className={`form-control memail ${this.state.errorClassName}`}
                                        placeholder="Your email"
                                        onChange={this.onChange}
                                    />
                                    <button disabled={!isEmailValid(this.state.email)} type="submit" className="btn_hover btn_four mt_40">
                                        GET INVITE
                                    </button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                );
            case 2:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            <SemiPreloader />
                        </Modal.Body>
                    </Modal>
                );
            case 3:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="download_content thanks_content text-center download_content_modified">
                                <img src="img/saas/icon/slack.png" alt=""/>
                                <h3>Thank you for your Joining!</h3>
                                <p>We’ve sent the invite in your inbox. Let’s get started the awesome things.</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                );
            case 4:
                return (
                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="download_content thanks_content text-center download_content_modified">
                                <img src="img/saas/icon/slack.png" alt=""/>
                                {/*<h3>Thank you for your Joining!</h3>*/}
                                <p>Something went wrong, Please join the slack community in a bit!. <br /> In the mean time, try joining the telegram group.</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                );
            default:
                return;
        }
    };

    render() {
        return this.display();
    }

}

export default JoinSlack;
