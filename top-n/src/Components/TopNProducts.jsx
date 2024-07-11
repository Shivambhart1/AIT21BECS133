import React, { useState } from "react";
import axios from "axios";
import { companyNames, Categories } from "../values";

function TopNProducts() {
  const [products, setProducts] = useState([]);
  const [topN, setTopN] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const handleGetProducts = async () => {
    if (!company || !category) {
      console.error("Company and Category must be selected");
      return;
    }

    const api = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    const headers = {
      companyName: "Afford Medicals",
      ownerName: "Shivam",
      rollNo: "AIT21BECS133",
      ownerEmail: "shivama.21.becs@acharya.ac.in",
      accessCode: "nxJaiY",
      Authorization: `${accessToken}`,
    };

    try {
      const res = await axios.get(api, { headers: headers });
      setFetchedData(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="main-container">
      <h1>Page for displaying all products</h1>
      <div className="product-container">
        <div className="product-div">
          <span>Product : </span>
          <div className="select-div">
            <select
              name="company"
              className="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            >
              <option value="">Select Company</option>
              {companyNames.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
            <select
              name="category"
              className="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {Categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span>Top : </span>{" "}
            <input
              type="number"
              placeholder="n products"
              value={topN}
              onChange={(e) => setTopN(e.target.value)}
            />
          </div>

          <div className="price-div">
            <span>Price : </span>
            <input
              type="number"
              placeholder="min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            to
            <input
              type="number"
              placeholder="max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <button className="btn" onClick={handleGetProducts}>
          Submit
        </button>
      </div>
      {fetchedData.products && (
        <div className="product-list">
          {fetchedData.products.map((product, index) => (
            <div key={index} className="product">
              <div className="product-name">{product.productName}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">{product.rating}</div>
              <div className="product-company">{product.discount}</div>
              <div className="product-availability">{product.availability}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopNProducts;
