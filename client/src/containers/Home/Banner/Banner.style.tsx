import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import ArrowRight from "../../../image/right-arrow.svg";
const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  position: relative;
  padding: 100px 0px 60px;
  rest @media (max-width: 768px) {
    padding: 100px 0px 60px;
  }
  @media (max-width: 1199px) {
    padding: 100px 0px 60px;
  }
  button {
    -webkit-appearance: none;
    appearance: none;
    -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all 0.5s ease;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    border: none;
    background: #549404;
    color: #ffffff;
    border-radius: 30px;
    text-transform: uppercase;
    box-sizing: border-box;
    padding: 15px 40px;
    font-weight: 800;
    font-size: 13px;
    cursor: cursor;
  }

  button:hover {
    color: #ffffff;
    background: #222222;
    -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  }

  .wrapper {
    max-width: 1335px;
    box-sizing: border-box;
    padding: 0 20px;
    margin: auto;
  }

  .wrapper a {
    display: inline-block;
    margin: 5px;
  }

  .wrapper a:first-child {
    margin-left: 0;
  }

  .slider-wrapper {
    position: relative;
    height: 70vh;
    overflow: hidden;
  }

  .slide {
    height: 70vh;
    background-size: cover !important;
  }

  .slide::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(rgba(0, 0, 0, 0.9))
    );
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    bottom: 0;
    left: 0;
  }

  .previousButton,
  .nextButton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: url(${ArrowRight}) no-repeat center center / 36px;
    width: 100px;
    height: 100px;
    text-indent: -9999px;
    cursor: pointer;
  }

  .previousButton:hover,
  .nextButton:hover {
    background: url(${ArrowRight}) no-repeat center center / 36px;
  }

  .previousButton {
    left: 0;
    -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
    transform: rotate(180deg) translateY(calc(50% + 0px));
  }

  .previousButton:hover {
    left: -10px;
  }

  .nextButton {
    right: 0;
  }

  .nextButton:hover {
    right: -10px;
  }

  .slider-content {
    text-align: center;
  }

  .slider-content .inner {
    padding: 0 70px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .slider-content .inner button {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .slider-content .inner h1 {
    font-weight: 900;
    margin: 0 auto;
    max-width: 840px;
    color: #ffffff;
    font-size: 44px;
    line-height: 1;
  }

  .slider-content .inner p {
    color: #ffffff;
    font-size: 18px;
    line-height: 1.5;
    margin: 20px auto 30px;
    max-width: 640px;
  }

  .slider-content section {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .slider-content section span {
    color: #ffffff;
  }

  .slider-content section span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    display: inline-block;
    text-align: left;
    line-height: 1.4;
    vertical-align: middle;
    margin-left: 10px;
  }

  .slider-content section img {
    width: 40px;
    height: 40px;
    border: solid 2px rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    vertical-align: middle;
  }

  .slider-content section span strong {
    color: #ffffff;
    font-size: 14px;
    display: block;
  }

  @media (max-height: 500px) {
    .slider-wrapper,
    .slide {
      height: calc(100vh - 75px);
    }
  }

  @media (max-width: 640px) {
    .slider-wrapper,
    .slide {
      height: calc(80vh - 75px);
    }
  }

  @media (max-height: 600px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 640px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }
  }

  .slide h1 {
    transition: all 0.3s ease;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
    opacity: 0;
  }

  .slide button {
    transition: all 0.3s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }

  .slide p {
    transition: all 0.3s ease;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    opacity: 0;
  }

  .slide section * {
    transition: all 0.3s ease;
  }

  .slide section img {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
    opacity: 0;
  }

  .slide section span {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide section span strong {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
    opacity: 0;
  }

  .slide.animateIn.previous h1,
  .slide.current h1,
  .slide.animateIn.next h1,
  .slide.animateIn.previous button,
  .slide.current button,
  .slide.animateIn.next button,
  .slide.animateIn.previous p,
  .slide.current p,
  .slide.animateIn.next p,
  .slide.animateIn.previous section *,
  .slide.current section *,
  .slide.animateIn.next section * {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-delay: 0.9s;
    transition-delay: 0.9s;
    opacity: 1;
  }

  .slide.animateIn.previous p,
  .slide.animateIn.next p {
    -webkit-transition-delay: 1.1s;
    transition-delay: 1.1s;
  }

  .slide.animateIn.previous button,
  .slide.animateIn.next button {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section img,
  .slide.animateIn.next section img {
    -webkit-transition-delay: 1.3s;
    transition-delay: 1.3s;
  }

  .slide.animateIn.previous section span,
  .slide.animateIn.next section span {
    -webkit-transition-delay: 1.4s;
    transition-delay: 1.4s;
  }

  .slide.animateIn.previous section span strong,
  .slide.animateIn.next section span strong {
    -webkit-transition-delay: 1.5s;
    transition-delay: 1.5s;
  }

  .slide.animateOut h1 {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .slide.animateOut p {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .slide.animateOut section span {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  .slide.animateOut section span strong {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }
`;

const BannerComponent = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner-search {
    @media (max-width: 990px) {
      display: none;
    }
  }
`;

const BannerHeading = styled("h1")`
  font-family: ${themeGet("fontFamily.1", "sans-serif")};
  font-size: ${themeGet("fontSizes.6", "45")}px;
  font-weight: 700;
  color: ${themeGet("colors.darkBold", "#0D1136")};
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: ${themeGet("fontSizes.6", "45")}px;
  }
  @media (max-width: 990px) {
    font-size: ${themeGet("fontSizes.5", "30")}px;
  }
  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

const BannerSubHeading = styled("span")`
  font-family: ${themeGet("fontFamily.0", "sans-serif")};
  font-size: ${themeGet("fontSizes.3", "19")}px;
  font-weight: 400;
  color: ${themeGet("colors.darkRegular", "#77798C")};
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: ${themeGet("fontSizes.2", "15")}px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

export { BannerWrapper, BannerHeading, BannerSubHeading, BannerComponent };
