import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../services/fetch";

const Header = styled.h1`
  margin: 60px 20px;
  color: #303030;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  max-width: 1200px;
  padding: 20px;
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
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

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    getData();
  }, []);

  // Return a skeletion of 4 books loading..
  if (!products) return null;

  return (
    <div>
      <Header>Products</Header>
      <Container>
        {products.map((item) => (
          <Card
            key={item.index}
            onClick={() => navigate(`/product/${item._id}`)}
          >
            <Image src={item.image} />
            <Wrapper>
              <div>
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
              </div>
              <Button>+</Button>
            </Wrapper>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ProductList;