import React from "react";
import { BannerWrapper } from "./Banner.style";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

type BannerProps = {
  content: any;
};

const Banner: React.FC<BannerProps> = ({ content }) => {
  return (
    <BannerWrapper>
      <Slider className="slider-wrapper" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </BannerWrapper>
  );
};
export default Banner;
