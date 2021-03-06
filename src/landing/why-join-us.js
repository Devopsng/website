import React from "react";

function WhyJoin() {
  return (
    <section className="software_featured_area">
      <div className="container">
        <h2
          className="f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          You should join us at our next
          <br /> meet-up
        </h2>
        <div className="row software_featured_info">
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="software_featured_item text-center mb_20">
              <div className="s_icon">
                <img src="img/home5/icon_shape.png" alt="" />
                <img className="icon" src="img/home5/icon1.png" alt="" />
              </div>
              <h3 className="f_600 t_color3">Are you are DevOps expert?</h3>
              <p className="f_400 f_size_15 mb-30">
                Do you dream of working as a DevOps/Cloud/Security or SR Engineer?: Probably you are developer that is looking to pivot your career and join the cloud native movement, this is a good opportunity to get the Launchpad you need into the career of your choice and get the right mentors to drive you towards achieving your dreams.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="software_featured_item text-center mb_20">
              <div className="s_icon">
                <img src="img/home5/icon_shape.png" alt="" />
                <img className="icon" src="img/home5/icon2.png" alt="" />
              </div>
              <h3 className="f_600 t_color3">
                Do you have few years experience in DevOps? 
              </h3>
              <p className="f_400 f_size_15 mb-30">
                Already working in these fields: Perhaps you are already working as a DevOps engineer, but you need more, you want to be one of the best in your field, you want to gain knowledge and share knowledge amongst other leagues of intelligent people and even share ideas, then you have found the right community to join.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
            <div className="software_featured_item text-center mb_20">
              <div className="s_icon">
                <img src="img/home5/icon_shape.png" alt="" />
                <img className="icon" src="img/home5/icon3.png" alt="" />
              </div>
              <h3 className="f_600 t_color3">
                Are you considering a Career change?
              </h3>
              <p className="f_400 f_size_15 mb-30">
                Are you a Business or Organization: Looking to improve your whole DevOps and cloud-native approach by learning how it is done from the best or you need to poach a couple of great engineers to get your organization to achieve its business goal, DevOps Ng will provide you with all the resources you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
