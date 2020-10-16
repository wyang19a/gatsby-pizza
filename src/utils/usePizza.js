import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // create state to hold order
  // removed this line because we moved useState up to the provider.
  // const [order, setOrder] = useState([]);
  // Now we access both our state and our update functions via context.
  const [order, setOrder] = useContext(OrderContext);

  // make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // make a function to remove things from the order
  function removeFromOrder(i) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, i),
      // everything after the item we want to remove
      ...order.slice(i + 1),
    ]);
  }
  // send this data to serverless function when they checkout.
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
