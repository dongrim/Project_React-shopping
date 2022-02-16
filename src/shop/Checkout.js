import React, { Component } from "react";
import styled from "styled-components";
import { HeaderComponent } from "../layout";
import { Link, useNavigate } from "react-router-dom";
import { ValidatedForm } from "../forms/ValidatedForm";

const Container = styled.div``;
const SectionWrapper = styled.div`
  padding: 20px;
  max-width: 60%;
  margin: auto;
`;
const Header = styled.h2`
  margin-bottom: 30px;
`;

export class Checkout extends Component {
  defaultAttrs = {
    type: "text",
    require: true,
  };
  formModel = {
    name: "text",
    email: "email",
    address: "text",
    city: "text",
    "zip/postal code": "number",
    country: "text",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const len = this.props.cart.length;
    const products = [];
    for (let i = 0; i < len; i++) {
      let dump = {
        quentity: this.props.cart[i].quantity,
        product_id: this.props.cart[i].product.id,
      };
      products.push(dump);
    }
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: event.target.address.value,
      city: event.target.city.value,
      zip: event.target["zip/postal code"].value,
      country: event.target.country.value,
      products,
    };
    this.props.placeOrder(order);
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <HeaderComponent />
        <SectionWrapper>
          <Header>Add a new address</Header>
          <ValidatedForm
            formModel={this.formModel}
            submitCallback={this.handleSubmit}
            submitText="Place Order"
            cancelText="Return to Cart"
          />
        </SectionWrapper>
      </Container>
    );
  }
}
