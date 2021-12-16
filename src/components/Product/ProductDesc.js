import { useState, useEffect } from "react";
import styled from "styled-components";
import { getProduct } from "../../services/fetch";
import { device } from "../../helper/sizes";

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    margin: 20px 0 60px 0;
  } ;
`;
const Image = styled.img`
  height: 550px;
  max-width: 425px;
  object-fit: cover;
  margin: auto;
`;
const ProductInfo = styled.div`
  margin: 40px;
  text-align: left;
`;
const Title = styled.h3`
  font-size: 32px;
  margin: 15px 0;
`;

const Desc = styled.p`
  word-spacing: 1.1px;
`;

const Subtitle = styled.h4`
  margin: 16px 0;
`;

const Sizes = styled.div`
  display: flex;
`;

const Size = styled.div`
  margin: 10px;
  width: 20px;
  height: 20px;
  padding: 15px;
  border-radius: 50%;
  font-weight: 600;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) => props.active}

  &:hover {
    background: #ababab;
    color: white;
    border: 2px solid #ababab;
  }

  &:first-child {
    margin-left: 0;
  }
`;

const SizeToggle = styled(Size)`
  ${({ active }) =>
    active && `border: 2px solid #fc4545; color: white; background: #fc4545;`}
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 26px;
  margin: 16px 0;
`;

const Button = styled.button`
  color: white;
  background: #fc4545;
  padding: 12px 30px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

const Specs = styled.div`
  text-align: left;
  padding: 30px;
  flex: 1;
`;

const ProTitle = styled.h4`
  margin: 0 0 25px 0;
  font-size: 20px;
  text-align: center;
`;

const ProSubtitle = styled.h5`
  margin: 0 10px 10px 0;
  font-size: 16px;
`;

const SubText = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

const Shipping = styled.div`
  border: 2px solid black;
  padding: 30px;
  margin: 0 15px;
  border-radius: 10px;
  text-align: left;
  flex: 1;

  > h4 {
    text-align: center;
  }

  > p {
    margin: 0 0 10px 30px;
    font-size: 16px;
    color: #6a6a6a;
  }
`;

const ShipSubHeading = styled.h5`
  margin: 0;
  font-size: 16px;
  > i {
    margin-right: 12px;
    font-size: 16px;
  }
`;

const ProductDesc = ({ id }) => {
  const [active, setActive] = useState(null);
  const [product, setProduct] = useState(null);
  const sizes = ["S", "M", "L", "XL"];

  useEffect(() => {
    const getData = async () => {
      const doc = await getProduct(id);
      setProduct(doc);
    };
    getData();
  }, [id]);

  return (
    <Wrapper>
      {product && (
        <>
          <ProductContainer>
            <Image src={product.image} />
            <ProductInfo>
              <Title>{product.title}</Title>
              <Desc>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Desc>
              <Subtitle>Sizes</Subtitle>
              <Sizes>
                {sizes.map((item, index) => (
                  <SizeToggle
                    key={index}
                    active={active === item}
                    onClick={() => setActive(item)}
                  >
                    {item}
                  </SizeToggle>
                ))}
              </Sizes>
              <Price>$19.99</Price>
              <Button>Add to Cart</Button>
            </ProductInfo>
          </ProductContainer>
          <ProductContainer>
            <Specs>
              <ProTitle>Product Specifications</ProTitle>
              <ProSubtitle>
                Closure Type: <SubText>Button</SubText>
              </ProSubtitle>
              <ProSubtitle>
                Care: <SubText>Machine Wash</SubText>
              </ProSubtitle>
              <ProSubtitle>
                Fabric Content: <SubText>95% Polyester, 5% Spandex</SubText>
              </ProSubtitle>
              <ProSubtitle>
                Country of Origin: <SubText>Imported</SubText>
              </ProSubtitle>
            </Specs>
            <Shipping>
              <ProTitle>Shipping & Returns</ProTitle>
              <ShipSubHeading>
                <i className="fas fa-box"></i>Same Day Pickup
              </ShipSubHeading>
              <p>Need it same day. Check availability and pick up in store.</p>
              <ShipSubHeading>
                <i className="fas fa-truck"></i>Convinemnent Shipping options
              </ShipSubHeading>
              <p>
                Not in store. We ship directly to you. International Available
              </p>

              <ShipSubHeading>
                <i className="fas fa-cubes"></i>Easy Returns
              </ShipSubHeading>
              <p>Shop with confidence. Read our returns policy.</p>
            </Shipping>
          </ProductContainer>
        </>
      )}
    </Wrapper>
  );
};

export default ProductDesc;
