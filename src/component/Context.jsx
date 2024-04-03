import axios from "axios";
import { createContext, useState, useContext, useEffect, useRef } from "react";

const Loading = createContext("");

export const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCart, setIsCart] = useState({});
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

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
  let handleChange = (e) => {
    if (e.target.value !== "All") {
      setFilter(e.target.value);
    } else {
      setFilter("");
    }
  };

  const searchInput = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  const headRef = useRef(null);

  // console.log(headRef.current.add("hell"));
  let header = document.getElementById("nav_header");
  const scroll_function = (window.onscroll = () => {
    try {
      if (window.scrollY > 667 && header != null && header != undefined) {
        header.classList.add("fixed");
        header.classList.add("top-0");
        header.classList.add("shadow-lg");
      } else if (header === null && header === undefined) {
        console.log("error");
      } else {
        header.classList.remove("fixed");
        header.classList.remove("top-0");
        header.classList.remove("shadow-lg");
        header.classList.add("transition-all");
      }
    } catch (error) {
      console.log(error);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    scroll_function();
  });
  const handleSubmit = () => {
    try {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: "kminchelle",
          password: "0lelplR",
        })
        .then((res) => {
          if (localStorage.getItem("token") == null) {
            localStorage.setItem("token", res.data.token);
            console.log(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
    return;
  };
  return (
    <Loading.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        handleCart,
        cart,
        isCart,
        handleSubmit,
        filter,
        setFilter,
        handleChange,
        searchInput,
        search,
        headRef,
      }}
    >
      {children}
    </Loading.Provider>
  );
};

export function LoadingContext() {
  return useContext(Loading);
}

// export default Context;
