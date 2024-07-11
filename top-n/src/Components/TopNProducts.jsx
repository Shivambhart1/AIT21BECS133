import React, { useState } from "react";
import axios from "axios";

function TopNProducts() {
  const [products, SetProducts] = useState({});
  const [topN, setTopN] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
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
    const companyName = "Afford Medicals";
    const api = `http://20.244.56.144/test/companies/:{companyName}/categories/:{categoryName}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    try {
      const res = await axios.get(api);
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
        <h1>Page for displaying specific products</h1>
        <div className="product-container">
          <div className="product-div">
            <span>Product : </span>
            <select name="" id="">
              {companyNames.map((company, index) => (
                <option key={index} value={company} className="company">
                  {company}
                </option>
              ))}
            </select>
            <select name="" id="">
              {Categories.map((category, index) => (
                <option key={index} value={category} className="category">
                  {category}
                </option>
              ))}
            </select>
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
          <button className="btn">Submit</button>
        </div>
      </div>
    </>
  );
}

export default TopNProducts;
