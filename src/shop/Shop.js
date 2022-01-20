import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { CartSummary } from "./CartSummary";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../PaginationControls";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  // const navigate = useNavigate();
  return (
    <WrappedComponent {...props} params={params} pathname={location.pathname} />
  );
};

const Container = styled.div`
  border: 3px solid orange;
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

const ProductPages = ProductPageConnector(PaginationControls);

class Shop extends Component {
  filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.category?.toLowerCase() === this.props.params.category
    );
  };
  render() {
    console.log("Shop => ", this.props);
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
            <ProductPages />
            <Routes>
              <Route
                path="all/*"
                element={
                  <ProductList {...this.props} products={this.props.products} />
                }
              />
              {this.props.products && (
                <Route
                  path={`${this.props.params.category}/*`}
                  element={
                    <ProductList
                      {...this.props}
                      products={this.filterProducts(this.props.products)}
                    />
                  }
                />
              )}
              {/* first page set to 1 */}
              <Route
                path={this.props.params.category}
                element={
                  <Navigate
                    to={`/shop/products/${this.props.params.category}/1`}
                  />
                }
              />
            </Routes>
          </ArticleWrapper>
        </Section>
      </Container>
    );
  }
}

export const withRouterShop = withRouter(Shop);
