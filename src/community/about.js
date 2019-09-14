import React from "react";

function About() {
    return (
        <section className="agency_service_area bg_color">
            <div className="container">
                <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90">
                    DevOps NG in Summary
                </h2>
                <div className="row mb_30">
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item agency_service_item pr_70">
                            <div className="icon">
                                <img src="img/home4/icon_shape1.png" alt="" />
                                    <i className="ti-panel"></i>
                            </div>
                            <h5 className="f_600 f_p t_color3">Our Mission</h5>
                            <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty
                                bubble and squeak wind up, brown bread the full monty bloke ruddy.!</p>
                            {/*<p className="mb-0"><a href="#">Read More</a><i className="ti-arrow-right"></i></p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item agency_service_item pl_20 pr_70">
                            <div className="icon">
                                <img src="img/home4/icon_shape2.png" alt="" />
                                    <i className="ti-layout-grid2"></i>
                            </div>
                            <h5 className="f_600 f_p t_color3">Our Vision</h5>
                            <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty
                                bubble and squeak wind up, brown bread the full monty bloke ruddy.!</p>
                            {/*<p className="mb-0"><a href="#">Read More</a><i className="ti-arrow-right"></i></p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item agency_service_item pl_20 pr_70">
                            <div className="icon">
                                <img src="img/home4/icon_shape3.png" alt="" />
                                    <i className="ti-gallery"></i>
                            </div>
                            <h5 className="f_600 f_p t_color3">Our Passion</h5>
                            <p>Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty
                                bubble and squeak wind up, brown bread the full monty bloke ruddy.!</p>
                            {/*<p className="mb-0"><a href="#">Read More</a><i className="ti-arrow-right"></i></p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
