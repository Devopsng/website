import React from "react";
import Nav from "../components/nav";
import Header from "./header";
import Footer from "../components/footer";

function Member() {
    return (
        <div className="body_wrapper">
            <Nav/>
            <Header />
            <Sponsors />
            <Footer />
        </div>
    );
}

export default Member;
