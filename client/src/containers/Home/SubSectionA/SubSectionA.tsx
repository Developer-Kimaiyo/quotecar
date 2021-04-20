import React from "react";
import { Row, Col } from "antd";
import { Container, SectionWrapper } from "./SubSectionA.style";
type SubSectionAProps = {
  content: any;
};

const SubSectionA: React.FC<SubSectionAProps> = ({ content }) => {
  return (
    <SectionWrapper>
      <div className="block-content inner-offset">
        <div className="info-texts">
          <Container>
            <Row>
              {content.map((item, index) => (
                <Col sm={8} md={8} lg={8} key={index}>
                  <p className="info-text1">{item.title}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SubSectionA;
