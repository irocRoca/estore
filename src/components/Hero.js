import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../helper/sizes";

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  max-width: 1200px;
  margin: auto;
  align-items: center;
  background: #ffe2e2;
  position: relative;
  font-family: "Montserrat", sans-serif;
`;

const Left = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
// Bigger Screen remove width

const Right = styled.div`
  text-align: left;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  background: #d9d9d982;

  @media ${device.laptop} {
    transform: none;
    margin: 25px;
    background: none;
  }
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 500;
  letter-spacing: 0.8px;

  @media ${device.tablet} {
    font-size: 48px;
    font-weight: 600;
  }

  @media ${device.laptop} {
    font-size: 60px;
    font-weight: 600;
  }
`;
const Subheading = styled.p`
  font-size: 18px;
  line-height: 39px;
  letter-spacing: 0.06em;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;
const Button = styled.button`
  background: #5e98aa;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.06em;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 20px;

  & > a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background: #4c7d8d;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Left src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <Right>
        <Title>Summer Sale</Title>
        <Subheading>
          The lastest in fashion going off the shavles 30% off{" "}
        </Subheading>
        <Button>
          <Link to="/products">Show more</Link>
        </Button>
      </Right>
    </Wrapper>
  );
};

export default Hero;
