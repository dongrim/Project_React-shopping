import React, { Component } from "react";

export class OrdersRow extends Component {
  calcTotal = (products) => {
    const amount = products.reduce((total, value) => {
      total += value.quantity * value.product.price;
      return total;
    }, 0);
    // return amount;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  getShipping = (order) =>
    order.shipped ? (
      <i className="fa fa-shipping-fast text-success" />
    ) : (
      <i className="fa fa-exclamation-circle text-danger" />
    );

  render = () => (
    <tr>
      <td>{this.props.order.id}</td>
      <td>{this.props.order.name}</td>
      <td>{this.props.order.email}</td>
      <td className="text-right">
        {this.calcTotal(this.props.order.products)}
      </td>
      <td>
        <button onClick={this.props.toggleShipped}>
          {this.getShipping(this.props.order)}
          <span>{this.props.order.shipped ? " Shipped" : " Pending"}</span>
        </button>
      </td>
    </tr>
  );
}
