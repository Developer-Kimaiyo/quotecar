import styled from "styled-components";
import form from "../../../image/form-bg.jpg";
const QuoteWrapper = styled.div`
  .quote {
    margin: 1em 0 4em 0;
  }
  .quote .lockup {
    padding-top: 0.5em;
  }
  .quote .lockup .part-a {
    color: #549404;
  }
  .quote .lockup .part-a strong {
    font-size: 6.5em;
    font-weight: 400;
    display: inline-block;
    line-height: 1em;
  }
  .quote .lockup .part-a .time {
    display: inline-block;
    text-align: center;
  }
  .quote .lockup .part-a .time svg {
    font-size: 3.5em;
    line-height: 1em;
    vertical-align: top;
    margin: 0.1em -0.3em;
    display: block;
  }
  .quote .lockup .part-a .time span {
    text-transform: uppercase;
    display: block;
    font-size: 0.6em;
    line-height: 1em;
  }
  .quote .lockup .part-b {
    border-left: 1px #549404 solid;
    padding: 0.5em 1em;
  }
  .quote .lockup .part-b p {
    color: #549404;
    font-size: 1em;
    margin-top: 0.2em;
    font-weight: 600;
    margin-bottom: 0;
  }
  .quote p {
    color: #595958;
    font-size: 1em;
    margin-top: 1em;
  }
  .quote-form {
    margin-top: -120px;
    padding: 50px;
    background: url(${form}) no-repeat center center;
    background-size: cover;
  }
  .hgroup {
    margin-bottom: 50px;
  }
  .hgroup h1 {
    color: #549404;
    margin: 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.1;
    text-transform: uppercase;
  }
  .hgroup h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #888;
    line-height: 22px;
    letter-spacing: 3px;
    margin-top: 15px;
    text-transform: uppercase;
  }
  .form-group {
    position: relative;
  }
  .quote button.submit {
    display: block;
    text-transform: uppercase;
    padding-right: 2em;
    position: relative;
    text-align: center;
    width: 100%;
    height: 38px;
    margin-top: 1.3em;
    font-weight: bold;
    margin: 1.3em auto;
    background-color: #a91605;
    color: #fff;
    letter-spacing: 0.05em;
  }

  @media screen and (max-width: 39.99em) button.submit {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0 !important;
    padding-right: 0 !important;
    border: 1px solid #007acd !important;
  }
  @media screen and (max-width: 798px) .quote-form {
    margin-top: 40px;
  }
`;

const QuoteContainer = styled("div")`
  padding-right: 1rem;
  padding-left: 1rem;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
`;
const InputBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  margin-bottom: 15px;
  font-size: 14px;
  label {
    display: block;

    margin: 0;
    font-size: 0.875rem;
    line-height: 1.8;
    font-weight: 600;
    color: #555;
    line-height: 1.2;
    margin-bottom: 15px;
    display: flex;
    position: relative;
  }
  .ant-select-selection-item {
    font-size: 14px;
  }
  .ant-btn {
    border: none;
    background: #549404;
    color: #ffffff;
    text-transform: uppercase;
    box-sizing: border-box;
    font-weight: 800;
    font-size: 13px;
    cursor: cursor;
    height: 38px;
    margin-top: 32px;
  }
`;
export { QuoteWrapper, QuoteContainer, InputBoxWrapper };
