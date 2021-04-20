import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import GlideWrapper, { GlideSlideWrapper } from "./GlideCarousel.style";

type CarouselProps = {
  children: any;
  options: any;
  carouselSelector: any;
};

const GlideCarousel: React.FC<CarouselProps> = ({
  options,
  children,
  carouselSelector,
}) => {
  // Add all classs to an array.
  const addAllClasses = ["glide"];

  // Load glide.
  useEffect(() => {
    const glide = new Glide(
      carouselSelector ? `#${carouselSelector}` : "#glide",
      {
        ...options,
      }
    );
    glide.mount();
  }, [carouselSelector, options]);

  return (
    <GlideWrapper
      className={addAllClasses.join(" ")}
      id={carouselSelector || "glide"}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
    </GlideWrapper>
  );
};

// Glide Slide wrapper component.
const GlideSlide = ({ children }) => {
  return (
    <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
  );
};

GlideCarousel.propTypes = {
  /** Children. */
  children: PropTypes.element,

  /** You can add your custom glid options using this prop. */
  options: PropTypes.object,
};

GlideSlide.propTypes = {
  /** Children. */
  children: PropTypes.element,
};

export { GlideSlide };

export default GlideCarousel;
