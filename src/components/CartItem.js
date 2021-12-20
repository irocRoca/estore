import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
`;

const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  text-transform: capitalize;
  margin-bottom: 10px;
`;
const Delete = styled.p`
  margin-top: auto;
  color: #b1b1b1;
  font-size: 14px;
  width: fit-content;
  cursor: pointer;
  transition: all 100ms ease;
  &:hover {
    border-bottom: 1px solid #b1b1b1;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

const Input = styled.input`
  min-width: 20px;
  max-width: 35px;
  height: 20px;
  text-align: center;
`;

const Price = styled.h4`
  margin-left: 20px;
`;

const CartItem = ({ product, handleChangeQty, handleDelete }) => {
  const [amount, setAmount] = useState(product.qty);

  const handleChange = (e) => {
    setAmount(e.target.value);
    handleChangeQty(product._id, e.target.value);
  };

  useEffect(() => {
    setAmount(product.qty);
  }, [product.qty]);

  return (
    <Container>
      <Image src={product.item.image} />
      <Wrapper>
        <Title>{product.item.title}</Title>
        {/* <Size>S</Size> */}
        <Delete onClick={() => handleDelete(product.item._id)}>Delete</Delete>
      </Wrapper>
      <PriceWrapper>
        <Input value={amount} onChange={handleChange} />
        <Price>${product.extPrice.toFixed(2)}</Price>
      </PriceWrapper>
    </Container>
  );
};

export default CartItem;
