import React from "react";
import List from "./List";
import Form from "./Form";

function Product() {
  return (
    <>
      <div>
        <h2>List of products</h2>
        <List />
      </div>
      <div>
        <h2>Add a new product</h2>
        <Form />
      </div>
    </>
  );
}

export default Product;