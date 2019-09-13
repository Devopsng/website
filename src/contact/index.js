import React from "react";
import Nav from '../components/nav'
import Header from './header'
import ContactSection from "./contact";

function Contact() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <ContactSection />
        </div>
    );
}

export default Contact;
