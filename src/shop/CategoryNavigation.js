import React, { Component } from 'react';
import styled from 'styled-components';
// import { withRouterToggleLink as ToggleLink } from '../ToggleLink';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  padding: 0 5px;
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NavLinkBtn = styled(NavLink).attrs({
  style: function ({ isActive }) {
    return { background: isActive ? 'skyblue' : '' };
  },
})`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #8f8f8f;
  border-radius: 5px;
  padding: 10px;
  color: black;
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
          <NavLinkBtn to='all'>All</NavLinkBtn>
          {this.props.categories &&
            this.props.categories.map((cat, idx) => {
              return (
                <NavLinkBtn key={idx} to={`${cat.toLowerCase()}/1`}>
                  {cat}
                </NavLinkBtn>
              );
            })}
        </NavWrapper>
      </Container>
    );
  }
}
