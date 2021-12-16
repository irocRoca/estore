import React from "react";
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

export default function Login({ viewSwitch, handleModalClose }) {
  return (
    <Container>
      <Title>
        Login<i className="fas fa-times" onClick={handleModalClose}></i>
      </Title>
      <Wrapper>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button>Login</Button>
        <Subtext>
          Don't have an account yet? <span onClick={viewSwitch}>Sign up</span>
        </Subtext>
      </Wrapper>
    </Container>
  );
}
