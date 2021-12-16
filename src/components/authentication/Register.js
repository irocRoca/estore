import { useReducer } from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
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

  return (
    <Container>
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
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={(e) => dispatch({ [e.target.name]: e.target.value })}
        />
        <Button>Sign up</Button>
        <Subtext>
          Already have an account? <span onClick={viewSwitch}>Login</span>
        </Subtext>
      </Wrapper>
    </Container>
  );
}

export default Register;
