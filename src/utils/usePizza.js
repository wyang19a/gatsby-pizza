import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // create state to hold order
  const [order, setOrder] = useState([]);
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
}
