import React from "react";
import ProductDesc from "../components/Product/ProductDesc";
import { useParams } from "react-router-dom";

const Product = (props) => {
  let { id } = useParams();

  //Should fetch here and pass to component and all logic

  return (
    <>
      <ProductDesc id={id} />
    </>
  );
};

export default Product;
