import * as React from "react";
import styled from "@emotion/styled";

const Container = styled("h1")`
  margin: 0;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
`;

export const Header: React.FC<React.ReactNode> = () => (
  <Container>Things To Do</Container>
);
