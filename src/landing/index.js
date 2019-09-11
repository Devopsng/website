import React from "react";
import Nav from '../components/nav'
import Header from './header'
import WhyJoin from './why-join-us'
import JoinUs from './join-us'
import Sponsors from '../components/sponspors'
import Footer from '../components/footer'

function Index() {
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

export default Index;