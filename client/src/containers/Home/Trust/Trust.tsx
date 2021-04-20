import React from "react";
import { Row, Col } from "antd";
import { Container, SectionWrapper, MainTitle } from "./Trust.style";
type TrustProps = {
  content: any;
  title: string;
  subtitle: string;
};

const Trust: React.FC<TrustProps> = ({ content, title, subtitle }) => {
  return (
    <SectionWrapper>
      <div className="partners" id="eid-PrixCar-Partnerships-partners">
        <Container className="grid-container">
          <MainTitle>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </MainTitle>
          <Row className=" align-spaced align-middle logos">
            {content.map((item, index) => (
              <Col className="cell" sm={8} md={3} lg={3} key={index}>
                <img src={item.image} alt={item.alt} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </SectionWrapper>
  );
};

export default Trust;
