import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductDisplay from "../components/Product/ProductDisplay";
import { useEffect, useContext, useState } from "react";
import { getProductImages, addToCart } from "../services/fetch";
import { globalContext } from "../context/global";
import styled from "styled-components";
import { device } from "../helper/sizes";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 15px;
  justify-content: center;

  @media ${device.laptop} {
  }
`;

const Title = styled.h2`
  text-align: left;
  margin: 60px 0 45px 25px;
  font-size: 28px;

  @media ${device.tablet} {
    font-size: 34px;
  }
`;

const Skeleton = styled.div`
  width: 170px;
  height: 200px;
  width: 100%;
  background: #eee;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @media ${device.tablet} {
    height: 325px;
    width: 275px;
  }
`;

const Home = () => {
  const [products, setProducts] = useState(null);
  const { user, setCartItems, setModelOpen } = useContext(globalContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductImages();
      setProducts(data);
    };
    getData();
  }, []);

  const handleAddToCart = async (e, id) => {
    if (!user) {
      // Open model
      setModelOpen(true);
    } else {
      const res = await addToCart(id);
      // Should return the new cart and update the cart
      setCartItems(res);
    }
  };

  return (
    <>
      <Hero />
      <Category />
      <Title>Most Popular</Title>
      <Wrapper>
        {products
          ? products.map((item) => (
              <ProductDisplay
                key={item._id}
                product={item}
                handleAddToCart={handleAddToCart}
              />
            ))
          : ["", "", "", ""].map((item, index) => <Skeleton key={index} />)}
      </Wrapper>
    </>
  );
};

export default Home;
