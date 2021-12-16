import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalContext } from "../context/global";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Left = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;
const Right = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 20px;
`;
const Logo = styled.div`
  font-weight: 500;
  margin: 0;
  > a {
    font-size: 30px;
  }
`;
const Links = styled(Link)`
  padding: 0 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;

  > i {
    font-size: 18px;
  }

  &:hover {
    color: red;
  }
`;

const Button = styled.div`
  cursor: pointer;
  margin: 10px;
  font-weight: 500;
  padding: 10px;
  &:hover {
    color: red;
  }
`;

const Navbar = ({ setModelOpen }) => {
  const { setCartOpen } = useContext(globalContext);

  return (
    <Wrapper>
      <Left>
        <Logo>
          <Links to="/">Estore</Links>
        </Logo>
      </Left>
      <Right>
        <Button onClick={() => setModelOpen(true)}>Login</Button>
        <Button onClick={() => setCartOpen(true)}>
          <i className="fas fa-shopping-cart"></i>
        </Button>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
