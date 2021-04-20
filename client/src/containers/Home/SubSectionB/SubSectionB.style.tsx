import styled from "styled-components";

const SectionWrapper = styled.div`
  .column-info {
    margin-top: 40px;
  }
  .column-info img {
    width: 100%;
    height: 11em;
  }
  .column-info > div > span {
    background-color:#f7f7f7
    display: block;
    float: right;
    margin-top: -20px;
    margin-right: -8px;
    position: relative;
    z-index: 2;
    height: 20px;
    width: 60px;
    -webkit-transform: skew(-30deg);
    -moz-transform: skew(-30deg);
    -o-transform: skew(-30deg);
  }
  .column-info h3 {
    color: #333;
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  .column-info P {
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 20px;
  }
  .column-info a.btn {
    margin-top: 25px;
    color: #666;
    font-weight: 400;
    padding: 10px 20px 8px 20px;
    border: 2px solid #549404;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 0px;
    line-height: 1.5;
    background-color: #fff;
  }
  .column-info .btn:before {
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    top: -1px;
    bottom: -1px;
    width: 4px;
    opacity: 1;
    transition: 0.4s;
    transition-timing-function: cubic-bezier(0.36, 0.99, 0.69, 1.2);
    z-index: 1;
    ackground-color: #a91605;
  }
`;

const Container = styled("div")`
  max-width: 1170px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
`;
const MainTitle = styled.div`
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 2.4em;
    line-height: 1;
    margin: 0;
    font-weight: 800;
    padding: 2em 0 0.25em;
    text-align: center;
    justify-content: center;
  }
  p {
    line-height: 26px;
    font-size: 16px;
    display: inline-block;
    position: relative;
    font-style: italic;
    text-align: center;
    color: #444;
  }
`;
export { SectionWrapper, Container, MainTitle };
