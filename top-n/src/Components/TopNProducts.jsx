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
        <div className="product-div">
          <div>
            <span>Company Name: </span>{" "}
            <input
              type="text"
              name=""
              id=""
              placeholder="AMZ, FLP, SNP, MYN, AZO"
            />
          </div>
          <div>
            <span>Product name: </span>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNProducts;
