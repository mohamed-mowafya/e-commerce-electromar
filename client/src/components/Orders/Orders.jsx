import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders();
  });

  const renderHeader = (orderNo) => {
    return (
      <div className="flex flex-wrap align-items-center justify-content-between gap-2">
        <span className="text-xl text-900 font-bold">{orderNo}</span>
      </div>
    );
  };

  const getUserOrders = async () => {
    await axios
      .get("http://localhost:5000/orders", {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data);
      });
  };
  return (
    <>
      <h1 className="cart-title">Your order history</h1>
      <DataTable value={orders} tableStyle={{ minWidth: "60rem" }}>
        <Column field="orderNo" header="Order #"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="createdAt" header="Completion date"></Column>
      </DataTable>
    </>
  );
};

export default Orders;
