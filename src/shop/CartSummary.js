import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkBtn = styled(Link)`
  user-select: none;
  pointer-events: ${(props) => (props.isdisabled ? "fill" : "none")};
  filter: ${(props) => (props.isdisabled ? "grayscale(0%)" : "grayscale(90%)")};
`;
const Cart = styled.div`
  display: flex;
  div:nth-of-type(1) {
    color: white;
    font-size: 0.9em;
    margin-right: 12px;
    display: none;
  }
  div:nth-of-type(2) {
    margin-right: 10px;
    transform: translateY(-3px);
    cursor: pointer;
    font-size: 1.3em;
    transform: scaleX(-1);
  }
  div:nth-of-type(3) {
    color: white;
    font-size: 0.6em;
    font-weight: 600;
    position: absolute;
    right: 9px;
    width: 18px;
    height: 18px;
    text-align: center;
    background: orange;
    border-radius: 50%;
    padding-bottom: 19px;
  }
`;

export class CartSummary extends Component {
  render() {
    return (
      <LinkBtn to="/shop/cart" isdisabled={this.props.cartItems}>
        <Cart>
          <div>Your Cart: (empty)</div>
          <div>🛒</div>
          <div>{this.props.cartItems || 0}</div>
        </Cart>
      </LinkBtn>
    );
  }
}
