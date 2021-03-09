import React from "react";

import "../css/Footer.css"

import ContactUs from "../Assets/image/customer-care-rollover.svg";
import AboutUs from "../Assets/image/about-us-rollover.svg";
import FAQ from "../Assets/image/faq-rollover.svg";
import FeedBack from "../Assets/image/feedback-rollover.svg";
import BoxOffice from "../Assets/image/boxoffice-rollover.svg";
import Twitter from "../Assets/image/twitter.svg";
import Linkedin from "../Assets/image/inkedin.svg";
import Facebook from "../Assets/image/facebook.svg";
import Github from "../Assets/image/github.svg";
import Instagram from "../Assets/image/insta.svg";
const Footer = () => {
  return (
    <div className="main__div">
      <div className="first">
        <ul className="ul__div">
          <div className="main">
            <img
              className="contactus"
              style={{ marginLeft: "10%" }}
              src={ContactUs}
              alt="contact"
            />
            <p className="target" style={{ marginLeft: "40%" }}>
              Contact Us
            </p>
          </div>
          <div className="main">
            <img className="aboutus" src={AboutUs} alt="About Us" />
            <p className="target" style={{ marginLeft: "85px" }}>
              About us
            </p>
          </div>
          <div className="main">
            <img className="FAQ" src={FAQ} alt="Q and A" />
            <p className="target" style={{ marginLeft: "105px" }}>
              FAQ
            </p>
          </div>
          <div className="main">
            <img className="feedback" src={FeedBack} alt="Feedback" />
            <p className="target" style={{ marginLeft: "87px" }}>
              FeedBack
            </p>
          </div>
          <div className="main">
            <img className="boxoffice" src={BoxOffice} alt="Boxoffice" />
            <p className="target " style={{ marginLeft: "85px" }}>
              Box Office
            </p>
          </div>
        </ul>
      </div>
      <div className="second">
        <ul style={{ marginLeft: "270px" }}>
          <h1
            style={{
              marginTop: "15px",
              fontSize: "14px",
              // lineHeight: "15.12px",
              marginLeft: "0px",
              wordSpacing: "0px",
              color: "white",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
          >
            BROWSE ALL
          </h1>
          <p>Now Showing</p>
          <p>All Movies</p>
          <p>Upcoming Movies</p>
          <p>Cinemas</p>
        </ul>
        <ul>
          <h1
            style={{
              marginBottom: "20px",
              marginTop: "15px",
              fontSize: "14px",
              lineHeight: "15.12px",
              wordSpacing: "0px",
              color: "white",
              marginLeft: "0px",

              fontWeight: "normal",
            }}
          >
            LINKS
          </h1>
          <p>Register</p>
          <p>Login</p>
          <p>Help</p>
          <p>Order</p>
        </ul>
        <ul>
          <h1
            style={{
              marginBottom: "20px",
              marginTop: "15px",
              fontSize: "14px",
              lineHeight: "15.12px",
              wordSpacing: "0px",
              color: "white",
              marginLeft: "0px",

              fontWeight: "normal",
            }}
          >
            ENQUIRIES
          </h1>
          <p>Support</p>
          <p>Theatre Owners</p>
          <p>Events</p>
        </ul>
      </div>

      <div className="third">
        <div className="last__icons">
          <img
            className="twitter"
            style={{ marginLeft: "40%" }}
            src={Twitter}
            alt="twitter"
          />
          <img className="facebook" src={Facebook} alt="facebook" />
          <img className="linkedin" src={Linkedin} alt="Linked in " />
          <img className="insta" src={Instagram} alt="insta" />
          <img className="github" src={Github} alt="github" />
        </div>
        <h1
          style={{
            fontSize: "15px",
            lineHeight: "12px",
            marginTop: "15px",
            textAlign: "center",
            wordSpacing: "0px",
            textDecoration: "rgb(117, 117, 117)",
            color: "gray",
          }}
        >
          Copyright © 2019 Movie Mood Technologies Pvt. Ltd. All rights
          reserved. Terms of Use | Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default Footer;
