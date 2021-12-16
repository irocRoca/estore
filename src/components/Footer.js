import styled from "styled-components";

import { device } from "../helper/sizes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;

  &::before {
    content: "";
    height: 1px;
    background: #999999;
    width: 80%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin: 30px auto 0 auto;
    max-width: 1200px;
  }
`;
const Section = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h3``;
const Desc = styled.p`
  max-width: 400px;
`;
const MediaContainer = styled.div`
  font-size: 28px;
  text-align: left;
  margin-left: 25px;
  margin-top: 25px;
  > i {
    margin-right: 15px;
    cursor: pointer;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px;
  cursor: pointer;
`;

const ContactWrapper = styled.div`
  text-align: left;
`;

const Contact = styled.p`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  margin: 16px 0;

  > i {
    margin-right: 10px;
    font-size: 18px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Section>
        <Heading>Estore</Heading>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </Desc>
        <MediaContainer>
          <i
            className="fab fa-facebook-square"
            style={{ color: "dodgerblue" }}
          ></i>
          <i
            className="fab fa-instagram-square"
            style={{ color: "tomato" }}
          ></i>
          <i
            className="fab fa-twitter-square"
            style={{ color: "lightskyblue" }}
          ></i>
        </MediaContainer>
      </Section>
      <Section>
        <Heading>Useful Links</Heading>
        <LinkWrapper>
          <Column>
            <Link>Home</Link>
            <Link>Men's Fashion</Link>
            <Link>Women's Fashion</Link>
            <Link>Order Tracking</Link>
          </Column>
          <Column>
            <Link>Cart</Link>
            <Link>My Account</Link>
            <Link>Wishlist</Link>
            <Link>Terms & Conditions</Link>
          </Column>
        </LinkWrapper>
      </Section>
      <Section>
        <Heading>Contact</Heading>
        <ContactWrapper>
          <Contact>
            <i className="fas fa-map-marker-alt"></i>123 SW 456 ST, Miami FL,
            98765
          </Contact>
          <Contact>
            <i className="fas fa-phone"></i>+1 305 989 4567
          </Contact>
          <Contact>
            <i className="fas fa-envelope-open-text"></i>contact@estore.com
          </Contact>
        </ContactWrapper>
      </Section>
    </Wrapper>
  );
};

export default Footer;
