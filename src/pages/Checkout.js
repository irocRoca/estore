import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/checkout/Form";
import Item from "../components/checkout/Item";
import { globalContext } from "../context/global";
import { device } from "../helper/sizes";
import { checkoutCart, deleteItem } from "../services/fetch";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SubHeading = styled.h2`
  margin: 30px 0 30px 30px;
`;

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(globalContext);
  let navigate = useNavigate();

  const handleDelete = async (id) => {
    const res = await deleteItem(id);
    if (res.lineItems.length < 1) {
      setCartItems(res);
      navigate("/");
    }
  };

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    await checkoutCart();
    navigate("/orders");
  };

  return (
    <Container>
      <div style={{ flexGrow: 1 }}>
        <SubHeading>Shopping Cart</SubHeading>
        {(cartItems != null) & (cartItems?.lineItems.length > 0) ? (
          cartItems.lineItems.map((product) => (
            <Item
              product={product}
              handleDelete={handleDelete}
              key={product.item._id}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div style={{ flexGrow: 0.6 }}>
        <Form cartItems={cartItems} handleSubmit={handleSubmit} />
      </div>
    </Container>
  );
};

export default Checkout;
