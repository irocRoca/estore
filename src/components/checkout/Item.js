import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

const Image = styled.img`
  max-height: 150px;
  width: 150px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const Close = styled.div`
  width: 100%;
  margin: auto 0;
  flex: 0.1;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
const Title = styled.h3``;
const Price = styled.p`
  margin-top: 15px;
  font-weight: 500;
`;
const Quantity = styled.p`
  margin-top: 15px;
`;

const Item = ({ handleDelete, product }) => {
  return (
    <Container>
      <Image src={product.item.image} />
      <Wrapper>
        <Title>{product.item.title}</Title>
        <Price>${product.extPrice}</Price>
        <Quantity>Qty: {product.qty}</Quantity>
      </Wrapper>
      <Close onClick={() => handleDelete}>
        <i className="fas fa-times"></i>
      </Close>
    </Container>
  );
};

export default Item;
