import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  border: 1px solid orange;
  padding: 10px 25px;
  width: 100%;
`;

export function Article({ foo }) {
  useEffect(() => {
    console.log(foo);
    console.log(location.pathname);
  }, [foo]);
  const location = useLocation();
  return <Container>article</Container>;
}
