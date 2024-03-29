import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    product: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 1,
          productName: "produto teste 1",
          incomeQuantity: 50,
          outcomeQuantity: 10,
          balanceQuantity: 40,
        },
        {
          id: 2,
          productName: "produto teste 2",
          incomeQuantity: 30,
          outcomeQuantity: 10,
          balanceQuantity: 20,
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/products", () => {
      return this.schema.all("product");
    });

    this.post("/products", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("product", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
