import React from "react";

function SpeakerList() {
    return (
        <section className="experts_team_area sec_pad">
            <div className="container">
                <div className="sec_title text-center mb_70">
                    <h2 className="f_p f_size_30 l_height30 f_700 t_color3 mb_20">The Experts Team</h2>
                    <p className="f_400 f_size_16">Why I say old chap that is spiffing barney, nancy boy bleeder chimney<br /> pot
                        richard cheers the little rotter.!</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="ex_team_item">
                            {/*<img src="img/home7/team_01.jpg" alt="" />*/}
                            <img src="img/speakers/CobusBernard.jpg" alt="" />
                                <div className="team_content">
                                    <a href="#"><h3 className="f_p f_size_16 f_600 t_color3">Cobus Bernard</h3></a>
                                    <h5>Senior AWS Evangelist, EMEA</h5>
                                </div>
                                <div className="hover_content">
                                    <div className="n_hover_content">
                                        <ul className="list-unstyled">
                                            <li><a target="_blank" href="https://twitter.com/cobusbernard"><i className="fab fa-twitter"></i></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/in/cobusbernard/"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                        <div className="br"></div>
                                        <a href="#"><h3 className="f_p f_size_16 f_600 w_color">Cobus Bernard</h3>
                                        </a>
                                        <h5>Senior AWS Evangelist, EMEA</h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="ex_team_item">
                            {/*<img src="img/home7/team_02.jpg" alt="" />*/}
                            <img src="img/speakers/NannaMadu.jpg" alt="" />
                                <div className="team_content">
                                    <a href="#"><h3 className="f_p f_size_16 f_600 t_color3">Nanna Madu</h3></a>
                                    <h5>Head of Engineering at Seamfix</h5>
                                </div>
                                <div className="hover_content">
                                    <div className="n_hover_content">
                                        <ul className="list-unstyled">
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/in/nnanna-madu-afokwa-41372749/"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                        <div className="br"></div>
                                        <a href="#"><h3 className="f_p f_size_16 f_600 w_color">Nanna Madu</h3></a>
                                        <h5>Head of Engineering, Seamfix Nigeria Ltd</h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="ex_team_item">
                            <img src="img/speakers/IfeanyiAneke.jpg" alt="" />
                            {/*<img src="img/home7/team_03.jpg" alt="" />*/}
                                <div className="team_content">
                                    <a href="#"><h3 className="f_p f_size_16 f_600 t_color3">Ifeanyi Aneke</h3></a>
                                    <h5>Solution Architect at Microsoft</h5>
                                </div>
                                <div className="hover_content">
                                    <div className="n_hover_content">
                                        <ul className="list-unstyled">
                                            <li><a target="_blank" href="https://twitter.com/ifeanyiuaneke"><i className="fab fa-twitter"></i></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/in/ifeanyianeke/"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                        <div className="br"></div>
                                        <a href="https://www.linkedin.com/in/ifeanyianeke/"><h3 className="f_p f_size_16 f_600 w_color">Ifeanyi Aneke</h3></a>
                                        <h5>Solution Architect at Microsoft</h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="ex_team_item">
                            <img src="img/speakers/DavidOgbiko.jpeg" alt="" />
                            {/*<img src="img/home7/team_04.jpg" alt="" />*/}
                                <div className="team_content">
                                    <a href="#"><h3 className="f_p f_size_16 f_600 t_color3">David Ogbiko</h3></a>
                                    <h5>Engineering Manager at OPay<br/></h5>
                                </div>
                                <div className="hover_content">
                                    <div className="n_hover_content">
                                        <ul className="list-unstyled">
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a target="_blank" href="https://www.linkedin.com/in/david-ogbiko-94620266/"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                        <div className="br"></div>
                                        <a href="https://www.linkedin.com/in/david-ogbiko-94620266"><h3 className="f_p f_size_16 f_600 w_color">David Ogbiko</h3></a>
                                        <h5>Engineering Manager | DevOps Engineer at OPay</h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpeakerList;
