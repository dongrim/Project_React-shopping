import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 15px;
  display: inline;
`;
const Message = styled.span`
  color: red;
  text-transform: capitalize;
`;

export class ValidationMessages extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Message> value required</Message>;
      </Container>
    );
  }
}
