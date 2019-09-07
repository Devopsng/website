import React from "react";

function Nav() {
    return (

            <header className="header_area">
            <nav className="navbar navbar-expand-lg menu_one menu_five">
                <div className="container">
                    <a className="navbar-brand sticky_logo" href="#">
                        {/* <img src="img/logo2.png" srcset="img/logo2x-2.png 2x" alt="logo" /> */}
                        {/* <img src="logo192.png" srcset="img/logo2x.png 2x" alt="" /> */}
                        {/* <img src="logo192.png" alt="" height="70px"/> */}
                        <img className="invert-img" src="devops.png" alt="" height="100px"/>
                        <img src="devops.png" alt="" height="100px" />
                    </a>
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
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    HOME
                                </a>
                            </li>
                            
                            <li className="dropdown submenu nav-item"><a title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">PUBLICATIONS</a>
                                <ul role="menu" className=" dropdown-menu">
                                    <li className="dropdown submenu nav-item"><a title="Service" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Service <span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="Service 01" className="nav-link" href="service-1.html">Service 01</a></li>
                                            <li className="nav-item"><a title="Service 02" className="nav-link" href="service-2.html">Service 02</a></li>
                                            <li className="nav-item"><a title="Service 03" className="nav-link" href="service-3.html">Service 03</a></li>
                                            <li className="nav-item"><a title="Service Details" className="nav-link" href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown submenu nav-item"><a title="Career" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Career <span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="Job Listing" className="nav-link" href="job-listing.html">Job Listing</a></li>
                                            <li className="nav-item"><a title="Job Details" className="nav-link" href="job-details.html">Job Details</a></li>
                                            <li className="nav-item"><a title="Apply Job" className="nav-link" href="job-apply.html">Apply Job</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a title="About" className="nav-link" href="about.html">About</a></li>
                                    <li className="nav-item"><a title="Process" className="nav-link" href="process.html">Process</a></li>
                                    <li className="nav-item"><a title="Pricing" className="nav-link" href="price.html">Pricing</a></li>
                                    <li className="dropdown submenu nav-item"><a title="Case Study" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Case Study<span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="Case Study" className="nav-link" href="case-study.html">Case Study</a></li>
                                            <li className="nav-item"><a title="Case study Details" className="nav-link" href="case-study-details.html">Case Study Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a title="Team" className="nav-link" href="team.html">Team</a></li>
                                    <li className="dropdown submenu nav-item"><a title="Sign Up" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Sign Up <span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="Sign Up 01" className="nav-link" href="sign-up-1.html">Sign Up 01</a></li>
                                            <li className="nav-item"><a title="Sign Up 02" className="nav-link" href="sign-up-2.html">Sign Up 02</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown submenu nav-item"><a title="Login" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Login<span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="Login 01" className="nav-link" href="login.html">Login 01</a></li>
                                            <li className="nav-item"><a title="Login 02" className="nav-link" href="login-two.html">Login 02</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a title="FAQ" className="nav-link" href="faq.html">FAQ</a></li>
                                    <li className="dropdown submenu nav-item"><a title="Contact" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Contact <span className="arrow_carrot-right"></span> </a>
                                        <ul role="menu" className="dropdown-menu">
                                            <li className="nav-item"><a title="Contact 01" className="nav-link" href="contact-1.html">Contact 01</a></li>
                                            <li className="nav-item"><a title="Contact  02" className="nav-link" href="contact-2.html">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a title="Thank You" className="nav-link" href="thanks.html">Thank You</a></li>
                                    <li className="nav-item"><a title="Coming Soon" className="nav-link" href="coming-soon.html">Coming Soon</a></li>
                                    <li className="dropdown submenu nav-item"><a title="404" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">404<span className="arrow_carrot-right"></span> </a>
                                        <ul className=" dropdown-menu">
                                            <li className="nav-item"><a title="404 01" className="nav-link" href="404.html">404 01</a></li>
                                            <li className="nav-item"><a title="404 02" className="nav-link" href="404-two.html">404 02</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown submenu mega_menu">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    MEETUPS
                                </a>
                                <div className="mega_menu_inner">
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Portfolio Grid</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="portfolio-grid-2col.html" className="nav-link">Style 1 (2 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-3columns.html" className="nav-link">Style 1 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-4columns.html" className="nav-link">Style 1 (4 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-2col-2.html" className="nav-link">Style 2 (2 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-2col-3.html" className="nav-link">Style 2 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-2col-4.html" className="nav-link">Style 2 (4 columns)</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Portfolio Fluid</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="portfolio-fullwidth-3columns.html" className="nav-link">Style 1 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-fullwidth-4columns.html" className="nav-link">Style 1 (4 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-fullwidth1.html" className="nav-link">Style 2 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-grid-fullwidth2.html" className="nav-link">Style 2 (4 columns)</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Portfolio Masonry</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="portfolio-mas-2col.html" className="nav-link">Style 1 (2 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-mas-3col.html" className="nav-link">Style 1 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-mas-4col.html" className="nav-link">Style 1 (4 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-mas-3col-2.html" className="nav-link">Style 2 (3 columns)</a></li>
                                                <li className="nav-item"><a href="portfolio-mas-4col-2.html" className="nav-link">Style 2 (4 columns)</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Project details</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a href="portfolio-details-1.html" className="nav-link">Style 1</a></li>
                                                <li className="nav-item"><a href="portfolio-details-2.html" className="nav-link">Style 2</a></li>
                                                <li className="nav-item"><a href="portfolio-details-3.html" className="nav-link">Style 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    JOB BOARDS
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="shop-grid.html" className="nav-link">Shop Grid</a></li>
                                    <li className="nav-item"><a href="shop-list.html" className="nav-link">Shop list</a></li>
                                    <li className="nav-item"><a href="product-details-1.html" className="nav-link">Product detail</a></li>
                                    <li className="nav-item"><a href="shoping-cart.html" className="nav-link">Shopping cart</a></li>
                                    <li className="nav-item"><a href="checkout.html" className="nav-link">Checkout</a></li>
                                    <li className="nav-item"><a href="wishlist.html" className="nav-link">Wishlist</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown submenu">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    EXTRA MENU 
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="blog-grid.html" className="nav-link">Blog Grid</a></li>
                                    <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Blog Grid Two</a></li>
                                    <li className="nav-item"><a href="blog-list.html" className="nav-link">Blog List</a></li>
                                    <li className="nav-item"><a href="blog-right-sidebar.html" className="nav-link">Blog Right Sidebar</a></li>
                                    <li className="nav-item"><a href="blog-masonry.html" className="nav-link">Blog Masonry</a></li>
                                    <li className="nav-item"><a href="blog-masonry-two.html" className="nav-link">Blog Masonry Two</a></li>
                                    <li className="nav-item"><a href="blog-masonry-sidebar.html" className="nav-link">Blog Masonry Sidebar</a></li>
                                    <li className="nav-item"><a href="blog-masonry-sidebar-two.html" className="nav-link">Blog Masonry Sidebar Two</a></li>
                                    <li className="nav-item"><a href="blog-single.html" className="nav-link">Blog Single</a></li>
                                    <li className="nav-item"><a href="blog-single-two.html" className="nav-link">Blog Single Two</a></li>
                                </ul>
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
