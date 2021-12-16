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

const CartItem = () => {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      <Wrapper>
        <Title>jean style dress</Title>
        <Size>S</Size>
        <Delete>Delete</Delete>
      </Wrapper>
      <PriceWrapper>
        <Input value={1} />
        <Price>$19.99</Price>
      </PriceWrapper>
    </Container>
  );
};

export default CartItem;
