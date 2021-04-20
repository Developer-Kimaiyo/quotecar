import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #25292f;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;
  padding: 30px 60px;
  p {
    color: #fff;
    margin-bottom: 0;
    font-weight: 300;
  }
  a {
    color: #fff;
  }
  .call {
    text-align: center;
  }
  .call a {
    text-decoration: none;
    display: inline-block;
    margin-left: 0.5em;
    margin-right: 0.5em;
    text-align: center;
  }
  .call a span {
    display: block;
  }
  .call a span:first-of-type {
    text-transform: uppercase;
    font-size: 0.8em;
    line-height: 1em;
    color: #eeeeeb;
    font-weight: 300;
  }
  .call a span:last-of-type {
    font-weight: 700;
    font-size: 1.4em;
    letter-spacing: -0.04em;
    color: #eeeeeb;
    line-height: 1em;
    font-weight: 600;
  }
  @media print, screen and (min-width: 40em) {
    .call {
      font-size: 0.9rem;
      text-align: right;
    }
    .call a {
      text-align: right;
      margin-left: 1em;
      margin-right: 0;
    }
  }
  @media print, screen and (min-width: 40em) {
    footer {
      text-align: left;
    }
  }
`;

const Container = styled("div")`
  max-width: 1170px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
`;

export { FooterWrapper, Container };
