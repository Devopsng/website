import React from "react";
import Nav from "../components/nav";
import Header from "./header";
import WhyMeetUp from "./why-meetup";
import MeetUpList from "./meetups";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

function MeetUp() {
    return (
        <div className="body_wrapper">
            <Nav/>
            <Header />
            <WhyMeetUp />
            <MeetUpList />
            <Sponsors />
            <Footer />
        </div>
    );
}

export default MeetUp;
