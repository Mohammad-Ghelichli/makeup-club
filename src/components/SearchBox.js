import React, { useEffect, useState, useContext, createContext } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { fetchData } from "../utils/FetchData";
import Product from "../pages/cart/shared/Product";
import loading from "../assets/icons/loading.svg"


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
      sx={{ fontSize: { lg: "40px", xs: "19px" } }}
        fontFamily="none"
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
      <div style={{display:"flex" ,flexDirection:"rowReverse" ,flexWrap:"wrap",
    gap:"10px"
}}>
         {result ? (
        result.map(item => <Product key={item.id} item={item}/>
          
        )
      ) : (
        <div>

          <img width="400px" src={loading} alt="loading"/>

        </div>
      )}
      </div>
    </Stack>
  );
};

export default SearchBox;
