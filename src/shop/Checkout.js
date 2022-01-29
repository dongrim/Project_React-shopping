import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderComponent } from '../layout';
import { Link } from 'react-router-dom';

const Container = styled.div``;
const SectionWrapper = styled.div`
  padding: 20px;
  max-width: 60%;
  margin: auto;
`;
const Header = styled.h2`
  margin-bottom: 30px;
`;
const Title = styled.h4`
  text-transform: capitalize;
`;
const InputWrapper = styled.div`
  margin-bottom: 25px;
`;
const Input = styled.input.attrs(({ type }) => ({ type }))`
  width: 100%;
  line-height: 2.2;
  padding-left: 5px;
`;
const ButtonWrapper = styled.div`
  text-align: center;
`;
const LinkBtn = styled(Link)`
  margin-right: 8px;
  border: none;
  color: white;
  background: #5f5f5f;
  outline: 1px solid black;
  padding: 6px 10px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export class Checkout extends Component {
  checkoutFields = {
    name: 'text',
    email: 'email',
    address: 'text',
    city: 'text',
    'zip/postal code': 'number',
    country: 'text',
  };

  render() {
    return (
      <Container>
        <HeaderComponent />
        <SectionWrapper>
          <Header>Add a new address</Header>
          {Object.entries(this.checkoutFields).map((attr, idx) => (
            <InputWrapper key={idx}>
              <Title>{attr[0]}</Title>
              <Input type={attr[1]} />
            </InputWrapper>
          ))}
          <ButtonWrapper>
            {/* <Button onClick={this.handleReturn}>Return to Cart</Button>
            <Button onClick={this.handleSubmit}>Place Order</Button> */}
            <LinkBtn to='/shop/cart'>Return to Cart</LinkBtn>
            <LinkBtn to='/shop/thanks'>Place Order</LinkBtn>
          </ButtonWrapper>
        </SectionWrapper>
      </Container>
    );
  }
}
