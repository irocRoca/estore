import { useContext, useEffect } from "react";

import styled from "styled-components";
import { globalContext } from "../context/global";
import { deleteItem, getCart, updateQtyCart } from "../services/fetch";
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

const SubHeading = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-size: 18px;
  padding: 20px;
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
  const { cartOpen, setCartOpen, cartItems, setCartItems, user } =
    useContext(globalContext);

  const handleClose = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    if (user) {
      const getCartData = async () => {
        const res = await getCart();
        setCartItems(res);
      };
      getCartData();
    }
  }, [user, setCartItems]);

  const handleChangeQty = async (id, qty) => {
    if (qty >= 1) {
      const res = await updateQtyCart(id, qty);
      setCartItems(res);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteItem(id);
    console.log(res);
    setCartItems(res);
  };

  return (
    <Container isOpen={cartOpen}>
      <Close>
        <i className="fas fa-times" onClick={handleClose}></i>
      </Close>
      <Title>Cart</Title>
      <Wrapper>
        {cartItems.lineItems.length > 0 ? (
          cartItems.lineItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              handleChangeQty={handleChangeQty}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <SubHeading>No items currently in cart</SubHeading>
        )}
        {/* <CartItem />
        <CartItem /> */}
        {cartItems.lineItems.length > 0 ? (
          <>
            <Checkout>
              <p>
                <span>Subtotal:</span>{" "}
                {cartItems && `$${cartItems.orderTotal.toFixed(2)}`}
              </p>
              <p>
                <span>Tax:</span>{" "}
                {cartItems && `$${(cartItems.orderTotal * 0.07).toFixed(2)}`}
              </p>
              <p>
                <span>Total:</span>{" "}
                {cartItems &&
                  `$${(
                    cartItems.orderTotal +
                    cartItems.orderTotal * 0.07
                  ).toFixed(2)}`}
              </p>
            </Checkout>
            <Button>Checkout</Button>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
    </Container>
  );
};

export default Cart;
