import React from "react";
import banner from "../assets/banner.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";

const Hero = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 img-fluid banner"
            src={banner}
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block p-0">
            <h5 className="banner_text-one">
              We provide the best care to our furry friends!
            </h5>
            <p className="banner_text-two">Top Quality of Pet Product Store.</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#007FFF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={arrowLeft} alt="arrow" />
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#ededed",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={arrowRight} alt="arrow" />
        </div>
      </a>
    </div>
  );
};

export default Hero;
