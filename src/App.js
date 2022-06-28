import React from "react";
import { Box, Pagination } from "@mui/material";
import { Route, Routes } from "react-router-dom";
//context
//import pages
import Home from "./pages/Home";
//import product group pages
import Lip from "./pages/ProductGroup/Lip";
import AilPolish from "./pages/ProductGroup/AilPolish";
import Eyebrow from "./pages/ProductGroup/Eyebrow";
import Blush from "./pages/ProductGroup/Blush";
import Bronzer from "./pages/ProductGroup/Bronzer";
import Eyeliner from "./pages/ProductGroup/Eyeliner";
import Eyeshadow from "./pages/ProductGroup/Eyeshadow";
import LipStick from "./pages/ProductGroup/LipStick";
import Foundation from "./pages/ProductGroup/Foundation";
import Mascara from "./pages/ProductGroup/Mascara";
import Detailes from "./pages/Detailes"
//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/account/Login";
import SignUp from "./pages/account/SignUp";
import CartContextProvider from "./pages/cart/context/CartContextProvider";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <>
      <Box sx={{ width: { xl: "1488px" } }} m="auto">
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/detailes/:id" element={<Detailes/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/lip" element={<Lip />} />
            <Route path="/ailpolish" element={<AilPolish />} />
            <Route path="/blush" element={<Blush />} />
            <Route path="/bronzer" element={<Bronzer />} />
            <Route path="/eyebrow" element={<Eyebrow />} />
            <Route path="/eyeliner" element={<Eyeliner />} />
            <Route path="/eyeshadow" element={<Eyeshadow />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/lipstick" element={<LipStick />} />
            <Route path="/mascara" element={<Mascara />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CartContextProvider>
      </Box>
      <Footer />
    </>
  );
};

export default App;
