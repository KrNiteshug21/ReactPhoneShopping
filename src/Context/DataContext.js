import { createContext, useCallback, useEffect, useState } from "react";
import data from "../Data/data.json";
import brands from "../Data/brands.json";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [phones, setPhones] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const newPhones = data;
    setPhones(newPhones);
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      const prices = cartItems.map((cartItem) => cartItem.price);
      const newTotalCartPrice = prices.reduce((acc, curr) => acc + curr);
      setTotalCartPrice(newTotalCartPrice);
      console.log(newTotalCartPrice);
    } else {
      setTotalCartPrice(0);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlePriceFilter = (id) => {
    let newPhones = [...phones];
    if (id === "lowToHigh") {
      newPhones.sort((a, b) => a.price - b.price);
      setPhones(newPhones);
    } else {
      newPhones.sort((a, b) => b.price - a.price);
      setPhones(newPhones);
    }
    console.log(phones);
  };

  const removePriceFilter = useCallback(() => {
    const newPhones = [...data];
    setPhones(newPhones);
    console.log(phones);
  }, [phones]);

  const handleAddCart = useCallback(
    (phoneObj) => {
      const check = cartItems.filter((cartItem) => cartItem.id === phoneObj.id);
      if (check.length === 0) {
        var newCartItems = cartItems.slice(0, cartItems.length);
        newCartItems.push(phoneObj);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        console.log(cartItems);
      }
    },
    [cartItems]
  );

  const handleDeleteCart = useCallback(
    (phoneObj) => {
      const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== phoneObj.id
      );
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      console.log(cartItems);
    },
    [cartItems]
  );

  return (
    <DataContext.Provider
      value={{
        phones,
        setPhones,
        brands,
        search,
        setSearch,
        handlePriceFilter,
        removePriceFilter,
        cartItems,
        setCartItems,
        handleAddCart,
        handleDeleteCart,
        totalCartPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
