import React from "react";

function WhyMeetUp() {
    return (
        <section className="prototype_service_info">
            <div className="symbols-pulse active">
                <div className="pulse-1"></div>
                <div className="pulse-2"></div>
                <div className="pulse-3"></div>
                <div className="pulse-4"></div>
                <div className="pulse-x"></div>
            </div>
            <div className="container">
                <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">
                    Why Join the DevOps NG Community?
                </h2>
                <div className="row p_service_info">
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pr_70">
                            <div className="icon icon_one"><i className="ti-panel"></i></div>
                            <h5 className="f_600 f_p t_color3">Continuous Learning</h5>
                            <p className="f_400">
                                Part of the benefit of belonging to a community is the open learning culture that we have, where engineers from different organizations come and share knowledge and ideas on how to grow as a person.
                                {/*and also how to help your organization, also you can always bring your technical and business problem to the community and you can be sure that there is always someone that has faced the challenge before.*/}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pl_50 pr_20">
                            <div className="icon icon_two"><i className="ti-layout-grid2"></i></div>
                            <h5 className="f_600 f_p t_color3">Opportunities</h5>
                            <p className="f_400">Our community has made it possible for engineers in our field to be the first to know when opportunities like Remote / Onsite Job, Speaking Opportunities, Free Conference Invites etc.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pl_70">
                            <div className="icon icon_three"><i className="ti-fullscreen"></i></div>
                            <h5 className="f_600 f_p t_color3">Giving back to the community</h5>
                            <p className="f_400">One of the reasons started DevOps Nigeria was given birth to is the fact that we want to give back to the community and one of the ways we have been able to achieve that is by <strong>Mentoring</strong>
                                {/*teaching and mentoring other junior and upcoming engineers that would like to become a DevOps, Cloud or Site Reliability Engineer in achieving their dream.*/}
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pr_70">
                            <div className="icon icon_four"><i className="ti-vector"></i></div>
                            <h5 className="f_600 f_p t_color3">Fact 4</h5>
                            <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser
                                young delinquent argy-bargy.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pl_50 pr_20">
                            <div className="icon icon_five"><i className="ti-cloud-down"></i></div>
                            <h5 className="f_600 f_p t_color3">Fact 5</h5>
                            <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser
                                young delinquent argy-bargy.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="p_service_item pl_70">
                            <div className="icon icon_six"><i className="ti-bolt"></i></div>
                            <h5 className="f_600 f_p t_color3">Fact 6</h5>
                            <p className="f_400">Bog cheeky bugger blow off only a quid grub he legged it porkies tosser
                                young delinquent argy-bargy.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default WhyMeetUp;
