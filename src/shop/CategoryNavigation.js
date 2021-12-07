import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid blue; */
  padding: 0 5px;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #6f6f6f;
  border-radius: 5px;
  padding: 10px;
  color: white;
  width: 100%;
  margin-bottom: 6px;
  &:hover {
    color: white;
    font-weight: 700;
  }
`;

export class CategoryNavigation extends Component {
  render() {
    return (
      <Container>
        <NavWrapper>
          {this.props.categories.map((category) => {
            return <LinkBtn to={category.toLowerCase()}>{category}</LinkBtn>;
          })}
        </NavWrapper>
      </Container>
    );
  }
}
