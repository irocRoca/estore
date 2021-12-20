import { useEffect, useState } from "react";
import styled from "styled-components";
import OrderItem from "../components/OrderItem";
import { device } from "../helper/sizes";
import { getOrders } from "../services/fetch";

const Container = styled.div`
  height: calc(80vh - 60px);
  padding: 40px;
`;
const Title = styled.h1`
  margin: 20px 0;
  color: #535461;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;

  @media ${device.tablet} {
    display: table;
  }
`;

const TData = styled.th`
  color: #5c5b5b;
  font-weight: bold;
  background: #e3e3e3; //#535461
  display: none;
  padding: 5px;
  padding-left: 10px;
  text-align: left;
  font-size: 18px;
  @media ${device.tablet} {
    display: table-cell;
  }
`;
const Row = styled.tr`
  &:nth-of-type(odd) {
    background: #f7f7f7;
  }
  @media ${device.tablet} {
    display: table-row;
  }
`;

const TBody = styled.tbody`
  @media ${device.tablet} {
    display: table-row-group;
  }
`;

const Orders = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    // Get the orders by this user
    const fetchData = async () => {
      const res = await getOrders();
      setOrders(res);
    };
    fetchData();
  }, []);
  console.log(orders);
  return (
    <Container>
      <Title>Recent Orders</Title>
      <Table>
        <thead>
          <Row>
            <TData>Order</TData>
            <TData>Date</TData>
            <TData>Status</TData>
            <TData>Total</TData>
            <TData></TData>
          </Row>
        </thead>
        <TBody>
          {orders &&
            orders.map((order) => <OrderItem key={order._id} order={order} />)}
        </TBody>
      </Table>
    </Container>
  );
};

export default Orders;

// {
//   _id: new ObjectId("61bec990ab3c81bf74eebc05"),
//   isPaid: false,
//   user: new ObjectId("61bba28e546358d04f3ade6a"),
//   __v: 0,
//   createdAt: 2021-12-19T05:56:33.578Z,
//   lineItems: [],
//   updatedAt: 2021-12-19T05:56:33.578Z
// }
