import React from "react";
import { Row, Col } from "antd";
import { Container, SectionWrapper, MainTitle } from "./SubSectionB.style";
type SubSectionBProps = {
  content: any;
  title: string;
  subtitle: string;
};

const SubSectionB: React.FC<SubSectionBProps> = ({
  content,
  title,
  subtitle,
}) => {
  return (
    <SectionWrapper>
      <Container>
        <MainTitle>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </MainTitle>
        <Row gutter={10} className=" column-info">
          {content.map((item, index) => (
            <Col span={6} key={index}>
              <img src={item.image} alt="Img" />
              <span />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                className="btn btn-default btn-sm"
                href="08_services-details.html"
              >
                {item.button}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default SubSectionB;
