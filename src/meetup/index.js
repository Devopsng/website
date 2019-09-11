import React from "react";
import Nav from "../components/nav";
import Header from "./header";
import WhyMeetUp from "./why-meetup";
import MeetUpList from "./meetups";
function MeetUp() {
    return (
        <div className="body_wrapper">
            <Nav/>
            <Header />
            <WhyMeetUp />
            <MeetUpList />
        </div>
    );
}

export default MeetUp;
