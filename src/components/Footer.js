import React, { useState } from "react";
import footerLogo from "../images/footerLogo.svg";
import phoneIcon from "../images/icon-phone.svg";
import mailIcon from "../images/icon-email.svg";

const Footer = () => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const validateEmail = (email) => {
    const regex =
      /^([a-zA-Z0-9\+\_\-\.])+\@([a-zA-Z0-9\-]+\.)+([a-zA-Z0-9]{2,4})+$/;
    return email.match(regex) ? setIsError(false) : setIsError(true);
  };
  return (
    <>
      <footer>
        <div className="contact">
          <img className="footer__logo" src={footerLogo} alt="Home." />
          <p className="contact__info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <div className="contact__phone">
            <img className="phone__icon" src={phoneIcon} alt="Phone." />
            <p className="phone__info">Phone: +1-543-123-4567</p>
          </div>
          <div className="contact__mail">
            <img className="mail__icon" src={mailIcon} alt="Mail." />
            <p className="mail__info">example@huddle.com</p>
          </div>
          <div className="social-icons">
            <i className="icon icon--fb"></i>
            <i className="icon icon--insta"></i>
            <i className="icon icon--twitter"></i>
          </div>
        </div>
        <div className="nl">
          <h2 className="nl__heading">Newsletter</h2>
          <p className="nl__info">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form className="nl__form">
            <input
              className="form__input"
              type="email"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              style={
                isError
                  ? { border: "1px solid hsl(0, 100%, 63%)" }
                  : { border: "1px solid hsl(192, 100%, 9%)" }
              }
            ></input>
            <button
              className="btn btn--form"
              onClick={(e) => {
                e.preventDefault();
                validateEmail(input);
              }}
            >
              Subscribe
            </button>
            <p
              className="form__error"
              style={isError ? { display: "block" } : { display: "none" }}
            >
              Check your email please
            </p>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
