import styled from "styled-components";
export const NoResultWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flexdirection: column;
  alignitems: center;
  justifycontent: center;
  padding: 50px 20px;
`;

export const NoResultMsg = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #161f6a;
  margin: 0 0 15px;
`;

export const ImageWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;
