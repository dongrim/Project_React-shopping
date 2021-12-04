import React from "react";
import { Header } from "./Header.js";
import { SideNav } from "./SideNav.js";
import { Article } from "./Article.js";
import styled from "styled-components";
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import coin from "./data.js";
console.log(coin.buy("bitcoin", 1));
console.log(coin.buy("dogecoin", 2));
coin.buy("ethereum", 2);

const BodyWrapper = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  /* height: 100%; */
`;

const App = () => {
  return (
    <Router>
      <Header />
      <BodyWrapper>
        <SideNav />
        <Article />
      </BodyWrapper>
    </Router>
  );
};

export default App;
