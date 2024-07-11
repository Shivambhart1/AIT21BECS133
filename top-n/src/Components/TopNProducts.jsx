import React, { useState } from "react";
import axios from "axios";

function TopNProducts() {
  const [products, SetProducts] = useState({});
  const [topN, setTopN] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [company, setCompany] = useState("");
  const companyNames = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const Categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];

  const GetProducts = async () => {
    // const company = "Afford Medicals";
    const api = `http://20.244.56.144/test/companies/{company}/categories/{categoryName}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNjg5MzgxLCJpYXQiOjE3MjA2ODkwODEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEzZTg3M2ViLWJhZTEtNDU2My1hYzNiLTFiMDBkYzI1NGIzZSIsInN1YiI6InNoaXZhbWEuMjEuYmVjc0BhY2hhcnlhLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkIE1lZGljYWxzIiwiY2xpZW50SUQiOiIxM2U4NzNlYi1iYWUxLTQ1NjMtYWMzYi0xYjAwZGMyNTRiM2UiLCJjbGllbnRTZWNyZXQiOiJNV1pFV3hERWpWbUFFbVFFIiwib3duZXJOYW1lIjoiU2hpdmFtIiwib3duZXJFbWFpbCI6InNoaXZhbWEuMjEuYmVjc0BhY2hhcnlhLmFjLmluIiwicm9sbE5vIjoiQUlUMjFCRUNTMTMzIn0.9xH4GAVpdOLRpI4HnmeDuaLVyCOv4vLaXzibn0xFWQM";

    try {
      const res = await axios.get(api, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Request completed");
    }
  };

  return (
    <>
      <div className="main-container">
        <h1>Page for displaying all products</h1>
        <div className="product-container">
          <div className="product-div">
            <span>Product : </span>
            <div className="select-div">
              <select
                name=""
                id=""
                className="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                {companyNames.map((company, index) => (
                  <option key={index} value={company}>
                    {company}
                  </option>
                ))}
              </select>
              <select name="" id="" className="category">
                {Categories.map((category, index) => (
                  <option key={index} value={category} className="category">
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span>Top : </span>{" "}
              <input
                type="text"
                placeholder="n products"
                value={topN}
                onChange={(e) => setTopN(e.target.value)}
              />
            </div>

            <div className="price-div">
              <span>Price : </span>
              <input
                type="text"
                placeholder="min price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              to
              <input
                type="text"
                placeholder="max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
          <button className="btn" onClick={GetProducts}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default TopNProducts;
