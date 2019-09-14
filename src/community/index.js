import React from "react";
import Nav from '../components/nav'
import Header from './header'
import About from "./about";
import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import Team from "./team";

function Community() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <About/>
            <Team/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Community;
