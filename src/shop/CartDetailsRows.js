import React, { Component } from "react";
import styled from "styled-components";

const WrapperItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    border-bottom: 1px solid #a9a9a9;
    text-transform: capitalize;
    padding: 6px 0;
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
    select {
      width: 60%;
      font-size: 0.7em;
    }
  }
  .price {
    flex: 2;
  }
  .subtotal {
    flex: 2;
  }
`;

export class CartDetailsRows extends Component {
  render() {
    if (!this.props.cart) {
      return <div>Cart is empty</div>;
    }
    return this.props.cart.map((item) => (
      <WrapperItems key={item.product.id}>
        <input type="checkbox" className="chBox" />
        <div className="product">{item.product.name}</div>
        <div className="qty">
          <select
            defaultValue={item.quantity}
            onChange={(e) => {
              // remove item from the cart
              if (e.target.value === "0") {
                this.props.removeFromCart(item.product);
              } else {
                this.props.updateCartQuantity(item.product, e.target.value);
              }
            }}
          >
            <option value={0}>0 (Delete)</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={null}>10+</option>
          </select>
        </div>
        <div className="price">${item.product.price}</div>
        <div className="subtotal">{item.quantity * item.product.price}</div>
      </WrapperItems>
    ));
  }
}
