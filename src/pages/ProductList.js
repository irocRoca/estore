import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addToCart, getProducts } from "../services/fetch";
import { device } from "../helper/sizes";
import { globalContext } from "../context/global";

const Header = styled.h1`
  margin: 40px 20px 20px 20px;
  color: #535461;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
  }
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const ImageWrap = styled.div`
  cursor: pointer;
  position: relative;

  &:hover {
    background: #fc4545;
  }
`;
const Image = styled.img`
  height: 320px;
  width: 280px;
  object-fit: cover;
`;
const Wrapper = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h3`
  text-transform: capitalize;
  color: #444;
`;

const Button = styled.button`
  background: #fc4545;
  color: white;
  padding: 5px 15px;
  border: none;
  outline; none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

const Price = styled.p``;

const ProductList = () => {
  const [products, setProducts] = useState(null);
  let navigate = useNavigate();
  const { user, setCartItems, setCartOpen, setModelOpen } =
    useContext(globalContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    getData();
  }, []);

  const handleAddToCart = async (e, id) => {
    if (!user) {
      // Open model
      setModelOpen(true);
    } else {
      const res = await addToCart(id);
      // Should return the new cart and update the cart
      setCartItems(res);
      setCartOpen(true);
    }
  };
  // Return a skeletion of 4 books loading..
  if (!products) return null;

  return (
    <div>
      <Header>Products</Header>
      <Container>
        {products.map((item) => (
          <Card key={item._id}>
            <ImageWrap>
              <Image
                src={item.image}
                onClick={() => navigate(`/product/${item._id}`)}
              />
            </ImageWrap>
            <Wrapper>
              <div>
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
              </div>
              <Button onClick={(e) => handleAddToCart(e, item._id)}>+</Button>
            </Wrapper>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ProductList;
