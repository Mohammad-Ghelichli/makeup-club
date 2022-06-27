import React, { useEffect, useState, useContext, createContext } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData } from "../utils/FetchData";
import cart from ".././assets/icons/cart.svg"
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const searchHandler = async () => {
    if (search) {
      const searchData = await fetchData(
        "http://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const category = await searchData.filter(
        (item) => item.category !== null
      );
      const category2 = await category.filter((item) =>
        item.category.includes(search)
      );
      await setResult(category2);
      await console.log(result);
      await setSearch("");
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography
        fontWeight="700"
        fontSize="40px"
        justifyContent="center"
        mb="40px"
      >
        The Best Makeup Products of 2022
      </Typography>
      <Box position="relative">
        <TextField
          sx={{
            input: { border: "none" },
            width: { lg: "800px", xs: "350px" },
          }}
          placeholder="Search Exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
        />
        <Button
          onClick={searchHandler}
          className="search-btn"
          sx={{
            bgcolor: "#B8010C",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          Search
        </Button>
      </Box>
      <div style={{display:"flex" ,flexDirection:"row" ,flexWrap:"wrapReverse",
    gap:"10px"
}}>
        {result.map((item) => (
          <div class="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src={item.image_link} alt=""/>
          </div>
          <div class="product-details">
            <span class="product-catagory">{item.category}</span>
            <h4>{item.name}</h4><br/>
            <p> <h3>brand : {item.brand}</h3></p>
            <div class="product-bottom-details">
              <div class="product-price"><small>$ {item.price}</small>${item.price}</div>
              <div class="product-links">
                <i class="fa fa-shopping-cart"><img width="50px" src={cart} alt=""/></i>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </Stack>
  );
};

export default SearchBox;
