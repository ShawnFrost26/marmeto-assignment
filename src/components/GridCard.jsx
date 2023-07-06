import React from "react";
import { Card, CardContent } from "@mui/material";

const GridCard = ({ product, searchTerm }) => {
  const { product_image, product_title, product_badge, product_variants } =
    product;

  return (
    <Card>
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "251px",
            height: "376px",
          }}
        >
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
              style={{ width: "215px", height: "206px" }}
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
                return (
                  <div key={index} style={{ margin: "8px" }}>
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

export default GridCard;
