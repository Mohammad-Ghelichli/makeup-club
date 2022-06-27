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

//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";





const App = () => {
  return (
    <>
    

    
    <Box  sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
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

    </Box>
      <Footer />
    </>
  );
};

export default App;
