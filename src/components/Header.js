import React from "react";
import headerLogo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <img className="header__logo" src={headerLogo} alt="Home." />
        <button className="btn btn--header">Try it Free</button>
      </header>
    </>
  );
};

export default Header;
