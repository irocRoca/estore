import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../helper/sizes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  align-items: center;

  @media ${device.tablet} {
    max-width: 1200px;
    flex-direction: row;
    margin: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 430px;
  height: 500px;
  margin: 20px;
  width: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h3`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
`;

const Button = styled(Link)`
  border: none;
  color: #474747;
  background-color: #f5f5f5;
  text-decoration: none;
  font-size: 18px;
  padding: 15px 20px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background: #c9c9c9;
    color: white;
  }
`;

const Category = () => {
  return (
    <Wrapper>
      <Box
        image={
          "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      >
        <Container>
          <Heading>Jeans</Heading>
          <Button to="/products">Shop Now</Button>
        </Container>
      </Box>
      <Box
        image={
          "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        }
      >
        <Container>
          <Heading>Mens</Heading>

          <Button to="/products">Shop Now</Button>
        </Container>
      </Box>
      <Box
        image={
          "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80"
        }
      >
        <Container>
          <Heading>Women</Heading>
          <Button to="/products">Shop Now</Button>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Category;
