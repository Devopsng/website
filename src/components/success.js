import React, {Component} from "react";

class Success extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.text}
            </div>
        );
    }

}

export default Success;
