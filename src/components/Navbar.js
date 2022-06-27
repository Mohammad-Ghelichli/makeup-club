import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import cart from "../assets/icons/cart.svg";
import account from "../assets/icons/account.svg";

//icons
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "40px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="0px"
    >
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
       
          <img width={60} src={cart} alt="cart" />
       
          <img width={60} src={account} alt="account" />
      </Stack>
      <Link to="/">

        <img
          src={Logo}
          style={{
            width: "300px",
            height: "100px",
            margin: "0 20px",
            color: "#FF2625",
          }}
          alt="ghelichli"
        />

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
