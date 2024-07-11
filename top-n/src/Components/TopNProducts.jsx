import React, { useState } from "react";
import axios from "axios";

function TopNProducts() {
  // const [products, SetProducts] = useState([]);
  const [topN, setTopN] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [company, setCompany] = useState("");
  const [fetchedData, SetFetchedData] = useState([{}]);
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
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    try {
      const res = await axios.get(api, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: accessToken,
        },
      });
      SetFetchedData(res.data);
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
        {fetchedData.products && (
          <div className="product-list">
            {fetchedData.products.map((product, index) => (
              <div key={index} className="product">
                <div className="product-name">{product.productName}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">{product.rating}</div>
                <div className="product-company">{product.discount}</div>
                <div className="product-availability">
                  {product.availability}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default TopNProducts;
