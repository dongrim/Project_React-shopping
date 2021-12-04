import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #535353;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fa-shopping-cart {
    font-size: 1.2em;
    color: white;
  }
`;
const Label = styled.span`
  color: white;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0;
`;
const Text = styled.span`
  color: white;
`;

export const Header = () => {
  return (
    <>
      <Container>
        <Label>sports store</Label>
        <Text>
          7 items $25.00
          <i className="fas fa-shopping-cart"></i>
        </Text>
      </Container>
    </>
  );
};
