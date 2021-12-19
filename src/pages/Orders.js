import { useEffect, useState } from "react";
import { getOrders } from "../services/fetch";

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
  return <div>{orders && <></>}</div>;
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
