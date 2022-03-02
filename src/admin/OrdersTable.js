import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { OrdersRow } from "./OrdersRow.js";

const Container = styled.div``;
const Header = styled.h4`
  background: gray;
  color: white;
  text-align: center;
  width: 100%;
  line-height: 1.8;
`;
const WarpperTable = styled.div`
  padding: 0 10px;
`;
const Table = styled.table`
  border: 1px solid orange;
  width: 100%;
  thead,
  tbody {
    /* border: 1px solid blue; */
  }
  th {
    border: 1px solid skyblue;
  }
`;

export class OrdersTable extends Component {
  render() {
    return (
      <Container>
        <Header>{this.props.totalSize} Orders</Header>

        {/* <PaginationControls keys={["ID", "Name"]}
        { ...this.props } /> */}

        {/* <Table className="table table-sm table-striped"> */}
        <WarpperTable>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total</th>
                <th>Shipped</th>
              </tr>
            </thead>
            <tbody>
              {this.props.orders?.map((order, idx) => (
                <OrdersRow
                  key={idx}
                  order={order}
                  toggleShipped={
                    () => console.log("clicked!")
                    // this.props.toggleShipped(order.id, !order.shipped)
                  }
                />
              ))}
            </tbody>
          </Table>
        </WarpperTable>
      </Container>
    );
  }
}

OrdersTable.propTypes = {
  totalSize: PropTypes.number,
};
