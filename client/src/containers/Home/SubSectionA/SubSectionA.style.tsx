import styled from "styled-components";
const SectionWrapper = styled.div`
  .block-content {
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .inner-offset {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .info-texts {
    position: relative;
    font-family: "Montserrat", sans-serif;
  }
  .info-texts p {
    position: relative;
    z-index: 2;
    vertical-align: middle;
    display: table-cell;
    height: 150px;
    z-index: 4;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 24px;

}
  }
  .info-texts div > div > div {
    position: relative;
  }
  .info-texts div > div > div:before {
    content: "";
    display: block;
    position: absolute;
    border-bottom: 180px solid;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    z-index: 3;
    left: -65px;
    right: -65px;
    top: -15px;
  }
  .info-texts div > div > div:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    height: 15px;
    left: -60px;
    right: -60px;
    background: #fff;
    z-index: 2;
  }
  .info-texts div > div > div:first-child:before,
  .info-texts div > div > div:last-child:before {
    border-top: 180px solid;
    border-bottom: none;
    z-index: 5;
    top: 0px;
  }
  .info-texts div > div > div:first-child:before {
    right: -15px;
    left: 0px;
  }
  .info-texts div > div > div:last-child:before {
    left: -15px;
    right: 0px;
  }
  .info-texts div > div > div:first-child p,
  .info-texts div > div > div:last-child p {
    margin-top: 15px;
    z-index: 6;
  }
  .info-texts div > div > div:first-child p {
    text-align: right;
    padding-right: 20px;
  }
  .info-texts div > div > div:last-child p {
    text-align: left;
    padding-left: 40px;
  }
  .info-texts:before,
  .info-texts:after {
    content: "";
    display: block;
    position: absolute;
    width: 50%;
    top: 0px;
    height: 180px;
    z-index: 1;
  }
  .info-texts:before {
    left: 0;
  }
  .info-texts:after {
    left: 50%;
  }
  .info-texts div > div > div:before {
    border-bottom-color: #333;
  }
  .info-texts div > div > div:first-child:before {
    border-top-color: #549404;
  }
  .info-texts div > div > div:last-child:before {
    border-top-color: #a91605;
  }
  @media screen and (max-width: 768px) {
    .info-texts div > div > div:first-child p {
      background: #549404;
    }
    .info-texts div > div > div:first-child p {
      background: #549404;
    }
  }
`;

const Container = styled("div")`
  max-width: 1170px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
`;

export { SectionWrapper, Container };
