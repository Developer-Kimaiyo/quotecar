import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const MobileCarouselDropdown = styled.div`
  @media (min-width: 990px) {
    display: none;
  }
`;

const PageWrapper = styled.div`
  #content {
    height: 100%;
    padding: 100px 0px 60px;
  }
  #content:not(.hide-header) {
    margin-top: 69px;
  }
  #content > div {
    height: 100%;
    padding: 30px;
  }
  .container {
    height: 100%;
    margin: 0 auto;
    max-width: 1060px;
    padding: 0 10px 0 10px;
  }
  i {
    font-style: italic;
  }

  li {
    font-size: 16px;
  }
  .quote-results {
    background-color: #f7f7f7;
  }

  .quote-results .blue_banner {
    background-color: #b7271c;
    color: #fff;
    width: 100%;
    padding: 30px 0 30px 0;
  }

  .quote-results strong {
    font-size: 16px;
  }

  .quote-results .things_to_know {
    color: #888888;
    margin-left: 7px;
  }

  .quote-results .personalised_title {
    font-size: 34px;
    text-align: center !important;
  }
  .quote-results .prepared_by_title {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center !important;
    color: #666;
  }
  .quote-results .need_help {
    line-height: 1.3;
    font-size: 35px;
    font-weight: bold;
    color: #c60e00;
  }

  .quote-results .route_map {
    width: 535px;
    height: 380px;
    background-color: white;
    -webkit-box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);
    -moz-box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);
    box-shadow: 4px 4px 7px 0px rgba(50, 50, 50, 0.66);
  }
  .quote-results .route_map > div > div > div:first-child {
    cursor: default !important;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
  background-color: #f4f4f4;
`;

const MainContentArea = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #f7f7f7;
  padding-right: 0;
  transition: padding-right 0.35s ease-in-out;
`;

const SidebarSection = styled.div`
  background-color: #ffffff;
  width: 320px;

  @media (max-width: 1500px) {
    width: 320px;
  }

  @media (max-width: 1199px) {
    width: 280px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: calc(100% - 320px);
  height: auto;
  min-height: 100vh;
  padding: 30px 45px 50px;

  @media (max-width: 768px) {
    padding: 30px 7.5px 100px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1367px) and (min-width: 1200px) {
    padding: 15px 30px 50px;
  }

  @media (max-width: 1500px) {
    width: calc(100% - 320px);
  }

  @media (max-width: 1199px) {
    width: calc(100% - 280px);
  }

  @media (max-width: 990px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 15px;
    min-height: auto;
  }

  .offer-slider {
    padding: 0 0 30px 30px;
  }
`;

const OfferSection = styled.div`
  width: 100%;
  display: block;
  padding: 60px;
  background-color: #ffffff;
  position: relative;
  border-bottom: 1px solid ${themeGet("colors.borderColor", "#f1f1f1")};

  @media (max-width: 1199px) and (min-width: 991px) {
    padding: 20px 15px;
    .prevButton {
      left: 0;
    }

    .nextButton {
      right: 0;
    }
  }
  @media (max-width: 990px) {
    padding: 15px;

    .prevButton {
      left: 5px;
    }

    .nextButton {
      right: 5px;
    }
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #009e7f;
  padding: 0px 20px 20px;
  margin: 50px 10px 20px;
  border-bottom: 2px solid #009e7f;
  width: auto;
  display: inline-block;
`;

export const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
    margin-top: 15px;
  }
`;

const ProductsCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1650px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
  @media (max-width: 1300px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
  @media (max-width: 1199px) and (min-width: 900px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 899px) and (min-width: 769px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (max-width: 768px) {
    padding-left: 7.5px;
    padding-right: 7.5px;
    margin-bottom: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (max-width: 490px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export {
  PageWrapper,
  HeaderSection,
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  Heading,
  ProductsCol,
};
