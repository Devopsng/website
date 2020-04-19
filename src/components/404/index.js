import React from "react";
import Nav from './../nav'
import Index from "./404"

function PageNotFound() {
    return (
        <div className="body_wrapper">
            <Nav />
            <Index/>
        </div>
    );
}

export default PageNotFound;