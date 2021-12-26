import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import featureCardData from "../featureCardData";

const Features = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  const featureCardStyle = {
    normal: {
      cardStyle: {
        flexFlow: windowWidth > 768 ? "row nowrap" : "column-reverse nowrap",
        backgroundColor: "hsl(207, 100%, 98%)",
      },
      textStyle: {
        marginRight: windowWidth > 768 ? "8%" : "0",
      },
    },
    reverse: {
      cardStyle: {
        flexFlow:
          windowWidth > 768 ? "row-reverse nowrap" : "column-reverse nowrap",
        backgroundColor: "#fff",
      },
      textStyle: {
        marginLeft: windowWidth > 768 ? "8%" : "0",
      },
    },
  };

  const displayFeatureCards = () => {
    const data = featureCardData;
    return data.map((item) => {
      return (
        <FeatureCard
          key={item.id}
          img={item.img.imgSrc}
          heading={item.heading}
          info={item.info}
          cardStyle={
            item.id % 2 === 0
              ? featureCardStyle.reverse.cardStyle
              : featureCardStyle.normal.cardStyle
          }
          textStyle={
            item.id % 2 === 0
              ? featureCardStyle.reverse.textStyle
              : featureCardStyle.normal.textStyle
          }
        />
      );
    });
  };
  return (
    <>
      <section className="features">{displayFeatureCards()}</section>
    </>
  );
};

export default Features;
