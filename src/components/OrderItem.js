import styled from "styled-components";
import { device } from "../helper/sizes";

const Row = styled.tr`
  @media ${device.tablet} {
    display: table-row;
  }
  &:nth-of-type(odd) {
    background: #f7f7f7;
  }
`;

const Data = styled.td`
  border: none;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 50%;
  color: #535461;

  &:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
  }
  @media ${device.tablet} {
    display: table-cell;
    padding: 10px;
    &:before {
      display: none;
    }
  }

  &:nth-of-type(1):before {
    content: "Order";
  }
  &:nth-of-type(2):before {
    content: "Date";
  }
  &:nth-of-type(3):before {
    content: "Status";
  }
  &:nth-of-type(4):before {
    content: "Total";
  }
`;

const Button = styled.button`
  border: none;
  background: #5e98aa;
  padding: 10px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  transition: all 100ms ease;
  &:hover {
    background: #335a66;
  }
`;

const OrderItem = ({ order }) => {
  return (
    <Row>
      <Data>{order._id.slice(-5).toUpperCase()}</Data>
      <Data>{new Date(order.updatedAt).toDateString()}</Data>
      <Data>{order.isPaid ? "Completed" : "Incomplete"}</Data>
      <Data>
        ${order.orderTotal.toFixed(2)} for {order.totalQty} items
      </Data>
      <Data>
        <Button>View</Button>
      </Data>
    </Row>
  );
};

export default OrderItem;
