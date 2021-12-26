import React from "react";
import Header from "./Header";
import mockupImg from "../images/screen-mockups.svg";
import commsIcon from "../images/icon-communities.svg";
import msgsIcon from "../images/icon-messages.svg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <Header />
        <h1 className="hero__title">Build The Community Your Fans Will Love</h1>
        <p className="hero__info">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="btn btn--hero">Get Started For Free</button>
        <img className="hero__img" src={mockupImg} alt="Screen mockups." />
        <div className="hero__stats">
          <div className="stat__comms">
            <img className="comms__img" src={commsIcon} alt="" />
            <p className="comms__count">1.4k+</p>
            <p className="comms__text">Communities Formed</p>
          </div>
          <div className="stat__msgs">
            <img className="msgs__img" src={msgsIcon} alt="" />
            <p className="msgs__count">2.7m+</p>
            <p className="msgs__text">Messages Sent</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
