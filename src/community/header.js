import React from "react";

function Header() {
    return (
        <section className="breadcrumb_area">
            <img className="breadcrumb_shap" src="img/breadcrumb/banner_bg.png" alt="" />
            <div className="container">
                <div className="breadcrumb_content text-center">
                    <h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">The Community</h1>
                    <p className="f_400 w_color f_size_16 l_height26">
                        DevOps NG is focused on helping to grow and foster the DevOps Community in Nigeria and all of Africa. We do this by holding series of meetups every quarter where we invite great mind to come and share their knowledge in the field, these meetups happens in different geolocations in the country from lagos to Abuja, and we are also working towards extending our tentacles to other countries.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Header;
