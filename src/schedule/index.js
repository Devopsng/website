import React from "react";
import Nav from '../components/nav'
import Header from './header'

import Footer from "../components/footer";
import Sponsors from "../components/sponsors";
import ScheduleList from "./list";

function Schedule() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Header/>
            <ScheduleList/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default Schedule;
