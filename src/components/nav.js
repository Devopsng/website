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
                        <img className="invert-img" src="devops-footer.png" alt="" height="50px"/>
                        <img src="devops-footer.png" alt="" height="58px" />
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
