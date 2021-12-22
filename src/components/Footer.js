import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpenText,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// faEnvelopeOpenText
// fa-phone
// fa-map-marker-alt
import { device } from "../helper/sizes";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  color: #535461;

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
    justify-content: center;
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
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "dodgerblue", margin: 5 }}
          />
          <FontAwesomeIcon
            icon={faInstagramSquare}
            style={{ color: "tomato", margin: 5 }}
          />

          <FontAwesomeIcon
            icon={faTwitterSquare}
            style={{ color: "lightskyblue", margin: 5 }}
          />
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
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: 10 }}
            />
            123 SW 456 ST, Miami FL, 98765
          </Contact>
          <Contact>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: 10 }} />
            +1 305 989 4567
          </Contact>
          <Contact>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              style={{ marginRight: 10 }}
            />
            contact@estore.com
          </Contact>
        </ContactWrapper>
      </Section>
    </Wrapper>
  );
};

export default Footer;
