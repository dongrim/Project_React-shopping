import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { CartSummary } from "./CartSummary.js";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

const Container = styled.div`
  border: 1px solid red;
`;
const Header = styled.div`
  padding: 8px 7px;
  background: #3b3b3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .title {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
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
      (product) =>
        product.category?.toLowerCase() === this.props.params.category
    );
  };
  render() {
    return (
      <Container>
        <Header>
          <h4 className="title">
            <a href="/">sports store</a>
          </h4>
          <CartSummary {...this.props} />
        </Header>
        <Section>
          <NavWrapper>
            <CategoryNavigation categories={this.props.categories} />
          </NavWrapper>
          <ArticleWrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList {...this.props} products={this.props.products} />
                }
              />
              {this.props.products && (
                <Route
                  path={this.props.params.category}
                  element={
                    <ProductList
                      {...this.props}
                      products={this.filterProducts(this.props.products)}
                    />
                  }
                />
              )}
            </Routes>
          </ArticleWrapper>
        </Section>
      </Container>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("(@shouldComponentUpdate>this.props)", this.props);
    console.log("(nextProps)", nextProps);
    console.log("(nextState)", nextState);
    return true;
    // return nextProps.params.category !== this.props.params.category;
  }
  componentDidMount() {
    console.log("(@componentDidMount>this.props)", this.props);
  }
}

export const withRouterShop = withRouter(Shop);
