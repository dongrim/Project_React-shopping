import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartDetailsRows } from "./CartDetailsRows.js";

const Container = styled.div`
  background: whitesmoke;
  width: 800px;
  height: 1200px;
  margin: 50px auto;
`;
const Header = styled.h2`
  text-transform: capitalize;
  margin-bottom: 30px;
`;
const Section = styled.div`
  text-align: center;
`;
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 8px 0;
  div {
    /* border: 1px solid orange; */
    text-transform: capitalize;
    font-weight: 600;
  }
  .chBox {
    width: 20px;
    transform: scale(1.1);
  }
  .product {
    flex: 3;
  }
  .qty {
    flex: 1;
  }
  .price {
    flex: 2;
  }
  .subtotal {
    flex: 2;
  }
`;
const Total = styled.div`
  display: flex;
  padding-top: 10px;
  div {
    padding: 8px 0;
    font-weight: 600;
  }
  div:nth-child(1) {
    flex: 3;
    text-align: right;
  }
  div:nth-child(2) {
    flex: 1;
  }
`;
const Footer = styled.div`
  /* border: 1px solid red; */
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const LinkBtn = styled(Link)`
  margin-right: 15px;
  background: #5f5f5f;
  color: white;
  border-radius: 3px;
  padding: 3px 10px 4px;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: white;
    background: gray;
  }
`;

export class CartDetails extends Component {
  render() {
    return (
      <Container>
        <Header>shopping cart</Header>
        <Section>
          <HeaderSection>
            <input type="checkbox" className="chBox" />
            <div className="product">product</div>
            <div className="qty">qty</div>
            <div className="price">price</div>
            <div className="subtotal">subtotal</div>
          </HeaderSection>
          <CartDetailsRows {...this.props} />
          <Total>
            <div>Total: </div>
            <div>${this.props.cartPrice}</div>
          </Total>
        </Section>
        <Footer>
          <LinkBtn to="/shop">continue shopping</LinkBtn>
          <LinkBtn to="/shop/checkout">checkout</LinkBtn>
        </Footer>
      </Container>
    );
  }
}
