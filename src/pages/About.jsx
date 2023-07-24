import React from "react";
import about from "../assets/about.svg";
import checkmark from "../assets/checkmark.svg";
import btnArrow from "../assets/btn-arrow.svg";

const About = () => {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col-md-6 col-12">
          <img src={about} alt="about" className="img-fluid" />
        </div>
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center about-right-container">
          <div>
            <p className="about_text">About Us</p>
          </div>
          <div className="about_para-container">
            <p className="about_para">
              Pet House & Animal clinic was established with moto to provide
              qualitative and affordable animal healthcare service to your
              doorstep.
            </p>
          </div>
          <div className="checkmark-container">
            <div className="d-flex flex-row align-items-center pb-2">
              <img src={checkmark} alt="checkmark" />
              <span className="checkmark_text ps-4">Comprehensive</span>
            </div>
            <div className="d-flex flex-row align-items-center pb-2">
              <img src={checkmark} alt="checkmark" />
              <span className="checkmark_text ps-4">Professional</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <img src={checkmark} alt="checkmark" />
              <span className="checkmark_text ps-4">
                Compassionate veterinary service.
              </span>
            </div>
          </div>
          <div>
            <button type="button" className="about_button">
              Contact <img src={btnArrow} alt="btn-arrow" className="ps-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
