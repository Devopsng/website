import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from 'axios';

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
            submitted: false
        };
    };

    onChange = (event) => {
        this.setState({email: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        // alert("You are submitting " + this.state.email);
        this.sendSlackInvite(this.state.email)
    };

    sendSlackInvite = (email) => {
        let SLACK_TOKEN = process.env.REACT_APP_SLACK_TOKEN;
        let SLACK_INVITE_ENDPOINT = 'https://slack.com/api/users.admin.invite';

        let QUERY_PARAMS = `email=${email}&token=${SLACK_TOKEN}&set_active=true`;
        axios.get(`${SLACK_INVITE_ENDPOINT}?${QUERY_PARAMS}`)
            .then((res) => {
                console.log(res);
                console.log("success");
                // this.state.submitted = true;
                this.setState({submitted: true});

            })
            .catch((error) => {
                console.log(error);
            })
    };

    display = () => {
        if (this.state.submitted) {
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
            )
        }
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
                            <input
                                type="text"
                                name="email"
                                className="form-control memail"
                                placeholder="Your email"
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn_hover btn_four mt_40">
                                GET INVITE
                            </button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

        )
    };

    render() {
        return this.display();
    }

}

export default JoinSlack;
