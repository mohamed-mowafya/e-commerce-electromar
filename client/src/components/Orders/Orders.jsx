import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import "primeflex/primeflex.css";
import "./orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);

  useEffect(() => {
    getUserOrders();
  }, []);

  const allowExpansion = (rowData) => {
    return rowData.items.length > 0;
  };

  const getUserOrders = async () => {
    await axios
      .get("http://localhost:5000/orders", {
        withCredentials: true,
      })
      .then((res) => {
        debugger;
        setOrders(res.data);
      });
  };
  return (
    <>
      <h1 className="cart-title">Your order history</h1>
      <DataTable
        dataKey="id"
        value={orders}
        expandedRows={expandedRows}
        tableStyle={{ minWidth: "60rem" }}
      >
        <Column expander={allowExpansion} style={{ width: "5rem" }} />
        <Column field="orderNo" header="Order #"></Column>
        <Column field="total" header="Total price"></Column>
        <Column field="createdAt" header="Completion date"></Column>
      </DataTable>
    </>
  );
};

export default Orders;
