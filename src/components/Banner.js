import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import makeup from "../assets/images/makeup.jpg"
import style from "../App.css"
const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography fontWeight="600" fontSize="26px" color="#B8010C">
        Makeup club
      </Typography>
      <Typography fontWeight="600" fontSize="22px" >
      Dose Your Makeup Make You Happy?
      </Typography>
      <Typography fontWeight="600" fontSize="24px" mb={9}>
        Thats Right
      </Typography>
      <Button variant="contained" sx={{ bgcolor:"#B8010C",
            color:"#fff"}} >
        Explore Exercise
      </Button>
      <Typography fontWeight="600" fontSize="244px" color="#B8010C" mt="80px"
      sx={{opacity:0.2,
      display:{lg:"block",xs:"none"}}}>
        MakeUp
      </Typography>
      <Typography >
        <img src={makeup} alt ="banner" className="banner"/>
      </Typography>
    </Box>
  );
};

export default Banner;
