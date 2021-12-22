import styled from "styled-components";
import { device } from "../../helper/sizes";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

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

const ProductDisplay = ({ product, handleAddToCart }) => {
  let navigate = useNavigate();

  return (
    <Product url={product.image}>
      <Info>
        <Icon onClick={() => navigate(`/product/${product._id}`)}>
          <FontAwesomeIcon icon={faSearch} />
        </Icon>
        <Icon onClick={(e) => handleAddToCart(e, product._id)}>
          <FontAwesomeIcon icon={faCartPlus} />
        </Icon>
      </Info>
    </Product>
  );
};

export default ProductDisplay;
