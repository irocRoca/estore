import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalContext } from "../context/global";
import { logoutUser } from "../services/fetch";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #ebebeb;
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
  color: #535461;
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
  color: #535461;
  text-transform: capitalize;
  &:hover {
    border-bottom: 1px solid #535461;
  }
`;

const Navbar = () => {
  const { setCartOpen, setModelOpen, user, setUser, setCartItems } =
    useContext(globalContext);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    setCartItems(null);
  };

  return (
    <Wrapper>
      <Left>
        <Logo>
          <Links to="/">Estore</Links>
        </Logo>
      </Left>
      <Right>
        {user ? (
          <>
            <Button>{user.name}</Button>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Button onClick={() => setModelOpen(true)}>Login</Button>
        )}
        <Button onClick={() => setCartOpen(true)}>
          <i className="fas fa-shopping-cart"></i>
        </Button>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
