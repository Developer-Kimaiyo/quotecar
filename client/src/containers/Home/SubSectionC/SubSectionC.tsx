import React from "react";
import { Container, SectionWrapper } from "./SubSectionC.style";
import { Row, Col } from "antd";
import * as S from "./SubSectionC.style";
import GlideCarousel, {
  GlideSlide,
} from "../../../components/GlideCarousel/GlideCarousel";
import img1 from "../../../image/3.jpg";
const carouselOptions = {
  type: "carousel",
  perView: 2,
  gap: 20,
  autoplay: 3000,
  hoverpause: true,
  breakpoints: {
    1024: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
};
type SubSectionCProps = {
  content: any;
  title: string;
  button: string;
};
const SubSectionC: React.FC<SubSectionCProps> = ({
  content,
  title,
  button,
}) => {
  return (
    <SectionWrapper>
      <div
        className="block-content bg-image parallax"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <Container>
          <Row justify="space-between" align="middle">
            <Col lg={10} md={10} sm={10} xs={24}>
              <h1 className="wow fadeInLeft" data-wow-delay="0.3s">
                {title}
              </h1>
              <a
                className="btn btn-success wow fadeInRightBig"
                data-wow-delay="0.3s"
                href="07_services.html"
              >
                {button}
              </a>
            </Col>
            <Col lg={13} md={13} sm={13} xs={24}>
              <S.Slider>
                <div
                  className="row slick-carousel"
                  data-slick='{"slidesToShow": 2, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 2}}, {"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'
                >
                  <GlideCarousel
                    carouselSelector="explore_carousel"
                    options={carouselOptions}
                  >
                    {content.map((item, index) => (
                      <GlideSlide key={index}>
                        <S.SlideItem>
                          <S.TestimonialInner>
                            <S.TextBox>
                              <S.P>{item.text}</S.P>
                            </S.TextBox>
                            <S.User>
                              <S.Photo>
                                <S.Img
                                  className="media-object"
                                  src={item.image}
                                  alt="user"
                                />
                              </S.Photo>
                              <S.Details>
                                <S.H5>{item.name}</S.H5>
                              </S.Details>
                            </S.User>
                          </S.TestimonialInner>
                        </S.SlideItem>
                      </GlideSlide>
                    ))}
                  </GlideCarousel>
                </div>
              </S.Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionWrapper>
  );
};

export default SubSectionC;
