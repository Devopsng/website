import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

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
        this.state = { email: '' };
    }
    onChange = (event) => {
        this.setState({email: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.email);
    }

    sendSlackInvite = () => {

    }

    render() {
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
        );
    }

}

export default JoinSlack;
