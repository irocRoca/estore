import { createContext, useState } from "react";

export const globalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <globalContext.Provider value={{ user, setUser, cartOpen, setCartOpen }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
