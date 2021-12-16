import { useContext, useEffect } from "react";

import styled from "styled-components";
import { globalContext } from "../context/global";
import { getCart } from "../services/fetch";
import CartItem from "./CartItem";

const Container = styled.div`
  max-width: 400px;
  min-width: 320px;
  width: 100%;
  background: #e9e9e9;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  transition: all 500ms ease;
  ${(props) => !props.isOpen && "transform: translate(100%)"};
`;

const Title = styled.h2`
  text-align: center;
`;

const Close = styled.div`
  font-size: 24px;
  padding: 20px 20px 10px 0;
  text-align: right;

  & > i {
    padding: 10px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  margin: 30px;
  background: white;
`;

const Checkout = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 15px;

  & > p {
    padding-top: 10px;
    & > span {
      font-weight: 600;
    }
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  border: none;
  background: #5e98aa;
  color: white;
  text-transform: uppercase;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

const Cart = () => {
  const { cartOpen, setCartOpen, cartItems, setCartItems } =
    useContext(globalContext);

  const handleClose = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    const getCartData = async () => {
      const res = await getCart();
      console.log(res);
      setCartItems(res.lineItems);
    };
    getCartData();
  }, []);

  return (
    <Container isOpen={cartOpen}>
      <Close>
        <i className="fas fa-times" onClick={handleClose}></i>
      </Close>
      <Title>Cart</Title>
      <Wrapper>
        {cartItems ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <p>No items in cart</p>
        )}
        {/* <CartItem />
        <CartItem /> */}
        <Checkout>
          <p>
            <span>Subtotal:</span> $20.99
          </p>
          <p>
            <span>Tax:</span> $20.99
          </p>
          <p>
            <span>Total:</span> $20.99
          </p>
        </Checkout>
        <Button>Checkout</Button>
      </Wrapper>
    </Container>
  );
};

export default Cart;
