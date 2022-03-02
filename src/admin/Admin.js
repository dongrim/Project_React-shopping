import React, { Component } from "react";
import { HeaderComponent } from "../layout";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQlUrl } from "../data/Urls";
import { OrderConnector } from "../admin/OrdersConnector";

const client = new ApolloClient({
  uri: GraphQlUrl,
  cache: new InMemoryCache(),
});

class Admin extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HeaderComponent />
        <OrderConnector />
      </ApolloProvider>
    );
  }
}

export default Admin;
