import { createContext, useState, useContext } from "react";

const Loading = createContext("");

export const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <Loading.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </Loading.Provider>
  );
};

export function LoadingContext() {
  return useContext(Loading);
}

// export default Context;
