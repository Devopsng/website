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
                Crikey blow off chap knackered gosh bobby geeza gormless well,
                Charles cheeky bugger I cor blimey guvnor hanky panky jolly
                good.
              </p>
              {/* <a href="#" className="learn_btn">
                Learn More
              </a> */}
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
                Crikey blow off chap knackered gosh bobby geeza gormless well,
                Charles cheeky bugger I cor blimey guvnor hanky panky jolly
                good.
              </p>
              {/* <a href="#" className="learn_btn">
                Learn More
              </a> */}
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
                Crikey blow off chap knackered gosh bobby geeza gormless well,
                Charles cheeky bugger I cor blimey guvnor hanky panky jolly
                good.
              </p>
              {/* <a href="#" className="learn_btn">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
