import React, { Component } from "react";
import styled from "styled-components";
import { PaginationButtons } from "./PaginationButtons.js";

const Container = styled.div`
  /* border: 1px solid blue; */
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageOption = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  text-align: center;
  padding: 5px 0 8px;
  select {
    border-radius: 3px;
    text-align: center;
    font-size: 0.925rem;
    padding: 4px 0 5px;
    /* letter-spacing: 1.025px; */
    width: 200px;
    margin-left: 2px;
  }
`;

export class PaginationControls extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [10, 25, 50, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  handlePageSizeChange = (ev) => {
    this.props.setPageSize(Number(ev.target.value));
  };
  handleSortPropertyChange = (ev) => {
    this.props.setSortProperty(ev.target.value);
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <PaginationButtons {...this.props} />
          <PageOption>
            <select
              name="perPage"
              onChange={this.handlePageSizeChange}
              value={this.props.pageSize || this.pageSizes[0]}
            >
              {this.pageSizes.map((pageSize, idx) => (
                <option key={idx} value={pageSize}>
                  {pageSize} per page
                </option>
              ))}
            </select>
            <select
              name="sortOption"
              onChange={this.handleSortPropertyChange}
              value={this.props.sortKey || "#"}
            >
              <option value="#">Choose Sort Option</option>
              {this.sortKeys.map((sortKey, idx) => (
                <option key={idx} value={sortKey.toLowerCase()}>
                  Sort By {sortKey}
                </option>
              ))}
            </select>
          </PageOption>
        </Wrapper>
      </Container>
    );
  }
}
