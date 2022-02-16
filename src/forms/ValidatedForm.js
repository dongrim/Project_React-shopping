import React, { Component } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ValidationMessages } from "./ValidationMessages";
import { validationError } from "./validationError";

const Title = styled.h4`
  text-transform: capitalize;
  display: inline;
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
    background: #9f9f9f;
  }
`;
const SubmitBtn = styled.input.attrs({ type: "submit" })`
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
    background: #9f9f9f;
  }
`;

export class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationError: {},
    };
    this.formElements = {};
  }

  handleSubmit = () => {
    this.setState((state) => {
      const newState = { ...state, validationError: {} };
      Object.values(this.formElements).forEach(
        (elem) => {
          if (!elem.checkValidity()) {
            newState.validationError[elem.name] = GetMessages(elem);
          }
          return newState;
        },
        () => {
          if (Object.key(this.state.validationError).length === 0) {
            const data = Object.assign(
              ...Object.entries(this.formElements).map((e) => ({
                [e[0]]: e[1].value,
              }))
            );
            this.props.submitCallback(data);
          }
        }
      );
    });
  };

  renderElement = (ele, idx) => {
    const name = ele[0];
    const type = ele[1];
    return (
      <InputWrapper key={idx}>
        <Title>{name}</Title>
        <ValidationMessages />
        <Input
          type={type}
          name={name}
          // onBlur={() => {}}
          required={true}
        />
      </InputWrapper>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.submitCallback}>
        {Object.entries(this.props.formModel).map((ele, idx) =>
          this.renderElement(ele, idx)
        )}
        <ButtonWrapper>
          <LinkBtn to="/shop/cart">{this.props.cancelText}</LinkBtn>
          <SubmitBtn value={this.props.submitText} />
        </ButtonWrapper>
      </form>
    );
  }
}
