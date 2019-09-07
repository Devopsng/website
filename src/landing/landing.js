import React from "react";
import Nav from './nav'
import Header from './header'
import WhyJoin from './why-join-us'
import JoinUs from './join-us'
import Sponsors from './sponspors'
function Landing() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <WhyJoin />
            <JoinUs/>
            <Sponsors />
        </div>
    );
}

export default Landing;
