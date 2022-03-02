import { useState } from "react";
import { OrdersTable } from "./OrdersTable";
import { useQuery, gql } from "@apollo/client";
import { PaginationControls } from "../PaginationControls";

const handleSortToQueryField = (sort) => {
  switch (sort) {
    case "home":
      return "getAllOrders";
    case null:
      return "getAllOrders";
    case "id":
      return "getAllOrders";
    case "name":
      return "sortByName";
    case "price":
      return "sortByPrice";
    default:
      throw new Error("switch error");
  }
};

const querySelector = (sort) => {
  let field = handleSortToQueryField(sort);
  const GET_ORDERS = gql`
    query GetOrders {
      ${field} {
        id
        name
        email
        products {
          product {
            price
          }
          quantity
        }
        shipped
      }
    }
  `;
  return GET_ORDERS;
};

export const OrderConnector = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortKey] = useState(null);
  const { loading, error, data } = useQuery(querySelector(sortKey));
  const pageCount = Math.ceil(
    data?.[handleSortToQueryField(sortKey)]?.length / pageSize
  );
  const n = currentPage; // referred from ProductList.js
  const t = pageSize;

  return (
    <>
      <PaginationControls
        // sizes={[25, 50, 100]}
        keys={["Id", "Name", "Price"]}
        setPageSize={(val) => setPageSize(val)}
        setSortProperty={(val) => setSortKey(val)}
        pageSize={pageSize}
        sortKey={sortKey}
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={(val) => setCurrentPage(val)}
      />
      <OrdersTable
        totalSize={data?.getAllOrders?.length}
        orders={data?.[handleSortToQueryField(sortKey)]?.slice(
          t * (n - 1),
          t * n
        )}
      />
    </>
  );
};
