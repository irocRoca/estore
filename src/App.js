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
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import ProctectedRoute from "./components/ProctectedRoute";

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

function App() {
  return (
    <>
      {/* Need to add protected routes */}
      <GlobalContextProvider>
        <Navbar />
        <Cart />
        <Container>
          <Routes>
            <Route
              path="/orders"
              element={
                <ProctectedRoute>
                  <Orders />
                </ProctectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProctectedRoute>
                  <Checkout />
                </ProctectedRoute>
              }
            />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Auth />
        </Container>
        <Footer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
