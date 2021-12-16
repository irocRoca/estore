import { useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import GlobalContextProvider from "./context/global";

import Auth from "./components/authentication/Auth";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./pages/ProductList";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GlobalContextProvider>
        <Navbar setModelOpen={setOpen} />
        <Cart />
        <Container>
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Auth open={open} setOpen={setOpen} />
        </Container>
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
