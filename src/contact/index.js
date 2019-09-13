import React from "react";
import Nav from '../components/nav'
import Header from './header'
import ContactSection from "./contact";
import Footer from "../components/footer";

function Contact() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <ContactSection />
            <Footer/>
        </div>
    );
}

export default Contact;
