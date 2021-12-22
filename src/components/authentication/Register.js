import { useReducer, useState, useContext } from "react";
import styled from "styled-components";
import { globalContext } from "../../context/global";
import { registerUser } from "../../services/fetch";

const Container = styled.div`
  margin: 40px;
`;

const Title = styled.h3`
  display: flex;
  color: #444;

  & > i {
    margin-left: auto;
    cursor: pointer;
  }
`;

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
`;
const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
  outline: none;

  &::placeholder {
    color: #444;
  }
`;
const Button = styled.button`
  background: #5e98aa;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 0;
  text-transform: uppercase;
`;
const Subtext = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #999;
  text-align: center;

  & > span {
    color: #7878f5;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Message = styled.div`
  background: rgb(253, 237, 237);
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  color: rgb(95, 33, 32);

  & > p {
    font-size: 12px;
    line-height: 16px;
  }
`;

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function reducer(state, action) {
  return { ...state, ...action };
}

function Register({ viewSwitch, handleModalClose }) {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState(null);
  const { setModelOpen, setUser } = useContext(globalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    const res = await registerUser(formState);
    if (res.error) {
      setErrors(res);
    } else {
      setUser(res);
      setModelOpen(false);
    }
  };

  return (
    <Container>
      {errors && (
        <Message>
          <h4>Error</h4>
          {Object.values(errors).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Message>
      )}
      <Title>
        Register <i className="fas fa-times" onClick={handleModalClose}></i>
      </Title>
      <Wrapper>
        <Input
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="Password"
          name="password"
          value={formState.password}
          type="password"
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formState.confirmPassword}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Button onClick={handleSubmit}>Sign up</Button>
        <Subtext>
          Already have an account? <span onClick={viewSwitch}>Login</span>
        </Subtext>
      </Wrapper>
    </Container>
  );
}

export default Register;
