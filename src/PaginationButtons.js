import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid blue; */
`;
const Pagination = styled.ul`
  display: flex;
  text-align: center;
  margin: 0;
  padding-top: 17px;
  .prevBtn,
  .nextBtn {
    width: 130px;
  }
  .dots {
    user-select: none;
    width: 25px;
    background: none;
  }
  .dots:hover {
    background: none;
    outline: none;
  }
  .selected {
    background: white;
    outline: 1px solid orange;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`;
const Li = styled.li`
  border-radius: 3px;
  list-style: none;
  width: 42px;
  padding: 4px;
  margin-right: 7px;
  color: black;
  /* selected will be decided by query string of url */
  background: ${({ selected }) => (selected ? "white" : "#cfcfcf")};
  outline: ${({ selected }) => (selected ? "1px solid orange" : "none")};
  &:hover {
    outline: 1px solid black;
    background: #bfbfbf;
  }
`;

export class PaginationButtons extends Component {
  getPageNumbers = () => {
    // console.log(this.props);
    // # issue to solve min and max value of pagination
    const n = this.props.currentPage;
    if (this.props.currentPage < 5) {
      return [1, 2, 3, 4, 5];
    } else {
      if (n + 1 === this.props.pageCount) {
        return [n - 3, n - 2, n - 1, n, n + 1];
      }
      if (n === this.props.pageCount) {
        return [n - 4, n - 3, n - 2, n - 1, n];
      } else {
        return [n - 2, n - 1, n, n + 1, n + 2];
      }
    }
  };

  render() {
    const current = Number(this.props.currentPage);
    const pageCount = Number(this.props.pageCount);
    const navigate = this.props.navigateToPage;

    // console.log("PaginationButtons =>", this.props);
    return (
      <Container>
        <Pagination>
          <Li
            className={`prevBtn ${current === 1 ? "disabled" : ""}`}
            onClick={() => navigate(current - 1)}
          >
            ← Previous
          </Li>
          {current > 4 && (
            <>
              <Li onClick={() => navigate(1)}>1</Li>
              <Li className="dots">···</Li>
            </>
          )}
          {this.getPageNumbers().map((pageNumber, idx) => (
            <Li
              key={idx}
              className={`pageBtn ${
                Number(pageNumber) === current ? "selected" : ""
              }`}
              onClick={() => navigate(pageNumber)}
            >
              {pageNumber}
            </Li>
          ))}
          {current < pageCount - 2 && (
            <>
              <Li className="dots">···</Li>
              <Li onClick={() => navigate(pageCount)}>{pageCount}</Li>
            </>
          )}
          <Li
            className={`nextBtn ${current === pageCount ? "disabled" : ""}`}
            onClick={() => navigate(current + 1)}
          >
            Next &nbsp;&nbsp; →
          </Li>
        </Pagination>
      </Container>
    );
  }
}
