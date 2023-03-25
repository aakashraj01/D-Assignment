import React from "react";
import { productsData } from "../../db";
import "./Products.css";

export const Products = () => {
  return (
    <>
      <section className="products-section app-max-width mx-auto py-3 pb-6">
        <h1 className="fs-4xl py-6">Try our other free products</h1>
        <div className="products-wrapper app-max-width">
          {productsData.map((product) => {
            const { id, img, label, description } = product;
            return (
              <div key={id} className="product">
                <img src={img} alt={label} />
                <div className="pt-2 pb-1 fw-500 fs-lg">{label}</div>
                <p className="light-font-color">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
