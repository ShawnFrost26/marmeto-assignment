import React from "react";
import { Card, CardContent } from "@mui/material";

const ListCard = ({ product, searchTerm }) => {
  const { product_image, product_title, product_badge, product_variants } =
    product;

  return (
    <Card>
      <CardContent>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontWeight: "bold",
                width: "90px",
                backgroundColor: "darkseagreen",
                textAlign: "center",
                position: "absolute",
              }}
            >
              {product_badge}
            </div>
            <img
              src={product_image}
              alt={product_title}
              style={{ height: "185px", width: "185px" }}
            />
          </div>
          <div>
            <div>
              <h2>{product_title}</h2>
            </div>
            <div
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {product_variants.map((variant, index) => {
                const variantKey = Object.keys(variant)[0];
                const variantValue = variant[variantKey];
                const isHighlighted = searchTerm && variantValue.includes(searchTerm);
                return (
                  <div key={index} 
                  style={{ 
                    lineHeight: "45px",
                    backgroundColor: isHighlighted ? "darkseagreen" : "",

                    }}>
                    {variantValue}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListCard;
