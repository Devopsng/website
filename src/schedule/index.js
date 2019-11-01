import React from "react";
import Nav from '../components/nav'
import Header from './header'

import Footer from "../components/footer";
import Sponsors from "../components/sponsors";

function Speakers() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>

            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Speakers;
