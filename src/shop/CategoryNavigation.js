import React, { Component } from "react";
import styled from "styled-components";
import { withRouterToggleLink as ToggleLink } from "../ToggleLink";

const Container = styled.div`
  padding: 0 5px;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export class CategoryNavigation extends Component {
  render() {
    return (
      <Container>
        <NavWrapper>
          <ToggleLink to="all" exact={false}>
            All
          </ToggleLink>
          {this.props.categories &&
            this.props.categories.map((cat, idx) => {
              return (
                <ToggleLink key={idx} to={cat.toLowerCase()}>
                  {cat}
                </ToggleLink>
              );
            })}
        </NavWrapper>
      </Container>
    );
  }
}
