import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderComponent } from '../layout';
import { Link } from 'react-router-dom';

const Container = styled.div``;
const SectionWrapper = styled.div`
  // border: 1px solid blue;
  text-align: center;
  padding: 20px;
  max-width: 60%;
  margin: auto;
`;
const Article = styled.div`
  margin: 15px 0 30px;
`;
const LinkBtn = styled(Link)`
  border: none;
  color: white;
  background: #5f5f5f;
  outline: 1px solid black;
  padding: 6px 15px;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export class Thanks extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent />
        <SectionWrapper>
          <h1>Thanks!</h1>
          <Article>
            <p>
              (You've ordered 0<noscript>number of products ordered</noscript>{' '}
              items.)
            </p>
            <p>Thanks for placing your order.</p>
            <p>
              your order is #1<noscript>order id</noscript>
            </p>
            <p>We'll ship your goods as soon as possible.</p>
          </Article>
          <LinkBtn to='/shop'>Return to Store</LinkBtn>
        </SectionWrapper>
      </Container>
    );
  }
}
