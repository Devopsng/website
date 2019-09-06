import React from "react";
import Nav from './nav'
import Header from './header'
import WhyJoin from './why-join-us'
import JoinUs from './join-us'

function Landing() {
    return (
        <div class="body_wrapper">
            <Nav />
            <Header/>
            <WhyJoin />
            <JoinUs/>
        </div>
    );
}

export default Landing;
