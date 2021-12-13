import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToggleLink } from "../ToggleLink";

const Container = styled.div`
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
          <LinkBtn to="/">All</LinkBtn>
          {this.props.categories &&
            this.props.categories.map((category, index) => {
              return (
                <ToggleLink key={index} to={category.toLowerCase()}>
                  {category}
                </ToggleLink>
              );
            })}
        </NavWrapper>
      </Container>
    );
  }
}
