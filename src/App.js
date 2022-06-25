import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import ExerciseDetailes from "./pages/ExerciseDetailes";
//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetailes />} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;
