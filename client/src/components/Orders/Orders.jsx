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
        setOrders(res.data);
      });
  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <h5>Orders for {data.orderNo}</h5>
        <DataTable
          scrollable
          value={data.items}
          tableStyle={{ minWidth: "60rem" }}
        >
          <Column
            style={{ textAlign: "left" }}
            field="product.name"
            body={(rowData) => (
              <p style={{ color: "black", marginLeft: "0.7em" }}>
                {rowData.product.name}
              </p>
            )}
            header="Name"
          ></Column>
          <Column
            field="product.image.fileName"
            header="Image"
            body={(rowData) => (
              <img
                crossOrigin="anonymous"
                className="shadow-4 dt-image mt-2"
                src={`http://localhost:5000/file/${rowData.product.image.fileName}`}
              />
            )}
          ></Column>
          <Column
            field="product.price"
            body={(rowData) => `$${rowData.product.price}`}
            header="Price"
          ></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    );
  };
  return (
    <div className="dt-container">
      <h1 className="cart-title">Your order history</h1>
      <DataTable
        dataKey="_id"
        value={orders}
        expandedRows={expandedRows}
        rowExpansionTemplate={rowExpansionTemplate}
        onRowToggle={(e) => setExpandedRows(e.data)}
        scrollable
        scrollHeight="flex"
        tableStyle={{ minWidth: "100rem" }}
      >
        <Column expander={allowExpansion} style={{ width: "5rem" }} />
        <Column field="orderNo" header="Order #"></Column>
        <Column
          field="total"
          body={(rowData) => `$${rowData.total}`}
          header="Total price"
        ></Column>
        <Column
          field="createdAt"
          body={(rowData) =>
            `${rowData.createdAt ? rowData.createdAt.split("T")[0] : ""}`
          }
          header="Completion date"
        ></Column>
      </DataTable>
    </div>
  );
};

export default Orders;
