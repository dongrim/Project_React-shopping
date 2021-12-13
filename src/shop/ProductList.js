import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid blue; */
`;
const WrapperProduct = styled.div`
  border: 1px solid #6f6f6f;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 6px;
`;
const Title = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  background: blanchedalmond;
  padding: 3px 5px;
`;
const Name = styled.span`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
  font-weight: 600;
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background: #4d4d4d;
    border-radius: 15px;
    padding: 0 10px;
    font-size: 0.9em;
    color: white;
    height: 75%;
    &::before {
      content: "$";
    }
    &::after {
      content: ".00";
    }
  }
`;
const Description = styled.div`
  padding: 6px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
  }
  .addBtn {
    text-transform: capitalize;
    border-radius: 7px;
    background: tan;
    color: white;
    font-size: 0.6em;
    font-weight: 600;
    padding: 3px 5px;
    user-select: none;
    cursor: pointer;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export class ProductList extends Component {
  render() {
    if (this.props.products === null || this.props.products.length === 0)
      return <h5>No Products</h5>;
    return (
      <Container>
        {this.props.products.map((product) => {
          return (
            <WrapperProduct key={product.id}>
              <Title>
                <Name>{product.name}</Name>
                <Price>
                  <span>{product.price}</span>
                </Price>
              </Title>
              <Description>
                <div className="text">{product.description}</div>
                <div
                  className="addBtn"
                  onClick={() => {
                    this.props.addToCart(product);
                  }}
                >
                  add to cart
                </div>
              </Description>
            </WrapperProduct>
          );
        })}
      </Container>
    );
  }
}
