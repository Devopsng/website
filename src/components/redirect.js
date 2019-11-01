import React, { Component } from "react";
import Preloader from "../preloader/preloader";

export class Redirect extends Component {
    constructor( props ){
        super();
        this.state = { ...props };
    }
    componentWillMount(){
        window.location = this.state.location;
    }
    render(){
        return (
            <Preloader/>
        );
    }
}

export default Redirect;
