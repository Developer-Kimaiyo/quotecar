import React, { FC, memo } from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 250px;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  border-radius: 4px;
  .spin {
    color: #549404;
  }
`;

export interface InLineLoaderProps {
  color?: string;
}

export const InLineLoader: FC<InLineLoaderProps> = memo(() => {
  return (
    <Container>
      <Spin size="large" className="spin" />
    </Container>
  );
});
