import React from "react";
import logo from "../assets/white_logo.svg";
import { Link } from "react-router-dom";
import galleryImg from "../assets/gallery.png";
import links from "../assets/social-media-links.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container m-0 p-0">
        <div className="row">
          <div className="col-12 col-md-3 py-2">
            <div className="d-flex flex-column">
              <div className="footer_logo-container">
                <img src={logo} alt="logo" className="footer_logo img-fluid" />
              </div>
              <div className="footer_details-container">
                <div className="footer_number">
                  <p className="footer_key">Phone Number:</p>
                  <p className="footer_value">+977-9861859764</p>
                </div>
                <div className="footer_location">
                  <p className="footer_key">Location:</p>
                  <p className="footer_value">Tahachal-Kathmandu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div>
              <span className="footer_text">
                "City Pet House & Animal Clinic: Quality and affordable animal
                care at your doorstep. Comprehensive, professional, and
                compassionate veterinary services by our dedicated and
                experienced team."
              </span>
            </div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div>
              <ul className="footer_list">
                <li className="footer_listitem item_first">Menu</li>
                <Link to="/" className="text-decoration-none">
                  <li className="footer_listitem">Home</li>
                </Link>
                <Link to="/about" className="text-decoration-none">
                  <li className="footer_listitem">About</li>
                </Link>
                <li className="footer_listitem">Services</li>
                <li className="footer_listitem">Breeds</li>
                <li className="footer_listitem">Shop</li>
                <li className="footer_listitem">Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3 py-2">
            <div>
              <p className="text-white text_gallery">Gallery</p>
            </div>
            <div>
              <img src={galleryImg} alt="gallery-image" className="img-fluid" />
            </div>
          </div>
          <hr className="text-white py-2" />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center py-2">
            <p className="copyright-text ">
              Copyright © 2023 City Pet House & Animal Clinic | All Rights
              Reserved
            </p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-end media-links-container py-2">
            <img
              src={links}
              alt="media-links"
              className="img-fluid media-links"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
