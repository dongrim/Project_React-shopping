import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background: #6f6f6f;
  border-radius: 5px;
  padding: 10px;
  color: white;
  width: 100%;
  margin-bottom: 6px;
  &:hover {
    color: white;
    font-weight: 700;
  }
`;

// p.180 require supplimentation
export class ToggleLink extends Component {
  render() {
    return <LinkBtn to={this.props.to}>{this.props.children}</LinkBtn>;
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }
}
