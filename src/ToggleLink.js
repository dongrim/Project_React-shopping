import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
  ${({ selected }) => selected && "background: skyblue"};
  &:hover {
    color: white;
    font-weight: 700;
  }
`;

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ToggleLink extends Component {
  render() {
    const currentURL =
      this.props.params.category === undefined
        ? "/"
        : this.props.params.category;
    const isActive = this.props.to === currentURL;

    return (
      <Container>
        <LinkBtn to={this.props.to} selected={isActive}>
          {this.props.children}
        </LinkBtn>
      </Container>
    );
  }
}

export const withRouterToggleLink = withRouter(ToggleLink);

// toggle background color in buttons of nav
/*
<Category
  ref={(ele) => (myRef.current[idx] = ele)}
  onClick={() => {
    myRef.current.forEach((el) =>
    el.classList.remove("category-selected")
    );
    myRef.current[idx].classList.toggle("category-selected");
  }}
  ></Category>
*/
/*
const Container = styled.div`
.category-selected {
    transform: scale(1.01, 1.01);
    background: gray;
    font-weight: 700;
    outline: 2px solid #48cae4;
    color: #48cae4;
  }
`;
const Category = styled.div`
  background: darkgray;
  color: white;
  border-radius: 5px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01, 1.01);
    background: gray;
    font-weight: 700;
  }
  `;
*/
