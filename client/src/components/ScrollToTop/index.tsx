import React from "react";
import { BackTop } from "antd";
import styled from "styled-components";
const Up = styled.div`
  .back-top {
    bottom: 35px;
    position: fixed;
    right: 33px;
    z-index: 1;
  }
  .back-top a {
    border-radius: 50%;
    color: #ffffff;
    display: block;
    font-size: 19px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    vertical-align: top;
    width: 40px;
    background: #549404none repeat scroll 0 0;
    fill: #549404;
  }
  .back-top a:hover,
  .back-top a:focus {
    color: #fff;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Input = () => (
  <BackTop>
    <Up>
      <div id="back-top" className="back-top">
        <a href="#top">
          <i className="fa fa-angle-up" aria-hidden="true" />
        </a>
      </div>
    </Up>
  </BackTop>
);

export default Input;
