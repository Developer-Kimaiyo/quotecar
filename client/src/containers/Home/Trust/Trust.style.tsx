import styled from "styled-components";

const SectionWrapper = styled.div`
  background-color: #fff;
  margin-top: 30px;
  .partners {
    text-align: center;
    margin: 1em 0 4em 0;
  }
  .intro {
    padding-bottom: 1em;
    text-align: center;
  }
  .intro h3 {
    color: #007acd;
    margin-top: 0.7em;
  }
  .partners img {
    display: block;
    height: auto;
    padding: 0.3em 0.3em;
    max-height: 6em;
    margin: 0 auto;
    vertical-align: middle;
    max-width: 8em;
  }
`;

const Container = styled("div")`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const MainTitle = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 2.4em;
    line-height: 1;
    margin: 0;
    font-weight: 600;
    padding: 1em 0 0.25em;
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
