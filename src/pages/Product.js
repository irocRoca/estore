import React from "react";
import ProductDesc from "../components/Product/ProductDesc";
import { useParams } from "react-router-dom";

const Product = (props) => {
  let { id } = useParams();

  return (
    <>
      <ProductDesc id={id} />
    </>
  );
};

export default Product;
