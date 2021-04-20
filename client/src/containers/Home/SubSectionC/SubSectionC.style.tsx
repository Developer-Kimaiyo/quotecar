import styled from "styled-components";

const SectionWrapper = styled.div`
  .block-content {
    margin-top: 80px;
    margin-bottom: 0;
  }
  .bg-image {
    background-attachment: fixed !important;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    color: #666;
  }
  .parallax {
    padding: 100px 0;
  }
  .bg-image h1 {
    margin-top: 0px;
    color: #fff;
  }

  .parallax h1 {
    margin-bottom: 50px;
  }
  .btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    position: relative;
    font-size: 12px;
    padding: 15px 30px;
    border: none;
    text-transform: uppercase;
    border-radius: 0px;
    background-color: #549404;
    color: #fff;
  }
`;

const Container = styled("div")`
  max-width: 1170px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
`;

export const Maintitle = styled.div`
  margin-bottom: 0;
  text-align: left;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const Slider = styled.div`
  position: relative;
`;

export const Detail = styled.div`
  align-item: center;
`;

export const SlideItem = styled.div`
  padding: 0 15px !important;
`;
export const TestimonialInner = styled.div`
  max-width: 400px;
  margin: auto;
`;
export const TextBox = styled.div`
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 0;
  border: 10px solid rgba(238, 238, 238, 0.2);
  position: relative;
  background: rgba(0, 0, 0, 0.36);
  overflow: scroll;
  max-height: 250px;
  @media only screen and (max-width: 480px) {
    margin-top: 15px;
  }
`;
export const Rating = styled.div`
  color: orange;
  font-size: 15px;
`;
export const User = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 40px;
`;
export const Photo = styled.div`
  width: 50px;
  left: 0;
  height: 50px;
  position: absolute;
  top: 0;
`;
export const Img = styled.img`
  width: 100%;
  height: 100% !important;
  border-radius: 5px;
`;
export const Details = styled.div`
  margin: 0 0 0 75px;
`;
export const H5 = styled.h5`
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  opacity: 0.9;
  color: #fff;
`;

export const Pp = styled.p`
  margin-bottom: 0;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  opacity: 1;
`;
export const Span = styled.span`
  color: #fff;
  font-weight: 400;
  opacity: 0.9;
`;

export const P = styled.p`
  color: #fff;
  opacity: 0.9;
  margin-bottom: 20px;
`;

export { SectionWrapper, Container };
