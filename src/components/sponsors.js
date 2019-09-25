import React from "react";

function Sponsors() {
    return (
        <section className="partner_logo_area_two pb-lg-5">
            <div className="container">
                <h4 className="f_size_18 f_400 f_p text-center l_height28 mb_70">
                    OUR SPONSORS
                </h4>
                <div className="row partner_info">
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.1s">
                        <a href="#">
                            <img src="img/sponsors/aws.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.2s">
                        <a href="#">
                            <img src="img/sponsors/microsoft.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.3s">
                        <a href="#">
                            <img src="img/sponsors/KorapayLogo.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.4s">
                        <a href="#">
                            <img src="img/sponsors/terragon.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.5s">
                        <a href="#">
                            <img src="img/sponsors/seamfix-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.6s">
                        <a href="#">
                            <img height="70" src="img/sponsors/quidax.png" alt="" />
                        </a>
                    </div>
                    {/* <div className="logo_item wow fadeInLeft" data-wow-delay="0.7s">
                        <a href="#">
                            <img src="img/sponsors/microsoft.png" alt="" />
                        </a>
                    </div>
                    <div className="logo_item wow fadeInLeft" data-wow-delay="0.8s">
                        <a href="#">
                            <img src="img/sponsors/microsoft.png" alt="" />
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
