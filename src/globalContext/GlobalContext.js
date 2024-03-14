import React, { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../helpers/helpers";

const Context = createContext();

export const useGlobalContext = () => useContext(Context);

export const GlobalContext = ({ children }) => {
  const [categories, setCategories] = useState(Category);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart, "item");
  }, [cart]);

  const IncrementCart = (id, item) => {
    console.log(id, item);
    let currenIndex = cart.findIndex((x) => x.id === id);
    console.log(cart[currenIndex]);
    if (currenIndex === -1) {
      cart.push(item);
    } else {
      cart[currenIndex] = item;
    }
    setCart([...cart]);
  };

  const DecrementCart = (id, item) => {
    console.log(item, "item");
    let currenIndex = cart.findIndex((x) => x.id === id);
    item.count === 0 ? cart.splice(currenIndex, 1) : (cart[currenIndex] = item);
    setCart([...cart]);
  };

  return (
    <Context.Provider
      value={{ cart, categories, IncrementCart, DecrementCart }}
    >
      {children}
    </Context.Provider>
  );
};
