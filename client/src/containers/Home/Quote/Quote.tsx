import React from "react";
import { QuoteWrapper, QuoteContainer } from "./Quote.style";
import { Row, Col } from "antd";
import { FaHourglassEnd } from "react-icons/fa";
import Form from "./Form";
type QuoteProps = {
  title?: string;
  subtitle?: string;
  content: any;
};

const Quote: React.FC<QuoteProps> = ({ content, title, subtitle }) => {
  return (
    <QuoteWrapper>
      <div className="quote" id="eid-EPC-Quote-Form-quote">
        <QuoteContainer>
          <Row>
            <Col sm={24} md={10} lg={10}>
              <h1 className="quote-heading">
                <strong>FAST, FREE,</strong> {title}
              </h1>
              <Row className="lockup">
                <Col sm={6} md={10} lg={8} className="part-a">
                  <strong>1</strong>
                  <div className="time">
                    <FaHourglassEnd /> <span>minute</span>
                  </div>
                </Col>
                <Col sm={18} md={14} lg={16} className="part-b">
                  <p className="quote-subheading">
                    <strong>{subtitle}</strong>
                  </p>
                </Col>
              </Row>
              <p className="font-light show-for-medium">{content}</p>
              <p className="font-light show-for-small-only text-center">
                <strong>Your price is guaranteed for 28 days!</strong>
              </p>
            </Col>
            <Col sm={24} md={14} lg={14}>
              <Form />
            </Col>
          </Row>
        </QuoteContainer>
      </div>
    </QuoteWrapper>
  );
};

export default Quote;
