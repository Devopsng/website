import React from "react";

function Preloader() {
  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="D" className="letters-loading">
              D
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="V" className="letters-loading">
              V
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="P" className="letters-loading">
              P
            </span>
            <span data-text-preloader="S" className="letters-loading">
              S
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
