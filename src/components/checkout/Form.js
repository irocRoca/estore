import { useReducer } from "react";
import styled from "styled-components";
import Input from "./Input";
//#1e2a66 ,, #6262cd
//#5e98aa
const Container = styled.form`
  margin: 40px;
  padding: 20px;
  background: #19264a;
  color: white;
  border-radius: 10px;
  position: sticky;
  top: 40px;
`;

const Title = styled.h2`
  margin: 15px 0 30px 0;
`;

const Wrapper = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  padding: 15px 0;
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background: #fc4545;
  margin-top: 20px;
  &:hover {
    background: #ab1d1d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    cursor: pointer;
  }
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
      margin-right: 10px;
      text-align: right;
    }
  }
`;

const initialState = {
  name: "",
  email: "",
  address: "",
  state: "",
  zipcode: "",
  card: "",
};

function reducer(state, action) {
  return { ...state, ...action };
}

const Form = ({ cartItems = null, handleSubmit }) => {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ [e.target.name]: e.target.value });
  };

  return (
    <Container onSubmit={(e) => handleSubmit(e, formState)}>
      <Wrapper>
        <Title> Payment Details</Title>
        <Input
          label="Full name"
          onChange={handleChange}
          value={formState.name}
          id="name"
        />
        <Input
          label="Email"
          onChange={handleChange}
          value={formState.email}
          id="email"
        />
        <Input
          label="Address"
          onChange={handleChange}
          value={formState.address}
          id="address"
        />
        <Input
          label="City"
          onChange={handleChange}
          value={formState.city}
          id="city"
        />
        <Input
          label="State"
          onChange={handleChange}
          value={formState.state}
          id="state"
        />
        <Input
          label="Zipcode"
          onChange={handleChange}
          value={formState.zipcode}
          id="zipcode"
        />
        <Input
          label="Card Number"
          onChange={handleChange}
          value={formState.card}
          id="card"
        />
        {cartItems && (
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
          </Checkout>
        )}
        <Button disabled={!cartItems} type="submit">
          Check Out
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Form;
