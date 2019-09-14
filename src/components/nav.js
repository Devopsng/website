import React from "react";
import {
    Route,
    NavLink,
    Link,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

function Nav() {
    return (

            <header className="header_area">
            <nav className="navbar navbar-expand-lg menu_one menu_five">
                <div className="container">
                    <Link to="/" className="navbar-brand sticky_logo" href="#">
                        {/* <img src="img/logo2.png" srcset="img/logo2x-2.png 2x" alt="logo" /> */}
                        {/* <img src="logo192.png" srcset="img/logo2x.png 2x" alt="" /> */}
                        {/* <img src="logo192.png" alt="" height="70px"/> */}
                        <img className="invert-img" src="devops-footer.png" alt="" height="40px"/>
                        <img src="devops-footer.png" alt="" height="40px" />
                    </Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu_toggle">
                            <span className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className="hamburger-cross">
                                <span></span>
                                <span></span>
                            </span>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav menu w_menu pl_120 ml-auto mr-auto">
                            <li className="nav-item dropdown submenu mega_menu mega_menu_two active">
                                <Link to="/" className="nav-link dropdown-toggle" href="#" role="button">
                                    HOME
                                </Link>
                            </li>
                            
                            <li className="dropdown submenu nav-item">
                                <a title="Pages" className="dropdown-toggle nav-link" role="button"  href="https://medium.com/devopsng" target="_blank">
                                    PUBLICATIONS
                                </a>
                            </li>
                            <li className="nav-item dropdown submenu mega_menu">
                                <Link to="/meetup" className="nav-link dropdown-toggle" role="button">
                                    MEETUPS
                                </Link>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <Link to="/community" className="nav-link dropdown-toggle" role="button">
                                    THE COMMUNITY
                                </Link>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <Link to="/contact" className="nav-link dropdown-toggle" role="button">
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                        <a className="btn_get btn_get_radious menu_cus menu_custfive" href="#get-app">Join Us</a>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Nav;
