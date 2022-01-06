import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { globalContext } from "../context/global";
import { deleteItem, getCart, updateQtyCart } from "../services/fetch";
import CartItem from "./CartItem";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Container = styled.div`
  max-width: 400px;
  min-width: 320px;
  width: 100%;
  background: #f9f9f9;
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
  & > svg {
    cursor: pointer;
    transition: color 100ms ease;
    &:hover {
      color: red;
    }
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
  max-height: 60%;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5e98aa;
    outline: 1px solid #5e98aa;
  }
`;

const Checkout = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  background: white;
  padding-top: 20px;

  & > p {
    padding-right: 15px;
    padding-top: 10px;
    & > span {
      font-weight: 600;
    }
  }
`;

const Button = styled.button`
  padding: 20px;
  border: none;
  background: #5e98aa;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
`;

const Cart = () => {
  let navigate = useNavigate();

  const { cartOpen, setCartOpen, cartItems, setCartItems, user } =
    useContext(globalContext);

  const handleClose = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = cartOpen ? "hidden" : "auto";
  }, [cartOpen]);

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
    setCartItems(res);
  };

  const handlePayment = () => {
    navigate("/checkout");
    handleClose();
  };

  return (
    <>
      {cartOpen && <Backdrop onClick={handleClose} />}
      <Container isOpen={cartOpen}>
        <Close>
          <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
        </Close>
        <Title>Cart</Title>
        {(cartItems != null) & (cartItems?.lineItems.length > 0) ? (
          <>
            <Wrapper>
              {cartItems.lineItems.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  handleChangeQty={handleChangeQty}
                  handleDelete={handleDelete}
                />
              ))}
            </Wrapper>
            <Checkout>
              <p>
                <span>Subtotal:</span>
                {cartItems && `$${cartItems.orderTotal.toFixed(2)}`}
              </p>
              <p>
                <span>Tax:</span>
                {cartItems && `$${(cartItems.orderTotal * 0.07).toFixed(2)}`}
              </p>
              <p>
                <span>Total:</span>
                {cartItems &&
                  `$${(
                    cartItems.orderTotal +
                    cartItems.orderTotal * 0.07
                  ).toFixed(2)}`}
              </p>
              <Button onClick={handlePayment}>Checkout</Button>
            </Checkout>
          </>
        ) : (
          <SubHeading>No items currently in cart</SubHeading>
        )}
      </Container>
    </>
  );
};

export default Cart;
