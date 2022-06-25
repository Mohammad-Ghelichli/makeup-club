import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
//icons
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <img src={Logo} style={{width:"300px",height:"100px",margin:"0 20px"}} alt="ghelichli" />
      <Stack direction="row"
      gap="40px"
      fontSize="24px"
    
      alignItems="center" >
        <Link to="/" style={{textDecoration:"none" ,color:"#3a1212"
    , }}>Home</Link>
        <a href="#exercise" style={{textDecoration:"none",color:"#3a1212"}}>Exercise</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;