import React, { useState } from "react";

function Component() {
  const [products, SetProducts] = useState({});

  return (
    <div>
      <h1>Page for displaying all products</h1>
      {/* {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Component;
