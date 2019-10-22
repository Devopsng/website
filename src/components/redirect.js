import React, { Component } from "react";
import Preloader from "../preloader/preloader";

export class Redirect extends Component {
    constructor( props ){
        super();
        this.state = { ...props };
    }
    componentWillMount(){
        console.log(this.state);
        window.location = 'https://www.meetup.com/Devops-Nigeria/events/265747549';
    }
    render(){
        return (
            <Preloader/>
        );
    }
}

export default Redirect;
