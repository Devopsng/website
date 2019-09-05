import React from "react";

function Header() {
    return (
        <section class="software_banner_area d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="software_banner_content">
                            <h2 class="f_500 f_size_50 w_color wow fadeInLeft" data-wow-delay="0.2s">We deliver the <span class="f_700">Software</span> You need, no more no less</h2>
                            <p class="w_color f_size_18 l_height30 mt_30 wow fadeInLeft" data-wow-delay="0.4s">Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!</p>
                            <div class="action_btn d-flex align-items-center mt_40 wow fadeInLeft" data-wow-delay="0.6s">
                                <a href="#" class="software_banner_btn">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=sU3FkzUKHXU" class="video_btn popup-youtube">
                                    <div class="icon"><i class="ti-control-play"></i></div><span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="software_img wow fadeInRight" data-wow-delay="0.2s">
                            <img src="img/home5/banner_img.png" alt="" />
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Header;
