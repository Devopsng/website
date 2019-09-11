import React from "react";

function MeetUpList() {
    return (
        <section className="prototype_service_area_two">
            <div className="container custom_container">
                <div className="sec_title text-center mb_70">
                    <h2 className="f_p f_size_30 l_height50 f_600 t_color3">Our Locations</h2>
                    <p className="f_400 f_size_16 mb-0">DevOp NG is everywhere within Nigeria</p>
                </div>
                <div className="service_carousel owl-carousel">
                    <div className="service_item">
                        <div className="icon s_icon_four">
                            <a href="https://google.com">
                                <i className="ti-plus"></i>
                            </a>
                        </div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Start<br /> Yours</h4>
                        <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                        <img className="float-right" src="img/home2/report.png" alt="" />
                    </div>
                    <div className="service_item">
                        <div className="icon s_icon_one">
                            <a href="https://google.com">
                                <i className="ti-plus"></i>
                            </a>
                        </div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">DevOps<br/> Lagos</h4>
                        <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                        <img className="float-right" src="img/home2/undraw.png" alt="" />
                    </div>
                    <div className="service_item">
                        <div className="icon s_icon_two">
                            <a href="https://google.com">
                                <i className="ti-plus"></i>
                            </a>
                        </div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">DevOps<br /> Abuja</h4>
                        <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                        <img className="float-right" src="img/home2/inbox.png" alt="" />
                    </div>
                    <div className="service_item">
                        <div className="icon s_icon_three">
                            <a href="https://google.com">
                                <i className="ti-plus"></i>
                            </a>
                        </div>
                        <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">DevOps<br /> Ife</h4>
                        <p>Brolly off his nut A bit of how's your father chancer in my flat chinwag bog skive.</p>
                        <img className="float-right" src="img/home2/file.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MeetUpList;
