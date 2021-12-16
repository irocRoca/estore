import styled from "styled-components";
import { device } from "../../helper/sizes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductImages } from "../../services/fetch";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

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

const Product = styled.div`
  width: 170px;
  height: 200px;
  background-image: url(${(props) => props.url});
  object-fit: cover;
  background-size: cover;
  background-position: center;
  margin: 15px auto;
  box-sizing: border-box;

  @media ${device.tablet} {
    height: 325px;
    width: 275px;
  }

  /* md 275px height 325px */
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 500ms ease;
  &:hover {
    background: rgb(0 0 0 / 17%);

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
  }
`;

const Icon = styled.div`
  width: 25px;
  height: 25px;
  display: none;
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  background: white;
  border-radius: 50%;
  color: black;
  cursor: pointer;
  transition: all 200ms ease;

  > i {
    color: black;
  }

  &:hover {
    background: lightgray;
  }
`;

const ProductDisplay = () => {
  const [products, setProducts] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getProductImages();
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <>
      <Title>Most Popular</Title>
      <Wrapper>
        {products &&
          products.map((item, index) => (
            <Product key={item._id} url={item.image}>
              <Info>
                <Icon onClick={() => navigate(`/product/${item._id}`)}>
                  <i className="fas fa-search"></i>
                </Icon>
                <Icon>
                  <i className="fas fa-cart-plus"></i>
                </Icon>
              </Info>
            </Product>
          ))}
      </Wrapper>
    </>
  );
};

export default ProductDisplay;
