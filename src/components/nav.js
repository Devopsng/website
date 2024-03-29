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
                            <li className="nav-item">
                               <NavLink exact activeClassName="active" to="/" className="nav-link" role="button">
                                   HOME
                               </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink activeClassName="active" to="/schedule" className="nav-link" role="button">
                                    SCHEDULE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/speakers" className="nav-link" role="button">
                                    SPEAKERS
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/community" className="nav-link" role="button">
                                    COMMUNITY
                                </NavLink>
                            </li>

                            {/*<li className="nav-item">*/}
                            {/*    <NavLink activeClassName="active" to="/meetup" className="nav-link" role="button">*/}
                            {/*        MEETUPS*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink activeClassName="active" to="/community" className="nav-link" role="button">*/}
                            {/*        THE COMMUNITY*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                            {/*    <NavLink activeClassName="active" to="/contact" className="nav-link" role="button">*/}
                            {/*        CONTACT US*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}

                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/meetup" className="nav-link" role="button">
                                    MEETUPS
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/members" className="nav-link" role="button">
                                    MEMBERS
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <a title="Pages" className="dropdown-toggle nav-link" role="button"  href="https://medium.com/devopsng" target="_blank">
                                    PUBLICATIONS
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" to="/contact" className="nav-link" role="button">
                                    CONTACT
                                </NavLink>
                            </li>

                            {/* <li className="dropdown submenu nav-item">
                                <a title="Pages"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false"
                                    href="#">
                                        RESOURCES
                                </a>
                                <ul role="menu" className=" dropdown-menu">
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" to="/meetup" className="nav-link" role="button">
                                            Meetups
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a title="Pages" className="dropdown-toggle nav-link" role="button"  href="https://medium.com/devopsng" target="_blank">
                                            Publications
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="active" to="/contact" className="nav-link" role="button">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        <NavLink className="btn_get btn_get_radious menu_cus menu_custfive" to={"/register"} target="_blank">
                            Join Us
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Nav;
