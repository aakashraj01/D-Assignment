import React from "react";
import { Features } from "../Features/Features";
import { Products } from "../Products/Products";
import { SloganMaker } from "../SloganMaker/SloganMaker";

export const Main = () => {
  return (
    <main>
      <SloganMaker />
      <Features />
      <Products />
    </main>
  );
};
