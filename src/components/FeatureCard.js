import React from "react";

const FeatureCard = ({ img, heading, info, cardStyle, textStyle }) => {
  return (
    <>
      <div className="feature-card" style={cardStyle}>
        <div className="feature-card__text" style={textStyle}>
          <h2 className="feature-card__heading">{heading}</h2>
          <p className="feature-card__info">{info}</p>
        </div>
        <img
          className="feature-card__img"
          src={img}
          alt="Feature illustration."
        />
      </div>
    </>
  );
};

export default FeatureCard;
