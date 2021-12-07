import React, { Component } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

const Container = styled.div`
  border: 1px solid red;
`;
const Title = styled.h2`
  text-transform: uppercase;
  padding: 8px 7px;
  background: #3b3b3b;
  color: white;
  h2 {
    padding: 0;
    margin: 0;
  }
`;
const Section = styled.div`
  display: flex;
`;
const NavWrapper = styled.div`
  flex-basis: 25%;
`;
const ArticleWrapper = styled.div`
  flex-basis: 75%;
`;

class Shop extends Component {
  filterProducts = (products) => {
    return products.filter(
      (p) => p.category.toLowerCase() === this.props.params.category
    );
  };

  render() {
    return (
      <Container>
        <Title>sports store</Title>
        <Section>
          <NavWrapper>
            <CategoryNavigation categories={this.props.categories} />
          </NavWrapper>
          <ArticleWrapper>
            <Routes>
              <Route path="/" element={<div>Show All products</div>} />
              <Route
                path={this.props.params.category}
                element={
                  <ProductList
                    products={this.filterProducts(this.props.products)}
                  />
                }
              />
            </Routes>
          </ArticleWrapper>
        </Section>
      </Container>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.params.category !== this.props.params.category;
  }
}

export default withRouter(Shop);
