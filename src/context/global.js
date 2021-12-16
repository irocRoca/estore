import { createContext, useEffect, useState } from "react";
import { checkAuth } from "../services/fetch";

export const globalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    const validateUser = async () => {
      const res = await checkAuth();
      setUser(res);
    };
    validateUser();
  }, []);

  return (
    <globalContext.Provider
      value={{
        user,
        setUser,
        cartOpen,
        setCartOpen,
        modelOpen,
        setModelOpen,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
