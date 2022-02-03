import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { CategoryNavigation } from './CategoryNavigation';
import { ProductList } from './ProductList';
import { ProductPageConnector } from './ProductPageConnector';
import { PaginationControls } from '../PaginationControls';
import { HeaderComponent } from '../layout';

const Container = styled.div`
  // border: 3px solid orange;
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

const withRouter = WrappedComponent => props => {
  const params = useParams();
  const location = useLocation();
  return (
    <WrappedComponent {...props} params={params} pathname={location.pathname} />
  );
};

// #Connect redux of pagination to main component; Shop.js
const ProductPages = ProductPageConnector(PaginationControls);

class Shop extends Component {
  filterProducts = products => {
    const filteredProducts = products?.filter(
      product => product.category?.toLowerCase() === this.props.params.category
    );
    const len = filteredProducts?.length;
    return { filteredProducts, len };
  };
  render() {
    return (
      <Container>
        <HeaderComponent {...this.props} />
        <Section>
          <NavWrapper>
            <CategoryNavigation categories={this.props.categories} />
          </NavWrapper>
          <ArticleWrapper>
            <ProductPages
              lengthOfFiltered={this.filterProducts(this.props.products).len}
            />
            <Routes>
              <Route
                path='all/*'
                element={
                  <ProductList {...this.props} products={this.props.products} />
                }
              />
              {this.props.products && (
                <Route
                  // path='soccer/*'
                  path={`${this.props.params.category}/*`}
                  element={
                    <ProductList
                      {...this.props}
                      products={
                        this.filterProducts(this.props.products)
                          .filteredProducts
                      }
                    />
                  }
                />
              )}
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
