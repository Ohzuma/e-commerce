import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const Loading = createContext("");

export const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCart, setIsCart] = useState({});
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    let isPresent = false;

    cart.forEach((product) => {
      if (product?.id === item.id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
    // axios
    //   .post("https://dummyjson.com/carts/add", {
    //     userId: 1,
    //     products: [
    //       {
    //         id: item?.id,
    //       },
    //     ],
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });

    // console.log(cart);
  };

  // useEffect(() => {
  //   window.localStorage.setItem("cart", JSON.stringify(cart));
  //   // window.localStorage.setItem("cart", cart);
  // }, [cart]);

  // useEffect(() => {
  //   const ct = setCart(window.localStorage.getItem("cart"));
  //   // const it = JSON.parse(ct);
  // }, []);

  // console.log(cart?.id);
  return (
    <Loading.Provider
      value={{ loading, setLoading, error, setError, handleCart, cart, isCart }}
    >
      {children}
    </Loading.Provider>
  );
};

export function LoadingContext() {
  return useContext(Loading);
}

// export default Context;
