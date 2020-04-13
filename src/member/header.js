import React from "react";

function Header() {
    return (
        <section className="breadcrumb_area">
            <img className="breadcrumb_shap" src="img/breadcrumb/banner_bg.png" alt="" />
                <div className="container">
                    <div className="breadcrumb_content text-center">
                        <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">DevOps NG Members</h1>
                        <p className="f_400 w_color f_size_16 l_height26">
                            Join thousands of (Software, DevOps, Cloud and Site Reliability) Engineers and IT experts in Africa, Get updated on news and happenings in the community, get must-read articles, chat with like-minded people, get job offers and more.
                        </p>
                    </div>
                </div>
        </section>
    );
}

export default Header;
