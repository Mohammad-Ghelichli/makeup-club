import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import cart from "../assets/icons/cart.svg";
import account from "../assets/icons/account.svg";
import { cartContext } from "../pages/cart/context/CartContextProvider";

//icons
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  const {state,dispatch}=useContext(cartContext)
  return (
    <Stack
    alignItems="center"
      direction="row"
      sx={{
        gap: { sm: "40px", xs: "10px" },
        mt: { sm: "32px", xs: "10px" },
        justifyContent: "none",
      }}
      px="0px"
    >
    
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center" verticalAlign="baseline">
       
          <Link to="/cart"><img width={60} src={cart} alt="cart" />
          <span class="cart_span" style={{color:"#B8010C",fontSize:"24px",fontWeight:"800"}}>{state.itemCounter}</span></Link>
          <Link to="/login"><img width={60} src={account} alt="account" /></Link>
      </Stack>
      <Link to="/">
        <Typography>

        <img
          src={Logo}
          style={{
            width: "180px",
            height: "110px",
            margin: "0 20px",
            color: "#FF2625",
          }}
          alt="ghelichli"
        />
        </Typography>

      </Link>
      
      <Typography
        fontWeight="600"
        fontSize="120px"
        top="-8px"
        right="10%"
        color="#B8010C"
        position="absolute"
        sx={{ opacity: 0.08, display: { lg: "block", xs: "none" } }}
      >
        Cosmetics
      </Typography>
    </Stack>
  );
};

export default Navbar;
