import React, { Component } from "react";

export class validationError extends Component {
  render() {
    if (this.props.errors) {
      return this.props.errors.map((err, idx) => <h6 key={idx}>{err}</h6>);
    }
    return null;
  }
}
