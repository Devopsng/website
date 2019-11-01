import React from "react";
import Nav from '../components/nav'
import Header from './header'

import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import SpeakerList from "./speakerlist";

function Speakers() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <SpeakerList/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Speakers;
