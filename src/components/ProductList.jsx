import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListCard from "./ListCard";
import GridCard from "./GridCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093"
        );
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <SearchBar handleLayoutChange={handleLayoutChange} handleSearch={handleSearch} />
      <div
        style={{
          display: "flex",
          flexDirection: layout === "list" ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {products.map((product, index) =>
          layout === "list" ? (
            <ListCard key={index} product={product} searchTerm={searchTerm} />
          ) : (
            <GridCard key={index} product={product} searchTerm={searchTerm} />
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
