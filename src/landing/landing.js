import React from "react";
import Nav from './nav'
import Header from './header'
import WhyJoin from './why-join-us'
import JoinUs from './join-us'
import Sponsors from './sponspors'
import Footer from './footer'

function Landing() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <WhyJoin />
            <JoinUs/>
            <Sponsors />
            <Footer />
        </div>
    );
}

export default Landing;
