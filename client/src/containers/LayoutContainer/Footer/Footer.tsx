import React from "react";
import { Row, Col } from "antd";
import { FooterWrapper, Container } from "./Footer.style";

type FooterProps = {
  mobile1?: string;
  mobile2?: string;
  name: string;
};

const Footer: React.FC<FooterProps> = ({ name, mobile2, mobile1 }) => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col sm={24} md={12} className="privacy">
            <p>
              Copyright © 2019 {name}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </Col>
          <Col sm={24} md={12} className=" call">
            <a href="tel:1300668105">
              <span>Dealer hotline</span>
              <span>{mobile1}</span>
            </a>
            <a href="tel:1300660616">
              <span>Customer hotline</span>
              <span>{mobile2}</span>
            </a>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
