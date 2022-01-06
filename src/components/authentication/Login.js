import { useState, useContext } from "react";
import styled from "styled-components";
import { globalContext } from "../../context/global";
import { loginUser } from "../../services/fetch";

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
  cursor: pointer;

  &:disabled {
    background: lightgrey;
  }
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

export default function Login({ viewSwitch, handleModalClose }) {
  const [errors, setErrors] = useState(null);
  const { setModelOpen, setUser } = useContext(globalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    const res = await loginUser({ email, password });
    if (res.error) {
      setErrors(res);
    } else {
      setUser(res);
      setModelOpen(false);
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    setErrors(null);
    const res = await loginUser({
      email: "test1@test.com",
      password: "123456",
    });
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
        Login<i className="fas fa-times" onClick={handleModalClose}></i>
      </Title>
      <Wrapper>
        <Input
          placeholder="Email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          disabled={password === "" || email === ""}
        >
          Login
        </Button>
        <Subtext>
          Don't have an account yet? <span onClick={viewSwitch}>Sign up</span>
        </Subtext>
        <Subtext>
          <span onClick={handleDemo}>Demo Account</span>
        </Subtext>
      </Wrapper>
    </Container>
  );
}
