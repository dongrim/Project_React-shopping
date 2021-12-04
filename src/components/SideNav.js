import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { Article } from "./Article.js";

const Container = styled.div`
  border: 1px solid blue;
  padding: 10px 25px;
  width: 400px;
  .category-selected {
    transform: scale(1.01, 1.01);
    background: gray;
    font-weight: 700;
    outline: 2px solid #48cae4;
    color: #48cae4;
  }
`;

const Category = styled.div`
  background: darkgray;
  color: white;
  border-radius: 5px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.01, 1.01);
    background: gray;
    font-weight: 700;
  }
`;
const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export function SideNav() {
  const [items, setItems] = useState({});
  const [categories, setCategories] = useState(["all"]);
  const myRef = useRef([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8010");
    const result = await res.data.products;
    setItems(result);
    for (let categoryName in result) {
      setCategories((preState) => [
        ...preState,
        categoryName.toLocaleLowerCase(),
      ]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // if (!items) return <div>Loading...</div>;
  return (
    <Container>
      {categories?.map((item, idx) => (
        <LinkWrapper to={item} key={idx}>
          <Category
            ref={(ele) => (myRef.current[idx] = ele)}
            onClick={() => {
              myRef.current.forEach((el) =>
                el.classList.remove("category-selected")
              );
              myRef.current[idx].classList.toggle("category-selected");
            }}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </Category>
        </LinkWrapper>
      ))}
      <Article foo={"korea"} />
    </Container>
  );
}
