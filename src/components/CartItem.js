import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px;
`;

const Image = styled.img`
  height: 80px;
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
const Size = styled.p``;
const Delete = styled.p`
  margin-top: auto;
  color: #b1b1b1;
  font-size: 14px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

const Price = styled.h4`
  margin-left: 20px;
`;

const CartItem = ({ product }) => {
  return (
    <Container>
      <Image src={product.item.image} />
      <Wrapper>
        <Title>{product.item.title}</Title>
        {/* <Size>S</Size> */}
        <Delete>Delete</Delete>
      </Wrapper>
      <PriceWrapper>
        <Input value={product.qty} />
        <Price>${product.extPrice}</Price>
      </PriceWrapper>
    </Container>
  );
};

export default CartItem;
